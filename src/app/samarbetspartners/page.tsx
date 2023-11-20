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
              Varför Våra Samarbetspartners Är Så Viktiga
            </motion.h1>
          </div>
        </div>
        <div className="relative z-10 bg-slate-800 shadow-xl">
          <div className=" mx-auto max-w-4xl px-4 pb-20 pt-16 text-white">
            <AnimateOnScroll direction="bottom">
              <div className="flex w-full flex-wrap gap-4 leading-8 tracking-wide">
                För oss är valet av samarbetspartners en av de mest kritiska
                aspekterna av vår verksamhet. Vi har noggrant valt bort företag
                som inte lever upp till våra höga standarder och fokuserar i
                stället på att erbjuda de bästa möjliga lösningarna. Varför är
                detta så viktigt? Eftersom relining är en effektiv tjänst som
                kan utföras på ett utmärkt sätt, men tyvärr finns företag som
                inte kan leva upp till dina förväntningar. Kunden har ofta svårt
                att kontrollera arbetet själv, och därför är det så avgörande
                att vi selekterar noggrant vilka företag vi väljer.
                <br /> <br />
                Därför har vi lagt stor vikt vid en noggrann granskning och en
                direkt övervakning av för- och efterfilmerna för att säkerställa
                att allt utförs på rätt sätt. Vårt mål är att inte bara erbjuda
                en pålitlig reliningsteknik, utan också att värna om reliningens
                rykte och kvalitet inom branschen.
                <br /> <br />
                Kontakta oss idag för att lära dig mer om hur vår
                reliningsteknik kan förbättra ditt avloppssystem och göra din
                fastighet mer hållbar. Du kan välja trygghet och kvalitet med
                oss eller riskera ett oseriöst företag om du inte gör det rätta
                valet.
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
