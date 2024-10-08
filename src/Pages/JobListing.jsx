import { getJobs } from "@/api/apijobs"
import JobCard from "@/components/JobCard"
import useFetch from "@/hooks/use-fetch"
import { useUser } from "@clerk/clerk-react"
import { useEffect, useState } from "react"
import { BarLoader } from "react-spinners"

const JobListing = () => {
  const[searchQuery,setSearchQuery] = useState("");
  const[location,setLocation] = useState("");
  const[company_id,setCompany_id] = useState("");
  const {isLoaded} = useUser()

  const {
    fn:fnjobs,
    data:jobs,
    loading:loadingjobs
  } =  useFetch(getJobs,{
    location,
    company_id,
    searchQuery,
  })

  // console.log(datajobs);

  useEffect(()=>{

    if(isLoaded){

      fnjobs();

    }

  },[isLoaded,location, company_id, searchQuery])

  if(!isLoaded)
    {
      return <BarLoader className="mb-4" width={"100%"} color="#36d7b7"/>
    }

  return (
    <div>
      <h1 
      className="gradient-title font-extrabold text-6xl sm:text-7xl text-center pb-8">
      Latest Jobs
      </h1>

      {/* Add filter here */}

      {loadingjobs && (
        <BarLoader className="mt-4" width={"100%"} color="#36d7b7"/>
      )}

      {loadingjobs == false && (
        <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {jobs?.length ? (
             jobs.map((job)=>{
              return <JobCard key={job.id} job={job}
                savedInit={job?.saved?.length > 0}
              />
             })
          ) : (
            <div> No Jobs found 😑</div>
          )}
        </div>
      )}
    </div>
  )
}

export default JobListing
