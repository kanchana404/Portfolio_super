import { projects } from "@/data";
import React from "react";
import { div } from "three/examples/jsm/nodes/Nodes.js";
import { PinContainer } from "./ui/3d-pin";

const RecentProject = () => {
  return (
    <div className="py-20">
      <h1 className="heading">
        A small selection of {""}
        <span className="text-purple">recent projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
        {projects.map(({ id, title, des, img, iconLists, link }) => (
          <div key={id} className="lg:min-h[35.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vh]">
            <PinContainer title={title} href={link}>
                <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
                    <div className="relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d]">
                    <img src="/bg.png" alt="bg_img" />
                    </div>
                    <img src={img} alt={title} 
                    className="z-10 absolute bottom-0"
                    />
                </div>
            </PinContainer>
            </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProject;
