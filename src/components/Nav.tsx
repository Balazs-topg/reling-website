"use client";

import "@animxyz/core";
import { XyzTransition, XyzTransitionGroup } from "@animxyz/react";

import React, { ReactNode, use, useEffect, useRef, useState } from "react";

import useWindowSize from "@/utils/useWindowSize";
import useOutsideAlerter from "@/utils/useOutsideAlerter";
import exp from "constants";
import { inflateRaw } from "zlib";

const icons = {
  closedHamburger: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className="w-8 h-8"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
      />
    </svg>
  ),
  openedHamburger: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className="w-8 h-8"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  ),
  dropDownArrow: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className="w-4 h-4"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  ),
  dropDownArrowMobile: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2.5}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  ),
};

interface DropdownTypes {
  children: ReactNode;
  className?: string;
  alternatives: any[];
  z: number;
}

function Dropdown({
  children,
  className = "",
  alternatives,
  z,
}: DropdownTypes) {
  const currentWindowDimensions = useWindowSize();
  if (currentWindowDimensions[0] > 1024) {
    return (
      <>
        <DesktopDropdown className="" alternatives={alternatives} z={z}>
          {children}
        </DesktopDropdown>
      </>
    );
  } else {
    let defaultClassMobile: string = "";

    return (
      <MobileDropdown
        z={0}
        className={defaultClassMobile}
        alternatives={alternatives}
      >
        {children}
      </MobileDropdown>
    );
  }
}

function DesktopDropdown({
  children,
  className = "",
  alternatives,
  z,
}: DropdownTypes) {
  const [currentlyOpened, setCurrentlyOpened] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);
  useOutsideAlerter(ref, () => {
    setCurrentlyOpened(false);
  });

  let zIndex = -1 - z;
  return (
    <div className={"relative"}>
      <button
        className={className}
        onClick={() => {
          setCurrentlyOpened(!currentlyOpened);
        }}
      >
        <div className="flex items-center gap-1">
          {children}
          <div
            className={
              currentlyOpened
                ? "transition-all -rotate-90"
                : "transition-all rotate-0"
            }
          >
            {icons.dropDownArrow}
          </div>
        </div>
      </button>

      <XyzTransition className="drop-down-animation">
        {currentlyOpened && (
          <div
            ref={ref}
            className={
              "absolute py-2 px-2 flex flex-col gap-1 bg-slate-100 shadow-md text-start rounded-xl pt-7"
            }
            style={{ zIndex: zIndex }}
          >
            {alternatives.map((alternative) => (
              <button
                key={alternative}
                className="text-start hover:bg-white py-1 px-2 rounded-lg active:scale-95 transition-transform"
              >
                {alternative}
              </button>
            ))}
          </div>
        )}
      </XyzTransition>
    </div>
  );
}

function MobileDropdown({ children, className, alternatives }: DropdownTypes) {
  const [currentlyOpened, setCurrentlyOpened] = useState(false);

  return (
    <div className="flex flex-col w-full">
      <button className={className}>
        <div
          className="flex items-center justify-center gap-1"
          onClick={() => {
            console.log(currentlyOpened);
            setCurrentlyOpened(!currentlyOpened);
          }}
        >
          {children}
          <div
            className={
              currentlyOpened
                ? "transition-all -rotate-90 "
                : "transition-all rotate-0"
            }
          >
            {icons.dropDownArrowMobile}
          </div>
        </div>
      </button>
      <div className=" rounded-b-3xl overflow-hidden">
        {alternatives.map((alternative) => (
          <div
            key={alternative}
            className={
              currentlyOpened
                ? "bg-slate-200 overflow-hidden transition-all max-h-60 p-2"
                : "bg-slate-200 overflow-hidden transition-all max-h-0"
            }
          >
            {alternative}
          </div>
        ))}
      </div>
    </div>
  );
}
const isBrowser = typeof window !== "undefined";

function Nav({ config }: any) {
  const nav = config.nav;
  const leftSide = config.leftSide;
  const rightSide = config.rightSide;

  const currentWindowDimensions = useWindowSize();
  const [hamburgerIsOpen, setHamburgerIsOpen] = useState(false);
  useEffect(() => {
    if (currentWindowDimensions[0] > 1024) {
      setHamburgerIsOpen(false);
    }
  }, [currentWindowDimensions]);

  if (isBrowser) {
    const documentContent = document.body.querySelector("#content");
  }
  useEffect(() => {
    if (isBrowser) {
      if (hamburgerIsOpen) {
        document.documentElement.classList.add("h-full", "overflow-hidden");
      } else {
        document.documentElement.classList.remove("h-full", "overflow-hidden");
      }
    }
  }, [hamburgerIsOpen]);

  return (
    <>
      <div className="lg:hidden fixed w-full z-40 ">
        <div className="bg-slate-100 bg-opacity-90 backdrop-blur shadow-md w-full max-h-screen">
          <div className="mx-auto p-6">
            <div className="flex justify-between items-center">
              {leftSide}
              <button
                className="active:scale-90 transition-transform"
                onClick={() => {
                  setHamburgerIsOpen(!hamburgerIsOpen);
                }}
              >
                <XyzTransition
                  appear
                  mode="out-in"
                  xyz="duration-1 fade short-100% wide-0%"
                >
                  {hamburgerIsOpen && (
                    <div className="flex justify-center items-center active:[&>*]:opacity-100 transition-opacity ">
                      {icons.openedHamburger}
                    </div>
                  )}
                  {!hamburgerIsOpen && (
                    <div className="flex justify-center items-center active:[&>*]:opacity-100 transition-opacity">
                      {icons.closedHamburger}
                    </div>
                  )}
                </XyzTransition>
              </button>
            </div>
            <div
              className={
                hamburgerIsOpen
                  ? "overflow-hidden transition-all max-h-screen"
                  : "overflow-hidden transition-all max-h-0"
              }
            >
              <ol className="py-4 mt-2 text-lg font-medium text-center max-h-[80vh] overflow-scroll ">
                <XyzTransitionGroup
                  className="item-group flex flex-col gap-4"
                  xyz="duration-2  fade stagger-0.5 left-2"
                >
                  {nav.map(
                    (item: any) =>
                      hamburgerIsOpen && <li key={item.key}>{item}</li>
                  )}
                  {hamburgerIsOpen && <div>{rightSide}</div>}
                </XyzTransitionGroup>
              </ol>
            </div>
          </div>
        </div>
        <XyzTransition xyz="fade duration-2">
          {hamburgerIsOpen && (
            <div
              className="fixed top-0 left-0 h-screen w-full bg-opacity-50 backdrop-blur bg-slate-300 z-[-1]"
              onClick={() => {
                setHamburgerIsOpen(false);
              }}
            >
              background
            </div>
          )}
        </XyzTransition>
      </div>
      <div className="hidden lg:block bg-slate-100 bg-opacity-90 backdrop-blur shadow-md fixed w-full z-40">
        <div className="bg-slate-100 w-full">
          <div className="mx-auto max-w-7xl p-4">
            <div className="flex justify-between items-center">
              {leftSide}
              <ol className="font-medium text-lg flex gap-8">
                {nav.map((item: any) => (
                  <li key={item}>{item}</li>
                ))}
              </ol>
              {rightSide}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Nav;

export { Dropdown };
