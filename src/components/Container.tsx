export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center justify-center">
      <div className="container overflow-hidden">{children}</div>
    </div>
  );
}
