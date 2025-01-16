"use client";
import dynamic from "next/dynamic";

const DynamicContact = dynamic(() => import("../../components/ContactPage"), {
  ssr: false,
});

export default function ContactPage() {
  return <DynamicContact />;
}
