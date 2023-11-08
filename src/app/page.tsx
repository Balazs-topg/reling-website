"use client";

import { ReactNode, useRef } from "react";

import menueItems from "@/components/component-configs/nav-config";

import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Form from "@/components/Form";
import FaqItem from "@/components/FaqItem";
import AnimateOnScroll from "@/components/AnimateOnScroll";

import { motion, useAnimation } from "framer-motion";
import { inView } from "framer-motion";
import { useInView } from "framer-motion";

import { Accordion, AccordionItem, NextUIProvider } from "@nextui-org/react";
import { Button } from "@nextui-org/react";

import Image from "next/image";
import unDrawMain from "../img/undraw_wash_hands_nwl2.svg";
import unDrawCompare from "../img/undraw_split_testing_l1uw.svg";
import unDrawFaq from "../img/undraw_faq_re_31cw.svg";

import ModalForm from "@/components/ModalForm";

interface TableUtilProps {
  text: string;
}
function TableYes({ text }: TableUtilProps) {
  return (
    <NextUIProvider>
      <div className="flex items-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={3}
          stroke="green"
          className="h-6 w-6 shrink-0"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.5 12.75l6 6 9-13.5"
          />
        </svg>
        {text}
      </div>
    </NextUIProvider>
  );
}

function TableNo({ text }: TableUtilProps) {
  return (
    <div className="flex items-center gap-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={3}
        stroke="red"
        className="h-6 w-6 shrink-0"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
      {text}
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Nav config={menueItems}></Nav>
      <div className="w-full" id="content">
        <div className="containers relative z-10 mx-auto h-[50rem] p-4 max-[350px]:scale-90">
          <div className="flex h-full flex-col items-start justify-center lg:w-3/5">
            <motion.h1
              className=" relative z-30 font-serif text-[3rem] font-bold sm:text-[4rem]"
              initial={{ y: "100px", opacity: "0%" }}
              animate={{ y: "0px", opacity: "100%" }}
              transition={{ type: "spring", stiffness: 80, delay: 0 }}
            >
              Ett bättre sätt att laga dagen. Välj Relining
            </motion.h1>
            <motion.h2
              className="relative z-20 bg-white bg-opacity-50 text-lg sm:text-[1.5rem]"
              initial={{ y: "100px", opacity: "0%" }}
              animate={{ y: "0px", opacity: "100%" }}
              transition={{ type: "spring", stiffness: 80, delay: 0.2 }}
            >
              Relining är en kostnadseffektiv teknik för att reparera skadade
              rör utan grävning genom att infoga en ny lining inuti det
              befintliga röret. Detta förstärker röret, täpper till läckor och
              är miljövänligare än traditionella utbyten.
            </motion.h2>
            <div className="relative z-20 mt-5 flex gap-2">
              <motion.div
                initial={{ y: "10px", opacity: "0%" }}
                animate={{ y: "0px", opacity: "100%" }}
                transition={{ type: "spring", stiffness: 80, delay: 0.4 }}
              >
                <Button
                  className="hover:scale-105"
                  color="primary"
                  size="lg"
                  variant="faded"
                  radius="full"
                  onClick={() => {
                    window.scrollBy({ top: 500, behavior: "smooth" });
                  }}
                >
                  Läs mer
                </Button>
              </motion.div>
              <motion.div
                initial={{ y: "10px", opacity: "0%" }}
                animate={{ y: "0px", opacity: "100%" }}
                transition={{ type: "spring", stiffness: 80, delay: 0.45 }}
              >
                <ModalForm
                  key="right-button"
                  className="hover:scale-105"
                  color="primary"
                  size="lg"
                  radius="full"
                  variant="shadow"
                >
                  Kontaka oss
                </ModalForm>
              </motion.div>
            </div>
            <div className="absolute bottom-0 left-0 z-10 flex w-full justify-center p-8">
              <svg
                onClick={() => {
                  window.scrollBy({ top: 500, behavior: "smooth" });
                }}
                className="h-8 w-8 animate-bounce cursor-pointer"
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
              <div className="absolute bottom-0 right-0 -translate-x-1/3">
                <Image height={"350"} src={unDrawMain} alt=""></Image>
              </div>
            </div>
          </div>
        </div>
        <div className="relative z-10 bg-slate-800 shadow-xl">
          <div className="container mx-auto px-4 py-20 text-white">
            <div className="flex w-full flex-wrap gap-4">
              <div className="flex-1">
                <h3 className="font-serif text-[3rem] font-bold">
                  <AnimateOnScroll direction="left">
                    Förnya dina rör utan störningar
                  </AnimateOnScroll>
                </h3>
                <h4 className="text-[1.5rem]">
                  <AnimateOnScroll direction="left">
                    Spara både tid och pengar genom att investera i en hållbar
                    lösning.
                  </AnimateOnScroll>
                </h4>
              </div>
              <div className=" min-w-[14rem]" style={{ flex: "1 1 20%" }}>
                <AnimateOnScroll direction="bottom">
                  Relining är en innovativ teknik för att reparera skadade rör
                  utan att behöva byta ut dem helt. Istället för att gräva upp
                  och byta ut gamla rör, införs en ny, hållbar lining inuti det
                  befintliga röret, vilket skapar en slät, tät yta. Den stora
                  fördelen? Mindre störningar. Ingen trädgård som vänds upp och
                  ned, och oftast är processen snabbare och mer kostnadseffektiv
                  än traditionella metoder. Relining erbjuder också en hållbar
                  lösning med beläggningar som kan hålla i flera decennier.{" "}
                  <br /> <br /> För fastighetsägare kan detta innebära
                  besparingar på lång sikt genom att undvika framtida skador och
                  underhåll. Med tanke på miljövänligheten,
                  kostnadsbesparingarna och den minimerade störningen, bör
                  relining vara på din radar nästa gång dina rör behöver omsorg.{" "}
                  <br />
                </AnimateOnScroll>
              </div>
            </div>
          </div>
        </div>
        <div className="container relative z-10 mx-auto px-4 py-20">
          <div className="absolute top-0 z-0 translate-y-20 -scale-x-[1]">
            <Image height={"280"} src={unDrawCompare} alt=""></Image>
          </div>
          <h3 className="relative z-10 mx-auto rounded-xl bg-white bg-opacity-50 text-center font-serif text-[3rem] font-bold">
            <AnimateOnScroll direction={"bottom"}>
              Relinig vs Stambyte
            </AnimateOnScroll>
          </h3>
          <div className="relative z-10 mx-auto max-w-3xl">
            <div className="overflow-x-auto overflow-y-hidden">
              <AnimateOnScroll direction={"bottom"}>
                <table className="table mt-8 bg-white bg-opacity-50">
                  {/* head */}
                  <thead>
                    <tr>
                      <th>Parameter</th>
                      <th>Relining</th>
                      <th>Stambyte</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Livslängd</td>
                      <td>
                        <TableYes text={"Upp till 50 år"}></TableYes>
                      </td>
                      <td>
                        <TableYes text={"Ca 50"}></TableYes>
                      </td>
                    </tr>

                    <tr>
                      <td>Kostnad</td>
                      <td>
                        <TableYes text={"Oftast billigare"}></TableYes>
                      </td>
                      <td>
                        <TableNo text={"Oftast dyrare"}></TableNo>
                      </td>
                    </tr>

                    <tr>
                      <td>Installationstid</td>
                      <td>
                        <TableYes text={"Snabbt, några dagar"}></TableYes>
                      </td>
                      <td>
                        <TableNo text={"Kan ta flera månader"}></TableNo>
                      </td>
                    </tr>

                    <tr>
                      <td>Störningsgrad</td>
                      <td>
                        <TableYes text={"Minimal; inget rivande"}></TableYes>
                      </td>
                      <td>
                        <TableNo
                          text={"Större ingrepp; omfattande byggjobb"}
                        ></TableNo>
                      </td>
                    </tr>

                    <tr>
                      <td>Flexibilitet</td>
                      <td>
                        <TableYes
                          text={"Skräddarsys lätt för olika system"}
                        ></TableYes>
                      </td>
                      <td>
                        <TableNo
                          text={"Mer rigid, kräver omfattande planering"}
                        ></TableNo>
                      </td>
                    </tr>

                    <tr>
                      <td>Underhåll</td>
                      <td>
                        <TableYes text={"Lågt underhållsbehov"}></TableYes>
                      </td>
                      <td>
                        <TableNo
                          text={"Kräver regelbundet underhåll"}
                        ></TableNo>
                      </td>
                    </tr>

                    <tr>
                      <td>Energibesparing</td>
                      <td>
                        <TableYes
                          text={"Potentiell energibesparing"}
                        ></TableYes>
                      </td>
                      <td>
                        <TableNo
                          text={"Inte alltid energibesparande"}
                        ></TableNo>
                      </td>
                    </tr>

                    <tr>
                      <td>Säkerhet</td>
                      <td>
                        <TableYes text={"Minimerar risk för läckor"}></TableYes>
                      </td>
                      <td>
                        <TableNo
                          text={"Risk för läckor under installation"}
                        ></TableNo>
                      </td>
                    </tr>

                    <tr>
                      <td>Estetik</td>
                      <td>
                        <TableYes text={"Bevarar befintlig estetik"}></TableYes>
                      </td>
                      <td>
                        <TableNo
                          text={"Kan kräva ytterligare renoveringar"}
                        ></TableNo>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </AnimateOnScroll>
            </div>
          </div>
        </div>
        <div className="relative z-10 w-screen overflow-hidden bg-slate-800 shadow-xl">
          <div className="container mx-auto px-4 py-20 text-white">
            <div className="flex w-full flex-wrap-reverse items-start gap-4">
              <div style={{ flex: "1 1 20%" }} className="py-8 pr-8">
                <AnimateOnScroll direction={"bottom"}>
                  <Accordion
                    variant="splitted"
                    selectionMode="multiple"
                    className=" text-white"
                  >
                    <AccordionItem
                      key="1"
                      aria-label="Hur länge varar ett relinat rör?"
                      title="Hur länge varar ett relinat rör?"
                      className="text-black"
                    >
                      <div className="pb-2">
                        Ett korrekt relinat rör kan hålla i 50 år eller längre
                        beroende på material och arbetsförhållanden.
                      </div>
                    </AccordionItem>
                    <AccordionItem
                      key="2"
                      aria-label="Är relining säkert för dricksvattenrör?"
                      title="Är relining säkert för dricksvattenrör?"
                      className="text-black"
                    >
                      <div className="pb-2">
                        Ja, de material som används i relining-processen är
                        godkända och säkra för dricksvatten.
                      </div>
                    </AccordionItem>
                    <AccordionItem
                      key="3"
                      aria-label="Hur lång tid tar en relining-process?"
                      title="Hur lång tid tar en relining-process?"
                      className="text-black"
                    >
                      <div className="pb-2">
                        Processens varaktighet beror på rörets längd och skick,
                        men i de flesta fall kan relining slutföras på en dag.
                      </div>
                    </AccordionItem>
                    <AccordionItem
                      key="4"
                      aria-label="Kan alla rör relinas?"
                      title="Kan alla rör relinas?"
                      className="text-black"
                    >
                      <div className="pb-2">
                        Medan många rör kan relinas, finns det vissa
                        förutsättningar där relining inte är lämpligt. En
                        professionell bedömning rekommenderas för att avgöra om
                        dina rör är lämpliga för processen.
                      </div>
                    </AccordionItem>
                    <AccordionItem
                      key="5"
                      aria-label="Hur vet jag om mina rör behöver relining?"
                      title="Hur vet jag om mina rör behöver relining?"
                      className="text-black"
                    >
                      <div className="pb-2">
                        Tecken som regelbundna blockeringar, läckage eller dålig
                        avloppslukt kan tyda på att dina rör kan dra nytta av
                        relining. Det är bäst att konsultera en expert för en
                        noggrann bedömning.
                      </div>
                    </AccordionItem>
                    <AccordionItem
                      key="6"
                      aria-label="Vad kostar relining jämfört med traditionella rörreparationer?"
                      title="Vad kostar relining jämfört med traditionella rörreparationer?"
                      className="text-black"
                    >
                      <div className="pb-2">
                        Även om kostnaderna varierar beroende på projektets
                        omfattning och komplexitet, tenderar relining ofta att
                        vara mer kostnadseffektivt på grund av minskade
                        arbetskostnader och mindre grävarbete.
                      </div>
                    </AccordionItem>
                  </Accordion>
                </AnimateOnScroll>
              </div>
              <div
                className="relative mb-auto h-fit"
                style={{ flex: "1 1 0%" }}
              >
                <h3 className="relative z-10 font-serif text-[3rem] font-bold">
                  <AnimateOnScroll direction={"right"}>
                    Vanliga frågor
                  </AnimateOnScroll>
                </h3>
                <h4 className="relative z-10 text-[1.5rem]">
                  <AnimateOnScroll direction={"right"}>
                    Frågor och svar: Allt på ett ställe.
                  </AnimateOnScroll>
                </h4>
                <div className="absolute right-0 top-0 z-0 -translate-y-full md:bottom-0 md:translate-y-full">
                  <Image height={"200"} src={unDrawFaq} alt=""></Image>
                </div>
              </div>
            </div>
          </div>
        </div>
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
      <Footer></Footer>
    </>
  );
}
