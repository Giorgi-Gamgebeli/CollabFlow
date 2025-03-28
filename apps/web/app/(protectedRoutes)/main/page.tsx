"use client";

// import { useSession } from "next-auth/react";

function Page() {
  // const { data: session } = useSession();

  // if (!session) return <p>no session</p>;

  return (
    <main className="bg-red h-screen w-screen">{/* <>{session}</> */}</main>
  );
}

export default Page;
