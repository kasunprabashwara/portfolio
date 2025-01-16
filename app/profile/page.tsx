"use client";
import dynamic from "next/dynamic";

const DynamicProfile = dynamic(() => import("../../components/ProfilePage"), {
  ssr: false,
});

export default function ProfilePage() {
  return <DynamicProfile />;
}
