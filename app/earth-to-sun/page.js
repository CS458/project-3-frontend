"use client";
import Link from "next/link";
export default function EarthToSun() {


  return (
    <div className="flex flex-col justify-center items-center w-full">
      <div className="flex flex-row bg-teal-300 w-4/5 justify-between gap-6 p-4 rounded-lg">
        <Link href={"/"}>
          <div className="mx-6 cursor-pointer text-[#252525] font-semibold hover:bg-teal-100 rounded-xl p-1">
            Sea
          </div>
        </Link>
        <Link href={"/earth-to-sun"}>
          <div
            id="earth-to-sun"
            className="mx-6 cursor-pointer text-[#252525] font-semibold hover:bg-teal-100 rounded-xl p-1"
          >
            Sun
          </div>
        </Link>
      </div>
    </div>
  );
}
