import React from "react";

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <article className="max-w-7xl mx-auto">{children}</article>;
}
