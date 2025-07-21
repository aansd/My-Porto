"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import WorkSlideBtns from "@/components/WorkSlideBtns";

const projects = [
  {
    num: "01",
    category: "frontend",
    title: "project 1",
    description:
      "Develop a responsive website for selling electronics that is modern, easy to access, full-featured, and supports multiple devices.",
    stack: [
      { name: "React.js" }, 
      { name: "Tailwind.css" }, 
      { name: "Node.js" }
    ],
    image: "/assets/project/thumbnail.png",
    live: "https://e-web-git-main-aansds-projects.vercel.app/",
    github: "https://github.com/aansd/e-web",
  },
  {
    num: "02",
    category: "frontend",
    title: "project 2",
    description:
      "Develop a responsive online store website with API integration from SistemToko.com for automated product, transaction and inventory management.",
    stack: [
      { name: "Vue.js" },
      { name: "Bootstrap.css" },
      { name: "Node.js" },
    ],
    image: "/assets/project/thumbnail-2.png",
    live: "https://frontend-vue-five.vercel.app/",
    github: "https://github.com/aansd/frontend-vue",
  },
  {
    num: "03",
    category: "fullstack",
    title: "project 3",
    description:
      "Create a Point of Sale (POS) system website for sales management, inventory, transaction reports, and operational efficiency.",
    stack: [
      { name: "React.js" },
      { name: "Bootstrap.css" },
      { name: "Node.js" },
      { name: "Express.js" },
      { name: "MongoDB" },
    ],
    image: "/assets/project/pos-thumbnail.png",
    live: "https://github.com/aansd/sistem-pos",
    github: "https://github.com/aansd/sistem-pos",
  },
  {
    num: "04",
    category: "frontend",
    title: "project 4",
    description:
      "app wedding invitation is a web application that allows users to create and manage wedding invitations online.",
    stack: [
      { name: "React.js" },
      { name: "Tailwind.css" },
      { name: "Node.js" },
     
    ],
    image: "/assets/project/wedding invite.png",
    live: "hhttps://wedding-invitation-jfesvvns3-aansds-projects.vercel.app/",
    github: "https://github.com/aansd/WeddingInvitation",
  },
];



const Work = () => {
  const [project, setProject] = useState(projects[0]);
  const handleSlideChange = (swiper) => {
  const currentIndex = swiper.activeIndex;
  setProject(projects[currentIndex])
}
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: {delay:2.4, duration:0.4, ease:"easeIn"} }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[46px] flex flex-col xl:justify-beetwen order-2 xl:order-none">

            <div className="flex flex-col gap-[30px] h-[50%]">

              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>

              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize ">
                {project.category} project
              </h2>

              <p className="text-white/60">{project.description}</p>

              <ul className=" flex gap-4 grid grid-cols-2">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-accent">
                      {item.name}
                      {index !== project.stack.length - 1 && ""}
                    </li>
                  );
                })}
              </ul>
              <div className="border border-white/20 "></div>

              <div className="flex items-center gap-4">
                <Link href={project.live} target="_blank">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live Content</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                <Link href={project.github} target="_blank">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github Repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
                <Swiper spaceBetween={30} slidesPerView={1} className="xl:h-[520px] mb-12"
                onSlideChange={handleSlideChange}>
                  {projects.map((project, index) => {
                    return (
                      <SwiperSlide key={index} className="w-full">
                        <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                        <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>

                        <div className="relative w-full h-full">
                          <Image src={project.image} fill className="object-cover" alt="" />
                          </div> 
                        </div>

                      </SwiperSlide>
                    )
                  })}
                  <WorkSlideBtns containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none" btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"/>
                </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
