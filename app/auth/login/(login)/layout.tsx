export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full h-full items-center bg-white text-black">
      {children}
    </div>
  );
}
