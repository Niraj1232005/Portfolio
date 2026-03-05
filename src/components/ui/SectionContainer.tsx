import { ReactNode } from "react";
import { cn } from "@/lib/cn";

type SectionContainerProps = {
  children: ReactNode;
  className?: string;
  contentClassName?: string;
  id?: string;
};

export default function SectionContainer({
  children,
  className,
  contentClassName,
  id,
}: SectionContainerProps) {
  return (
    <section id={id} className={cn("relative", className)}>
      <div
        className={cn("mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8", contentClassName)}
      >
        {children}
      </div>
    </section>
  );
}
