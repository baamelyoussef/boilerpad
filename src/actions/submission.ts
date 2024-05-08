import { createClient } from "@supabase/supabase-js";
import { Database } from "../../types_db";

const supabase = createClient(
  "https://pzwitdajxudhyajnolwr.supabase.co" || "",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB6d2l0ZGFqeHVkaHlham5vbHdyIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcxNTE3MTkwNSwiZXhwIjoyMDMwNzQ3OTA1fQ.zfy-eMknFK9NoTuVdBZW6q9B7pThmbRPaZ767MM7Zag" ||
    ""
);
export const addSubmission = async (data:any) => {
  
const { error } = await supabase
.from('submissions')
.insert({ twitter_link: data?.twitter_link, boilerplate_link: data?.boilerplate_link })
return error;
};
