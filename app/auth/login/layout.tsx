export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full h-full flex flex-row bg-[#FFFFDB] dark:bg-[#00002E]">
      {children}
    </div>
  );
}
