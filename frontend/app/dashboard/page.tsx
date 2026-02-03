"use client";

import { useEffect, useState } from "react";
import { fetchJobs } from "@/services/api";
import { getToken } from "@/lib/auth";
import { useRouter } from "next/navigation";

export default function DashboardPage() {
  const [jobs, setJobs] = useState<any[]>([]);
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
      <h1 className="text-2xl font-bold mb-4">My Applications</h1>
      <pre className="bg-gray-100 p-4 rounded">
        {JSON.stringify(jobs, null, 2)}
      </pre>
    </div>
  );
}
