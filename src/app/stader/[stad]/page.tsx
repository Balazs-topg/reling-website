"use client";

import React, { useRef } from "react";

import { notFound } from "next/navigation";

import menueItems from "@/components/component-configs/nav-config";

import { useInView } from "framer-motion";
import Form from "@/components/Form";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";

import translateDynaimPathToCityName from "@/utils/translateDynaimPathToCityName";

import { motion, useAnimation } from "framer-motion";

import { usePathname, useSearchParams } from "next/navigation";

import FaqItem from "@/components/FaqItem";

import AnimateOnScroll from "@/components/AnimateOnScroll";

function Testing() {
  const pathName = usePathname();
  const currentDynamicPathName = new URL(`https://${pathName}`).pathname //the https is not actually meaningful, but it's needed to make the constructor work
    .split("/")
    .pop();

  let currentCity;
  if (currentDynamicPathName !== undefined) {
    currentCity = translateDynaimPathToCityName(currentDynamicPathName);
    if (currentCity === undefined) {
      console.log("not defined");
      return notFound();
    }
  }

  return (
    <>
      <Nav config={menueItems}></Nav>
      <div className="w-full" id="content">
        <div className="container relative z-10 mx-auto h-[50rem] p-4 max-[350px]:scale-90">
          <div className="flex flex-col items-start justify-center h-full lg:w-3/5">
            <motion.h1
              className="relative z-30 text-[3rem] sm:text-[4rem] font-serif font-bold"
              initial={{ y: "100px", opacity: "0%" }}
              animate={{ y: "0px", opacity: "100%" }}
              transition={{ type: "spring", stiffness: 80, delay: 0 }}
            >
              Relining i {currentCity}
            </motion.h1>
            <motion.h2
              className="relative z-20 text-lg sm:text-[1.5rem] bg-white bg-opacity-50"
              initial={{ y: "100px", opacity: "0%" }}
              animate={{ y: "0px", opacity: "100%" }}
              transition={{ type: "spring", stiffness: 80, delay: 0.2 }}
            >
              Med vår relining-teknik i {currentCity} erbjuder vi en
              kostnadseffektiv lösning för att reparera skadade rör utan behov
              av grävning. Genom att sätta in en ny lining inuti det befintliga
              röret förstärker vi röret, stänger av läckor och ger ett
              miljövänligare alternativ till traditionella rörbyten.{" "}
            </motion.h2>
            <div className="relative z-20 mt-5 flex gap-2">
              <motion.div
                initial={{ y: "10px", opacity: "0%" }}
                animate={{ y: "0px", opacity: "100%" }}
                transition={{ type: "spring", stiffness: 80, delay: 0.4 }}
              >
                <button className="bg-rose-500 text-base hover:opacity-80 transition-all text-white font-bold rounded-full px-8 py-3 border border-white active:scale-95">
                  Learn more
                </button>
              </motion.div>
              <motion.div
                initial={{ y: "10px", opacity: "0%" }}
                animate={{ y: "0px", opacity: "100%" }}
                transition={{ type: "spring", stiffness: 80, delay: 0.45 }}
              >
                <button className="bg-rose-500 text-base hover:opacity-80 transition-all text-white font-bold rounded-full px-8 py-3 border border-white active:scale-95">
                  Boka
                </button>
              </motion.div>
            </div>
            <div className="absolute z-10 left-0 bottom-0 w-full flex justify-center p-8">
              <svg
                onClick={() => {
                  window.scrollBy({ top: 500, behavior: "smooth" });
                }}
                className="w-8 h-8 animate-bounce cursor-pointer"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="bg-slate-800 relative z-10">
          <div className="container mx-auto px-4 py-20 text-white">
            <div className="flex flex-wrap gap-4 w-full">
              <div className="flex-1">
                <h3 className="font-bold text-[3rem] font-serif">
                  <AnimateOnScroll direction="left">
                    The relining mission
                  </AnimateOnScroll>
                </h3>
                <h4 className="text-[1.5rem]">
                  <AnimateOnScroll direction="left">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Corrupti nesciunt natus ipsum quo minus! Suscipit expedita
                    vitae fugiat error
                  </AnimateOnScroll>
                </h4>
              </div>
              <div className=" min-w-[14rem]" style={{ flex: "1 1 20%" }}>
                <AnimateOnScroll direction="bottom">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et
                  vel officia nulla accusamus ducimus numquam exercitationem
                  obcaecati sequi! Cumque a illo quidem atque aperiam in fugit
                  laudantium distinctio officiis tempore? Lorem ipsum dolor, sit
                  amet consectetur adipisicing elit. Quo fugit officiis mollitia
                  sunt nam ducimus dolore? Rem id, similique, molestias animi
                  placeat vel commodi illo veritatis, nam tempora nesciunt
                  facere. Lorem ipsum dolor sit amet consectetur adipisicing
                  elit. In accusantium tenetur dignissimos a ut deleniti
                  aliquam! Suscipit, sint. Itaque non unde excepturi, atque
                  mollitia illo eveniet recusandae animi! Iure, atque!
                </AnimateOnScroll>
              </div>
            </div>
          </div>
        </div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <h3 className="relative z-10 font-bold text-[3rem] font-serif text-center mx-auto bg-white bg-opacity-50 rounded-xl">
            <AnimateOnScroll direction={"bottom"}>
              Relinig vs Stambyte
            </AnimateOnScroll>
          </h3>
        </div>
        <div className="relative z-10 bg-slate-600 w-screen overflow-hidden">
          <div className="container mx-auto px-4 py-20 text-white">
            <div className="flex flex-wrap-reverse items-start gap-4 w-full">
              <div style={{ flex: "1 1 20%" }} className="p-8">
                <AnimateOnScroll direction={"bottom"}>
                  <div className="flex flex-col items-center gap-4 min-w-[8rem]">
                    <FaqItem fråga={"fråga?"} svar={"svar"}></FaqItem>
                    <FaqItem fråga={"fråga?"} svar={"svar"}></FaqItem>
                    <FaqItem fråga={"fråga?"} svar={"svar"}></FaqItem>
                    <FaqItem fråga={"fråga?"} svar={"svar"}></FaqItem>
                  </div>
                </AnimateOnScroll>
              </div>
              <div
                className="relative h-fit mb-auto"
                style={{ flex: "1 1 0%" }}
              >
                <h3 className="font-bold text-[3rem] font-serif relative z-10">
                  <AnimateOnScroll direction={"right"}>
                    Vanliga frågor
                  </AnimateOnScroll>
                </h3>
                <h4 className="text-[1.5rem] relative z-10">
                  <AnimateOnScroll direction={"right"}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Corrupti
                  </AnimateOnScroll>
                </h4>
              </div>
            </div>
          </div>
        </div>
        <div className="container mx-auto relative z-10 px-4 py-20">
          <AnimateOnScroll direction={"bottom"}>
            <h3 className="font-bold text-[2.5rem] sm:text-[3rem] font-serif text-center">
              Låter det interessant?
            </h3>
            <div className="flex justify-center items-center gap-2 mt-8">
              <button className="bg-rose-500 hover:opacity-80 transition-all text-white font-bold rounded-full px-8 py-3 border border-white active:scale-95">
                Boka relining
              </button>
              <button className="bg-white text-rose-500 border-2 border-rose-500 hover:opacity-80 transition-all font-bold rounded-full px-8 py-3 hover:bg-rose-500 hover:text-white active:scale-95">
                Prata med en expert
              </button>
            </div>
            <p className="text-center mt-4">
              (bara 4 lediga tider kvar denna månad)
            </p>
          </AnimateOnScroll>
        </div>
      </div>
      <Form></Form>
    </>
  );
}

export default Testing;
