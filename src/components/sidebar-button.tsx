type Props = {
  children: React.ReactNode;
};

export default function SidebarButton({ children }: Props) {
  return <div className="items-center rounded-lg ">{children}</div>;
}
