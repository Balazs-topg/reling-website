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

function Step({
  number,
  title,
  body,
}: {
  number: number;
  title: string;
  body: any;
}) {
  return (
    <div className="rounded-2xl border-slate-200 p-3 shadow transition-all">
      <div className="flex items-center gap-3">
        <div className="flex h-12 w-12 flex-grow-0 items-center justify-center rounded-xl bg-slate-100 font-serif text-lg font-semibold text-primary">
          {number}
        </div>
        <h6 className="font-serif text-xl font-semibold">{title}</h6>
      </div>
      <div className="mt-2 p-1 leading-6 tracking-wide opacity-75">{body}</div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <div className="mx-auto flex max-w-5xl items-center px-8 pb-16 pt-20 font-serif text-5xl font-black tracking-tight">
        <h1>Om Oss</h1>
      </div>
      <div className="bg-slate-800 leading-8 tracking-wide text-white">
        <div className="mx-auto max-w-5xl px-8 pb-20 pt-16 ">
          Vi är branschexperter inom avloppsrenovering och har specialiserat oss
          på relining, den moderna och kostnadseffektiva metoden för att förnya
          ditt avloppssystem. Med flera års gedigen erfarenhet i ryggen har vi
          utvecklat en process som är tillförlitlig och effektiv. Men vad som
          verkligen sätter oss isär är vår orubbliga strävan efter kvalitet och
          trygghet. Vi är inte som andra. Vi är ditt bästa val för att garantera
          högsta standard i branschen. Vad händer om du inte väljer oss? Risken
          är att du oavsiktligt väljer ett företag som inte kan leva upp till
          dina förväntningar.
        </div>
      </div>
      <div className="mx-auto flex max-w-5xl items-center px-8 pb-16 pt-20 font-serif text-5xl font-black tracking-tight">
        <h2>Varför Relining?</h2>
      </div>
      <div className="bg-slate-800 leading-8 tracking-wide text-white">
        <div className="mx-auto max-w-5xl px-8 pb-20 pt-16 ">
          Traditionella stambyten kan vara tidskrävande, dyra och medföra
          omfattande renoveringar och störningar. Vi har medvetet valt att inte
          erbjuda denna föråldrade metod. I stället har vi satsat på
          relineingstekniken, som är bekväm, effektiv och hållbar. Med våra
          noggrant utvalda samarbetspartners är vi stolta över att kunna erbjuda
          en smidig och bekymmersfri lösning för våra kunder.
        </div>
      </div>
      <div className="mx-auto flex max-w-7xl items-center px-8 pb-8 pt-16 font-serif text-5xl font-black tracking-tight">
        <h3>Hur Det Fungerar</h3>
      </div>
      <div className="mx-auto max-w-7xl px-8 py-5 leading-8 tracking-wide">
        <div className="rounded-2xl bg-slate-50 p-10 shadow">
          Vår smidiga reliningsprocess är utformad för att göra
          avloppsrenovering enkel och bekväm, både för dig som kund och för vårt
          erfarna team av relingstekniker. Här är hur vår smidiga
          reliningsprocess ser ut:
        </div>
      </div>

      {/* ___________ */}

      <div className="mx-auto grid max-w-7xl grid-flow-row grid-cols-1 gap-8 px-8 pb-20 pt-5 sm:grid-cols-2 lg:grid-cols-3">
        <Step
          number={1}
          title="Konsultation och Inspektion"
          body={
            "Allt börjar med en enkel konsultation. Du kontaktar oss och bokar en tid som passar dig. Vårt team, tillsammans med våra pålitliga samarbetspartners, kommer till din fastighet för att inspektera ditt avloppssystem och bedöma behovet av relining. Vi tar oss tid att förstå dina specifika problem och behov, och vi besvarar gärna dina frågor."
          }
        />
        <Step
          number={2}
          title="Offert och Planering"
          body={
            "Efter noggrann inspektion tar vi fram en skräddarsydd offert baserad på det arbete som behöver utföras. Vi förklarar i klara termer vad som behöver göras och vilka metoder som kommer att användas. Vår transparenta prissättning gör det enkelt för dig att förstå kostnaderna. Om du godkänner offerten, planerar vi arbetet."
          }
        />
        <Step
          number={3}
          title="Arbetets Start"
          body={
            "När planeringen är klar, bokar vi in ett tidsschema som passar dig bäst. Vårt erfarna team och våra partners anländer på den utsatta tiden och börjar arbetet. Vår process är utformad för minimal störning, vilket gör det möjligt för dig att fortsätta med din vardag utan avbrott."
          }
        />
        <Step
          number={4}
          title="Relining"
          body={
            "Våra kompetenta tekniker och partners använder avancerad härdplastteknik för att förnya ditt avloppssystem. Vi ser till att allt går smidigt och effektivt, utan att behöva göra ingrepp i dina väggar eller golv. Med minimala störningar i din fastighet är vårt mål att slutföra arbetet så snabbt som möjligt."
          }
        />
        <Step
          number={5}
          title="Slutlig Inspektion"
          body={
            "Efter att reliningen är klar, genomför vi en noggrann slutlig inspektion för att säkerställa att allt är i toppskick. Vi testar avloppssystemet för att garantera att det fungerar felfritt. När du är nöjd med resultatet, godkänner du arbetet."
          }
        />
        <Step
          number={6}
          title="Avslutning och Uppföljning"
          body={
            "Vi avslutar processen genom att förse dig med all dokumentation du behöver och ger dig råd om hur du kan underhålla ditt förnyade avloppssystem. Vi finns alltid tillgängliga för eventuella frågor eller uppföljning."
          }
        />
      </div>
    </>
  );
}
