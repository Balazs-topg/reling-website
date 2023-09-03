"use client";

import React, { useEffect, useRef, useState, useLayoutEffect } from "react";
import useWindowSize from "@/utils/useWindowSize";

import Link from "next/link";

function MappedMobile({ list }) {
  return list.map((item) =>
    item.dropDown ? (
      <li
        key={0}
        className="flex mx-auto w-fit items-center gap-1 select-none cursor-pointer active:scale-95 transition-transform"
      >
        {item.title}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
          />
        </svg>
      </li>
    ) : (
      <li
        key={0}
        className="flex mx-auto w-fit items-center gap-1 select-none cursor-pointer active:scale-95 transition-transform"
      >
        {item.title}
      </li>
    )
  );
}

function HeaderNav() {
  const navigationItems = [
    {
      title: "Relining avlopp",
      dropDown: ["first item", "second item", "third item"],
    },
    { title: "Om oss", dropDown: ["bruh"] },
    { title: "Karrär" },
    { title: "Kontakt" },
  ];
  const rightSide = (
    <button className="text-base w-fit font-medium rounded-full px-5 py-2 border-2 border-rose-500 text-rose-500 hover:bg-rose-500 hover:text-white transition-all hover:opacity-80">
      Prata med en expert
    </button>
  );
  const leftSide = (
    <Link
      href={"/"}
      className="font-semibold text-2xl"
      onClick={() => {
        console.log("bruh");
      }}
    >
      Relining <span className="text-rose-500">Exellent</span>
    </Link>
  );

  const mappedDesktop = navigationItems.map((item) =>
    item.dropDown ? (
      <li key={0}>
        <div className="dropdown dropdown-hover dropdown-bottom">
          <div className="font-medium flex justify-center gap-1 select-none cursor-pointer active:scale-95 transition-transform hover:bg-white p-1 px-4 rounded-full ">
            {item.title}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </div>

          <ul
            tabIndex={0}
            className="dropdown-content z-[1] p-2 bg-slate-100 rounded-box w-52 flex flex-col"
          >
            {item.dropDown.map((user) => (
              <Link
                tabIndex={0}
                href=""
                key={0}
                className="hover:bg-white rounded-lg py-1 px-3 active:scale-95 transition-all"
              >
                {user}
              </Link>
            ))}

            {/* item.dropDown.map((dropDownItem) => {
              <li>{dropDownItem}</li>;
            })*/}
          </ul>
        </div>
      </li>
    ) : (
      <li
        key={0}
        className="text-base font-medium flex justify-center gap-1 select-none cursor-pointer active:scale-95 transition-transform hover:bg-white p-1 px-4 rounded-full"
      >
        {item.title}
      </li>
    )
  );

  const [mobileMenueIsOpen, setMobileMenueIsOpen] = useState(false);
  const [backgroundIsShowing, setBackgroundIsShowing] = useState(false);

  const toggleRef = useRef();

  useEffect(() => {
    if (mobileMenueIsOpen) {
      console.log("show");
      setBackgroundIsShowing(mobileMenueIsOpen);
    } else {
      setTimeout(() => {
        setBackgroundIsShowing(mobileMenueIsOpen);
      }, 150);
    }
  }, [mobileMenueIsOpen]);

  const staticlyCheckESLintThing = useWindowSize();
  useEffect(() => {
    if (staticlyCheckESLintThing[0] > 1024) {
      setMobileMenueIsOpen(false);
    }
  }, [staticlyCheckESLintThing]);

  return (
    <>
      <nav className="bg-slate-100 p-4 fixed top-0 z-40 bg-opacity-95 backdrop-blur-lg w-full border-b border-white">
        <div className="hidden lg:flex container mx-auto justify-between items-center ">
          {leftSide}
          <ol className="flex gap-1">{mappedDesktop} </ol>
          {rightSide}
        </div>

        {/* mobile */}

        <div className="lg:hidden">
          <div className="flex container mx-auto justify-between items-center ">
            <div className="font-semibold text-2xl">{leftSide} </div>
            <label className="btn btn-circle swap swap-rotate">
              {/* this hidden checkbox controls the state */}
              <input
                checked={mobileMenueIsOpen}
                ref={toggleRef}
                type="checkbox"
                onChange={() => {
                  setMobileMenueIsOpen(toggleRef.current.checked);
                }}
              />
              {/* hamburger icon */}
              <svg
                className="swap-off fill-rose-500"
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 512 512"
              >
                <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
              </svg>
              {/* close icon */}
              <svg
                className="swap-on fill-rose-500"
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 512 512"
              >
                <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
              </svg>
            </label>
          </div>
        </div>
        <div
          className={
            mobileMenueIsOpen
              ? "flex flex-col gap-2 container mx-auto text-lg font-medium overflow-hidden transition-all max-h-72 "
              : "flex flex-col gap-2 container mx-auto text-lg font-medium overflow-hidden transition-all max-h-0"
          }
        >
          <ol className="py-4 flex flex-col gap-4">
            <MappedMobile list={navigationItems}> </MappedMobile>
            <div className="mx-auto">{rightSide}</div>
          </ol>
        </div>
      </nav>
      <div
        onClick={() => {
          setMobileMenueIsOpen(false);
        }}
        className={
          backgroundIsShowing
            ? "fixed top-0 left-0 z-30 w-full h-screen"
            : "fixed top-0 left-0 z-0 w-full h-screen"
        }
      >
        <div
          className={
            mobileMenueIsOpen
              ? "w-full h-screen bg-opacity-30 bg-slate-900 backdrop-blur-sm transition-opacity opacity-100"
              : "w-full h-screen bg-opacity-30 bg-slate-900 backdrop-blur-sm transition-opacity opacity-0"
          }
        ></div>
      </div>
    </>
  );
}

export default HeaderNav;
