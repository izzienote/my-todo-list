import { TODO_PAGE } from "@/constants/common";
import Link from "next/link";

const HomePage = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen gap-5">
      <h1 className="border-b-2 border-yellow-900 justify-start text-2xl font-semibold text-amber-950">
        TODAY&apos;s TO DO
      </h1>
      <p className="text-gray-500">Manage your life efficiently</p>
      <Link href={TODO_PAGE}>
        <button className="border border-yellow-950 rounded-md px-3 py-1 text-yellow-900 hover:bg-yellow-950 hover:text-white">
          Go &gt;
        </button>
      </Link>
    </div>
  );
};

export default HomePage;
