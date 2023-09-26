import Filter from "../../ui/Filter";
import SortBy from "../../ui/SortBy";
import TableOperations from "../../ui/TableOperations";

function CabinTableOperations() {
  return (
    <TableOperations>
      <Filter
        filterField="discount"
        options={[
          { label: "All", value: "all" },
          { label: "No discount", value: "no-discount" },
          { label: "With discount", value: "with-discount" },
        ]}
      />

      <SortBy
        options={[
          { label: "Sotr by name (A-Z)", value: "name-asc" },
          { label: "Sotr by name (Z-A)", value: "name-desc" },
          { label: "Sotr by price (low first)", value: "regularPrice-asc" },
          { label: "Sotr by price (high first)", value: "regularPrice-desc" },
          { label: "Sotr by capacity (low first)", value: "maxCapacity-asc" },
          { label: "Sotr by capacity (high first)", value: "maxCapacity-desc" },
        ]}
      />
    </TableOperations>
  );
}

export default CabinTableOperations;
