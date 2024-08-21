import supabaseCLient from "@/utils/supabase.js";

export async function getJobs(token)
{
    const supabase = await supabaseCLient(token);

    let query = supabase.from("jobs").select("*");

   const{data,error} =  await query;

   if(error)
   {
    console.error("Erorr fetching jobs", error)
    return null;
   }

   return data;
}