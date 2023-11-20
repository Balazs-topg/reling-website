"use client";

import AnimateOnScroll from "@/components/AnimateOnScroll";

import { motion, useAnimation } from "framer-motion";
import Footer from "@/components/Footer";

import ModalForm from "@/components/ModalForm";
import Nav from "@/components/Nav";
import menueItems from "@/components/component-configs/nav-config";

export default function OmOss() {
  return (
    <>
      <Nav config={menueItems} />
      <div className="w-full" id="content">
        <div className="container relative z-10 mx-auto p-4 max-[350px]:scale-90">
          <div className="flex h-full items-start justify-center">
            <motion.h1
              className="relative z-30 pb-4 pt-6 font-serif text-[2.5rem] font-bold sm:text-[3.5rem]"
              initial={{ y: "100px", opacity: "0%" }}
              animate={{ y: "0px", opacity: "100%" }}
              transition={{ type: "spring", stiffness: 80, delay: 0 }}
            >
              Om Oss
            </motion.h1>
          </div>
        </div>
        <div className="relative z-10 bg-slate-800 shadow-xl">
          <div className=" mx-auto max-w-4xl px-4 pb-20 pt-16 text-white">
            <AnimateOnScroll direction="bottom">
              <div className="flex w-full flex-wrap gap-4 leading-8 tracking-wide">
                Vi är branschexperter inom avloppsrenovering och har
                specialiserat oss på relining, den moderna och kostnadseffektiva
                metoden för att förnya ditt avloppssystem. Med flera års gedigen
                erfarenhet i ryggen har vi utvecklat en process som är
                tillförlitlig och effektiv. Men vad som verkligen sätter oss
                isär är vår orubbliga strävan efter kvalitet och trygghet. Vi är
                inte som andra. Vi är ditt bästa val för att garantera högsta
                standard i branschen. Vad händer om du inte väljer oss? Risken
                är att du oavsiktligt väljer ett företag som inte kan leva upp
                till dina förväntningar.
              </div>
            </AnimateOnScroll>
          </div>
        </div>
        <div className="relative z-10 w-screen overflow-hidden bg-slate-800 shadow-xl"></div>
        <div className="container relative z-10 mx-auto px-4 py-20">
          <AnimateOnScroll direction={"bottom"}>
            <h3 className="text-center font-serif text-[2.5rem] font-bold sm:text-[3rem]">
              Låter det interessant?
            </h3>
            <div className="mt-8 flex items-center justify-center gap-2">
              <ModalForm
                key="right-button"
                className="hover:scale-105"
                color="primary"
                size="lg"
                radius="full"
                variant="shadow"
              >
                Boka relining
              </ModalForm>
            </div>
            <p className="mt-4 text-center">
              (bara 4 lediga tider kvar denna månad)
            </p>
          </AnimateOnScroll>
        </div>
      </div>
    </>
  );
}
