import SearchHeader from "@/components/SearchHeader";

export default function Layout({ children }) {
  return (
    <div>
      <SearchHeader />
      {children}
    </div>
  );
}
