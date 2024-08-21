import { getJobs } from "@/api/apijobs"
import { useSession } from "@clerk/clerk-react"
import { useEffect } from "react"

const JobListing = () => {

  const {session} = useSession()

  const fetchJobs = async()=>{
    const supabaseAccessToken = await session.getToken({
      template:"supabase",
    });

    const data = await getJobs(supabaseAccessToken)
    console.log(data)
  }

  useEffect(()=>{
    fetchJobs()
  },[])


  return (
    <div>
      Job Listing
    </div>
  )
}

export default JobListing
