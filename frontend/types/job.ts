export type JobStatus = "APPLIED" | "INTERVIEW" | "OFFER" | "REJECTED";

export interface JobApplication {
  id: string;
  company_name: string;
  position: string;
  status: JobStatus;
  applied_date: string;
  notes: string;
}
