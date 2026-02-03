import { JobApplication, JobStatus } from "@/types/job";

interface Props {
  title: string;
  status: JobStatus;
  jobs: JobApplication[];
}

export default function KanbanColumn({ title, status, jobs }: Props) {
  return (
    <div className="bg-gray-100 rounded p-3 w-64">
      <h2 className="font-semibold mb-3">{title}</h2>

      <div className="space-y-2">
        {jobs
          .filter((job) => job.status === status)
          .map((job) => (
            <div
              key={job.id}
              className="bg-white p-3 rounded shadow"
            >
              <div className="font-medium">{job.company_name}</div>
              <div className="text-sm text-gray-600">
                {job.position}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
