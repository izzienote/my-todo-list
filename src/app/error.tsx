"use client";

import { HOME_PAGE } from "@/constants/common";
import Link from "next/link";

const ErrorPage = () => {
  return (
    <section className="text-slate-800 flex flex-col w-full min-h-screen items-center justify-center gap-3">
      <h1 className="font-bold text-3xl">WHOOPS!</h1>
      <p>Sorry, the page you are looking for was not found</p>
      <Link href={HOME_PAGE} className="text-blue-500 underline">
        Return home
      </Link>
    </section>
  );
};

export default ErrorPage;
