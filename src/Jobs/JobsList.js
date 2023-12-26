import React, { useEffect, useState } from "react";
import JoblyApi from "../helpers/API";
import JobCard from "./JobCard";
import Navigation from "../Nav/Navbar";

const JobsList = () =>{
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
      async function fetchData() {
        try {
          const response = await JoblyApi.getJobs();
          setJobs(response);
        } catch (error) {
          console.error("Error fetching jobs:", error);
        }
      }
  
      fetchData();
    }, []);
  
    return (
      <div>
        <Navigation />
       <div >
          {jobs.map((job) => (
            <div key={job.id}>
              <JobCard job={job} />
            </div>
          ))}
        </div>
      </div>
    );
}

export default JobsList;