import Link from "next/link";
import React from "react";

interface MiddleBoxProps {
  currentSection: string;
}

const MiddleSection = ({ currentSection }: MiddleBoxProps) => {
  return (
    <div className="absolute inset-0 flex items-center justify-center text-white p-4">
      <div className="text-center w-2/3">
        {currentSection === "home" && (
          <div className="flex flex-col gap-10">
            <h2 className="text-5xl">Yes this is my portfolio site</h2>
            <p className="text-xl">
              Try to navigate to other sections somehow. I agree that it might
              not win any design of the year awards.
            </p>
          </div>
        )}
        {currentSection === "projects" && (
          <Link
            href={"/projects"}
          >
            <div className="flex flex-col gap-10">
              <h2 className="text-5xl">Projects</h2>
              <p className="text-xl">
                Here are some of the projects I have worked on.
              </p>
            </div>
          </Link>
        )}
        {currentSection === "contact" && (
          <Link
            href={"/contact"}
          >
            <div className="flex flex-col gap-10">
              <h2 className="text-5xl">Contact</h2>
              <p className="text-xl">
                Reach out to me if you have any questions or just want to say
                hi.
              </p>
            </div>
          </Link>
        )}
        {currentSection === "profile" && (
          <Link
            href={"/profile"}
          >
            <div className="flex flex-col gap-10">
              <h2 className="text-5xl">Profile</h2>
              <p className="text-xl">
                Here is a little bit about me.
              </p>
            </div>
          </Link>
        )}
      </div>
    </div>
  );
};

export default MiddleSection;
