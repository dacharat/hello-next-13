"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Page() {
  const [page, setPage] = useState("1");
  const router = useRouter();
  return (
    <>
      <h1>Hello, Next.js!</h1>
      <button type="button" onClick={() => router.push(`/blog/${page}`)}>
        Blog
      </button>
    </>
  );
}
