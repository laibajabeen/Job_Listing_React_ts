import { useState, useEffect } from "react";
import JobListing from "./JobListing";
import Spinner from "./Spinner";
import type { Job } from "../types";
import type { FC } from "react";

import api from "../api/axiosClient"; // Adjust the import path as necessary

interface JobsListingsProps {
  isHome?: boolean;
}
const JobsListings: FC<JobsListingsProps> = ({ isHome = false }) => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const apiUrl = isHome
      ? import.meta.env.VITE_BACKEND_URL + "/jobs?_limit=3"
      : import.meta.env.VITE_BACKEND_URL + "/jobs";
    const fetchJobs = async () => {
      try {
        const res = await api.get(apiUrl);
        const data = await res.data;

        console.log({ data });
        setJobs(data);
      } catch (error) {
        alert("Error fetching jobs. Please try again later.");
        console.error("Error fetching data", error);
      } finally {
        setLoading(false);
      }
    };
    fetchJobs();
  }, []);
  return (
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          {isHome ? "Recent Jobs" : "Browse Jobs"}
        </h2>

        {loading ? (
          <Spinner loading={loading} />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {jobs.map((job) => (
              <JobListing key={job.id} job={job} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default JobsListings;
