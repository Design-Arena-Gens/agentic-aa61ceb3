"use client";
import { useState, ReactNode } from "react";

export type TabKey = "search" | "improve" | "research" | "draft";

export function Tabs({
  tabs,
  initial = "search",
}: {
  tabs: { key: TabKey; label: string; content: ReactNode }[];
  initial?: TabKey;
}) {
  const [active, setActive] = useState<TabKey>(initial);
  return (
    <div>
      <div className="flex gap-2 pb-4">
        {tabs.map((t) => (
          <button
            key={t.key}
            onClick={() => setActive(t.key)}
            className={`button !py-1.5 !px-3 ${active === t.key ? "bg-blue-600" : "bg-white/10 hover:bg-white/15"}`}
          >
            {t.label}
          </button>
        ))}
      </div>
      <div>{tabs.find((t) => t.key === active)?.content}</div>
    </div>
  );
}
