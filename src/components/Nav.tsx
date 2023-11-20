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
      className="h-8 w-8"
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
      className="h-8 w-8"
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
      className="h-4 w-4"
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
      className="h-6 w-6"
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
                ? "-rotate-90 transition-all"
                : "rotate-0 transition-all"
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
              "absolute flex flex-col gap-1 rounded-xl bg-slate-100 px-2 py-2 pt-7 text-start shadow-md"
            }
            style={{ zIndex: zIndex }}
          >
            {alternatives.map((alternative) => (
              <button
                key={alternative}
                className="rounded-lg px-2 py-1 text-start transition-transform hover:bg-white active:scale-95"
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
    <div className="flex w-full flex-col">
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
                ? "-rotate-90 transition-all "
                : "rotate-0 transition-all"
            }
          >
            {icons.dropDownArrowMobile}
          </div>
        </div>
      </button>
      <div className=" overflow-hidden rounded-b-3xl">
        {alternatives.map((alternative) => (
          <div
            key={alternative}
            className={
              currentlyOpened
                ? "max-h-60 overflow-hidden bg-slate-200 p-2 transition-all"
                : "max-h-0 overflow-hidden bg-slate-200 transition-all"
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
      <div className="sticky top-0 z-40 w-full lg:hidden ">
        <div className="max-h-screen w-full bg-slate-100 bg-opacity-90 shadow-md backdrop-blur">
          <div className="mx-auto p-6">
            <div className="flex items-center justify-between">
              {leftSide}
              <button
                className="transition-transform active:scale-90"
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
                    <div className="flex items-center justify-center transition-opacity active:[&>*]:opacity-100 ">
                      {icons.openedHamburger}
                    </div>
                  )}
                  {!hamburgerIsOpen && (
                    <div className="flex items-center justify-center transition-opacity active:[&>*]:opacity-100">
                      {icons.closedHamburger}
                    </div>
                  )}
                </XyzTransition>
              </button>
            </div>
            <div
              className={
                hamburgerIsOpen
                  ? "max-h-screen overflow-hidden transition-all"
                  : "max-h-0 overflow-hidden transition-all"
              }
            >
              <ol className="mt-2 max-h-[80vh] overflow-scroll py-4 text-center text-lg font-medium ">
                <XyzTransitionGroup
                  className="item-group flex flex-col gap-4"
                  xyz="duration-2  fade stagger-0.5 left-2"
                >
                  {nav.map(
                    (item: any) =>
                      hamburgerIsOpen && <li key={item.key}>{item}</li>,
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
              className="fixed left-0 top-0 z-[-1] h-screen w-full bg-slate-300 bg-opacity-50 backdrop-blur"
              onClick={() => {
                setHamburgerIsOpen(false);
              }}
            >
              background
            </div>
          )}
        </XyzTransition>
      </div>
      <div className="sticky top-0 z-40 hidden w-full bg-slate-100 bg-opacity-90 shadow-md backdrop-blur lg:block">
        <div className="w-full bg-slate-100">
          <div className="mx-auto max-w-7xl p-4">
            <div className="flex items-center justify-between">
              {leftSide}
              <ol className="flex gap-8 text-lg font-medium">
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
