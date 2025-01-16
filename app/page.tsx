"use client";
import dynamic from "next/dynamic";

const DynamicHome = dynamic(() => import("../components/HomePage"), {
  ssr: false,
});

export default function HomePage() {
  return <DynamicHome />;
}
