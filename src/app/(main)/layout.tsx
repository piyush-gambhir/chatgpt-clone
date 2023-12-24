import Sidebar from "@/components/sidebar/sidebar";
import SettingsModal from "@/components/modals/settings-modal";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full h-full flex flex-row dark:bg-[#343541] dark:text-white">
      <Sidebar />
      {children}
    </div>
  );
}
