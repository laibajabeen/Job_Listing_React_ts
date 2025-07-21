// types.ts

export interface Job {
  id: string;
  title: string;
  type: string;
  location: string;
  description: string;
  salary: string;
  company: {
    name: string;
    description: string;
    contactEmail: string;
    contactPhone: string;
  };
}

// For creating a job BEFORE the id is generated (e.g., from a form)
export type NewJob = Omit<Job, "id">;
