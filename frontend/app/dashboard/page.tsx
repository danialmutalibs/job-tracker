"use client";

import { useEffect, useState } from "react";
import { fetchJobs } from "@/services/api";
import { getToken } from "@/lib/auth";
import { useRouter } from "next/navigation";
import KanbanColumn from "@/components/KanbanColumn";
import { JobApplication } from "@/types/job";

export default function DashboardPage() {
  const [jobs, setJobs] = useState<JobApplication[]>([]);
  const router = useRouter();

  useEffect(() => {
    const token = getToken();

    if (!token) {
      router.push("/login");
      return;
    }

    fetchJobs(token)
      .then(setJobs)
      .catch(() => {
        router.push("/login");
      });
  }, [router]);

  return (
    <div className="p-6">
  <h1 className="text-2xl font-bold mb-6">My Applications</h1>

  <div className="flex gap-4 overflow-x-auto">
    <KanbanColumn title="Applied" status="APPLIED" jobs={jobs} />
    <KanbanColumn title="Interview" status="INTERVIEW" jobs={jobs} />
    <KanbanColumn title="Offer" status="OFFER" jobs={jobs} />
    <KanbanColumn title="Rejected" status="REJECTED" jobs={jobs} />
  </div>
</div>

  );
}
