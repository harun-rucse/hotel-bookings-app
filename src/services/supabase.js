import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://rdxnbpuahuzevrhfonca.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJkeG5icHVhaHV6ZXZyaGZvbmNhIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTUzMjkwNTYsImV4cCI6MjAxMDkwNTA1Nn0.Upy3t15eAQShvR5eFzvyWcWu9xnZntZEBBwBfaqal9o";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
