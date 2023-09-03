"use client";

import "@animxyz/core";
import { XyzTransition, XyzTransitionGroup } from "@animxyz/react";

import React, { use, useEffect, useRef, useState } from "react";

import useWindowSize from "@/utils/useWindowSize";
import useOutsideAlerter from "@/utils/useOutsideAlerter";

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

function DesktopDropdown({ children, className, alternatives }) {
  console.log(alternatives);
  const [currentlyOpened, setCurrentlyOpened] = useState(false);
  const ref = useRef();
  useOutsideAlerter(ref, () => {
    setCurrentlyOpened(false);
  });

  return (
    <li className={"relative"}>
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

      <XyzTransition className="item-group" xyz="duration-1.5 stagger-0.5 up-2">
        {currentlyOpened && (
          <div
            ref={ref}
            className="absolute z-[-1] translate-y-6 py-2 px-2 flex flex-col gap-1 bg-slate-100 rounded-xl rounded-t-none"
          >
            {alternatives.map((alternative) => (
              <button
                key={0}
                className="hover:bg-white focus:bg-white rounded-lg py-1 px-4 whitespace-nowrap cursor-pointer active:scale-95 transition-all"
              >
                {alternative.content}
              </button>
            ))}
          </div>
        )}
      </XyzTransition>
    </li>
  );
}

function MobileDropdown({ children, className, alternatives }) {
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
          {children}{" "}
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
            key={0}
            className={
              currentlyOpened
                ? "bg-slate-200 overflow-hidden transition-all max-h-60 p-2"
                : "bg-slate-200 overflow-hidden transition-all max-h-0"
            }
          >
            {alternative.content}
          </div>
        ))}
      </div>
    </div>
  );
}

function Nav() {
  const menueItems = [
    {
      content: "Relining avlopp",
      dropDown: [{ content: "alt1" }, { content: "alt2" }],
    },
    {
      content: "Om oss",
      dropDown: [
        { content: "Relining avlopp" },
        { content: "Relining avlopp" },
      ],
    },
    { content: "Karriär" },
    { content: "Kontakt" },
  ];

  const rightSide = (
    <button className="text-base w-fit font-medium rounded-full px-5 py-2 border-2 border-rose-500 text-rose-500 hover:bg-rose-500 hover:text-white transition-all hover:opacity-80">
      Prata med en expert
    </button>
  );

  const leftSide = (
    <div className="font-semibold text-2xl">
      Relining <span className="text-rose-500">Exellent</span>
    </div>
  );

  const currentWindowDimensions = useWindowSize();
  const [hamburgerIsOpen, setHamburgerIsOpen] = useState(true);
  useEffect(() => {
    if (currentWindowDimensions[0] > 1024) {
      setHamburgerIsOpen(false);
    }
  }, [currentWindowDimensions]);

  return (
    <>
      <div className="lg:hidden">
        <div className="bg-slate-100 w-full">
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
                  ? "overflow-hidden transition-all rounded-lg max-h-screen"
                  : "overflow-hidden transition-all max-h-0"
              }
            >
              <ol className="py-4 mt-2 text-lg font-medium text-center">
                <XyzTransitionGroup
                  className="item-group flex flex-col items-center gap-4"
                  xyz="duration-2  fade stagger-0.5 left-2"
                >
                  {menueItems.map(
                    (item) =>
                      hamburgerIsOpen &&
                      (!item.dropDown ? (
                        <button
                          key={item.content}
                          className="active:scale-95 transition-transform"
                        >
                          {item.content}
                        </button>
                      ) : (
                        <li className="w-full">
                          <MobileDropdown
                            className="active:scale-95 transition-transform mx-auto"
                            alternatives={item.dropDown}
                          >
                            {item.content}
                          </MobileDropdown>
                        </li>
                      ))
                  )}
                  {hamburgerIsOpen && <div>{rightSide}</div>}
                </XyzTransitionGroup>
              </ol>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden lg:block">
        <div className="bg-slate-100 w-full">
          <div className="mx-auto max-w-7xl p-4">
            <div className="flex justify-between items-center">
              {leftSide}
              <ol className="font-medium flex gap-5">
                {menueItems.map((item) =>
                  !item.dropDown ? (
                    <div className="active:scale-95 transition-all">
                      {item.content}
                    </div>
                  ) : (
                    <DesktopDropdown
                      className="active:scale-95 transition-all"
                      alternatives={item.dropDown}
                    >
                      {item.content}
                    </DesktopDropdown>
                  )
                )}
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
