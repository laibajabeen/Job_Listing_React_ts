import JobsListings from "../components/JobsListings";
import type { FC } from "react";
const JobPage: FC = () => {
  return (
    <section className="bg-blue px-4 py-6">
      <JobsListings />
    </section>
  );
};

export default JobPage;
