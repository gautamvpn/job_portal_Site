import supabaseCLient from "@/utils/supabase.js";

export async function getJobs(token, { location, company_id, searchQuery }) {
    const supabase = await supabaseCLient(token);

    let query = supabase.from("jobs")
        .select("*, saved: saved_jobs(id), company: companies(name,logo_url)");

    if (location) {
        query = query.eq("location", location)
    }

    if (company_id) {
        query = query.eq("company_id", company_id)
    }

    if (searchQuery) {
        query = query.ilike("title", `%${searchQuery}%`)
    }

    const { data, error } = await query;

    if (error) {
        console.error("Erorr fetching jobs", error)
        return null;
    }

    return data;
}



// for saved jobs

export async function SaveJob(token, { alreadySaved }, saveData) {
    const supabase = await supabaseCLient(token);

    if (alreadySaved) {
        const { data, error: deleteError } = await supabase
            .from("saved_jobs")
            .delete()
            .eq("job_id", saveData.job_id);

        if (deleteError) {
            console.error("Erorr Deleting saved jobs", deleteError)
            return null;
        }

        return data;
    } else {
        const { data, error: insertError } = await supabase
            .from("saved_jobs")
            .insert([saveData])
            .select()

        if (insertError) {
            console.error("Erorr fetching jobs", insertError)
            return null;
        }

        return data;

    }

}