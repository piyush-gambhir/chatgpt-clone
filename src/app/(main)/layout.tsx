import Sidebar from "@components/sidebar";
import SettingsModal from "@components/settings-modal";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full h-full flex flex-row dark:bg-[#343541] dark:text-white">
      <Sidebar />
      {children}
      {/* <SettingsModal /> */}
    </div>
  );
}
