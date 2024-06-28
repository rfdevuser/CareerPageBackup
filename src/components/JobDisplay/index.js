"use client"
import React from 'react';
import JobCard from '../Assests/jobCard'; // Assuming jobCard is a component and should be imported as JobCard
import { useQuery } from '@apollo/client';
import { JOBSINFO } from '@/utils/gql/GQL_QUERIES';

const JobDisplay = () => {
 
    const { loading, error, data } = useQuery(JOBSINFO);
  
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;
  
    console.log(data); 
  return (
    <>
    <div className='bg-white text-black text-3xl flex items-center justify-center '>𝑱𝒐𝒊𝒏 𝒐𝒖𝒕 𝑻𝒆𝒂𝒎</div>
    <div className='bg-white text-black gap-4 flex justify-center flex-wrap mt-2'>
    {data && data.jobsInfo.map((job, index) => (
  <JobCard key={job.id} title={job.job_title} id={job.job_id} brief={job.job_brief} />
))}

      {/* <JobCard title={"sde"} id={"sde001"} location={"delhi"}/> */}
 
    </div>
    </>
  );
}

export default JobDisplay;
