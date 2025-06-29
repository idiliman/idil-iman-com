"use client";

import { cn } from "@/lib/utils";
import Header from "./header";

interface Props {
  className?: string;
}

export default function Nav({ className }: Props) {
  return (
    <div className={cn("lg:w-[256px] lg:fixed left-0 top-0 border-r h-full", className)}>
      <Header />
    </div>
  );
}
