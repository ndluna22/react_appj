import React, { useState, useEffect } from "react";
import Search from "./SearchForm";
import JoblyApi from "./api";

function JobList() {
  console.debug("JobList");

  const [jobs, setJobs] = useState(null);

  useEffect(function getAllJobsOnMount() {
    console.debug("JobList useEffect getAllJobsOnMount");
    search();
  }, []);

  async function search(title) {
    let jobs = await JoblyApi.getJobs(title);
    setJobs(jobs);
  }

  return (
    <div className="JobList col-md-8 offset-md-2">
      <Search searchFor={search} />
      {jobs.length}
    </div>
  );
}

export default JobList;
