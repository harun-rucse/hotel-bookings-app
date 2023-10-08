import { useSearchParams } from "react-router-dom";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getCabins } from "../../services/apiCabins";
import { PAGE_SIZE } from "../../utils/constants";

export function useCabins() {
  const [searchParams] = useSearchParams();
  const queryClient = useQueryClient();

  // Filter
  const filterValue = searchParams.get("discount");
  const filter =
    !filterValue || filterValue === "all"
      ? null
      : {
          field: "discount",
          value: 0,
          method: filterValue === "no-discount" ? "eq" : "gt",
        };

  // Sort
  const sortByValue = searchParams.get("sortBy") || "name-asc";
  const [field, direction] = sortByValue.split("-");
  const sortBy = { field, direction };

  // Pagination
  const page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));

  // Query
  const { isLoading, data: { data: cabins, count } = {} } = useQuery({
    queryKey: ["cabins", filter, sortBy, page],
    queryFn: () => getCabins({ filter, sortBy, page }),
  });

  // Pre-fetching
  const pageCount = Math.ceil(count / PAGE_SIZE);
  if (page < pageCount) {
    queryClient.prefetchQuery({
      queryKey: ["cabins", filter, sortBy, page + 1],
      queryFn: () => getCabins({ filter, sortBy, page: page + 1 }),
    });
  }

  if (page > 1) {
    queryClient.prefetchQuery({
      queryKey: ["cabins", filter, sortBy, page - 1],
      queryFn: () => getCabins({ filter, sortBy, page: page - 1 }),
    });
  }

  return { isLoading, cabins, count };
}
