import SearchHeader from "@/components/SearchHeader";
import React from "react";

export default function Layout({ children }) {
  return (
    <div>
      <SearchHeader />
      {children}
    </div>
  );
}
