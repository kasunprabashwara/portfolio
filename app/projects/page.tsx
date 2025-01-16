"use client";
import dynamic from "next/dynamic";

const DynamicProjects = dynamic(() => import("../../components/ProjectsPage"), {
  ssr: false,
});

export default function ProjectsPage() {
  return <DynamicProjects />;
}
