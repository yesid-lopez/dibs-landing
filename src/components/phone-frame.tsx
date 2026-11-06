import { cn } from "@/lib/utils";

interface PhoneFrameProps {
  children: React.ReactNode;
  className?: string;
  screenClassName?: string;
}

export function PhoneFrame({
  children,
  className,
  screenClassName,
}: PhoneFrameProps) {
  return (
    <div
      className={cn(
        "relative rounded-[2.75rem] bg-ink p-2.5 shadow-2xl shadow-ink/25",
        className
      )}
    >
      <div
        className={cn(
          "relative overflow-hidden rounded-[2.25rem] bg-paper-50",
          screenClassName
        )}
      >
        {children}
        <div className="pointer-events-none absolute left-1/2 top-2 h-6 w-24 -translate-x-1/2 rounded-full bg-ink" />
      </div>
    </div>
  );
}
