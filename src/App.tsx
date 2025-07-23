import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import axios from "axios";
import JobsPages, { jobLoader } from "./pages/JobsPages";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import AddJobPage from "./pages/AddJobPage";
import JobPage from "./pages/JobPage";
import NotFoundPage from "./pages/NotFoundPage";
import EditJobPage from "./pages/EditJobPage";

import type { FC } from "react";
import type { Job, NewJob } from "./types";

const App: FC = () => {
  // Add Job
  const addJob = async (newJob: NewJob): Promise<void> => {
    await axios.post("api/jobs", newJob);
  };

  // Delete Job
  const deleteJob = async (id: string): Promise<void> => {
    await axios.delete(`api/jobs/${id}`);
  };

  // Edit Job
  const updateJob = async (job: Job): Promise<void> => {
    await axios.put(`/api/jobs/${job.id}`, job);
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/jobs" element={<JobPage />} />
        <Route path="/add-job" element={<AddJobPage addJobSubmit={addJob} />} />
        <Route
          path="/edit-job/:id"
          element={<EditJobPage updateJobSubmit={updateJob} />}
          loader={jobLoader}
        />
        <Route
          path="/jobs/:id"
          element={<JobsPages deleteJob={deleteJob} />}
          loader={jobLoader}
        />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
