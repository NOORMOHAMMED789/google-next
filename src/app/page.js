import HomeHeader from "@/components/HomeHeader";
import HomeSearch from "@/components/HomeSearch";
import Image from "next/image";
import React from "react";

export default function Home() {
  return (
    <div>
      <HomeHeader />
      <div className="flex flex-col items-center mt-24">
        <Image
          priority={true}
          src="https://cdn.logojoy.com/wp-content/uploads/20230801145608/Current-Google-logo-2015-2023-600x203.png"
          alt="google-icon"
          width={300}
          height={100}
          style={{ width: "auto" }}
        />
        <HomeSearch />
      </div>
    </div>
  );
}
