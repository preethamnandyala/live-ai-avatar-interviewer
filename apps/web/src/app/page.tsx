"use client";

import { useEffect, useState } from "react";
import { getHealth } from "@/services/api";

export default function Home() {
  const [status, setStatus] = useState<string>("loading...");
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getHealth()
      .then((data) => setStatus(data.status))
      .catch((err) => setError(err.message));
  }, []);

  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="p-6 rounded border">
        <h1 className="text-xl font-bold mb-2">
          Live AI Avatar Interviewer (Dev)
        </h1>
        {error ? (
          <p className="text-red-500">Error: {error}</p>
        ) : (
          <p>Backend health: {status}</p>
        )}
      </div>
    </main>
  );
}
