import ModelDropdownButton from "@components/model-dropdown-button";

export default function ChatHeader() {
  return (
    <div className="sticky bg-transparent top-0 mb-1.5 flex items-center justify-between z-10 h-14 p-2 font-semibold">
      <div className="flex flex-row justify-between">
        <ModelDropdownButton />
      </div>
    </div>
  );
}
