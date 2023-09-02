import Footer from "@/components/Footer";
import HeaderNav from "@/components/HeaderNav";

import Image from "next/image";
import unDrawMain from "./undraw_wash_hands_nwl2.svg";
import unDrawCompare from "./undraw_split_testing_l1uw.svg";
import unDrawFaq from "./undraw_faq_re_31cw.svg";

function TableYes({ text }) {
  return (
    <div className="flex items-center gap-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={3}
        stroke="green"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4.5 12.75l6 6 9-13.5"
        />
      </svg>
      {text}
    </div>
  );
}

function TableNo({ text }) {
  return (
    <div className="flex items-center gap-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={3}
        stroke="red"
        className="w-6 h-6"
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
      <HeaderNav></HeaderNav>
      <div className="container relative z-10 mx-auto h-[50rem] p-4">
        <div className="flex flex-col items-start justify-center h-full lg:w-3/5">
          <h1 className="relative z-20 text-[3rem] sm:text-[4rem] font-serif font-bold">
            Ett bättre sätt att laga dagen. Välj Relining
          </h1>
          <h2 className="relative z-20 text-lg sm:text-[1.5rem] bg-white bg-opacity-50">
            Relining är en kostnadseffektiv teknik för att reparera skadade rör
            utan grävning genom att infoga en ny lining inuti det befintliga
            röret. Detta förstärker röret, täpper till läckor och är
            miljövänligare än traditionella utbyten.
          </h2>
          <div className="relative z-20 mt-5 flex gap-2">
            <button className="bg-rose-500 text-base hover:opacity-80 transition-all text-white font-bold rounded-full px-8 py-3 border border-white">
              Learn more
            </button>
            <button className="bg-rose-500 text-base hover:opacity-80 transition-all text-white font-bold rounded-full px-8 py-3 border border-white">
              Boka
            </button>
          </div>
          <div className="absolute z-10 bottom-0 w-full flex justify-center p-8 ">
            <svg
              className="w-8 h-8 animate-bounce "
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
      <div className="bg-slate-800 relative z-10">
        <div className="container mx-auto px-4 py-20 text-white">
          <div className="flex flex-wrap gap-4 w-full">
            <div className="flex-1">
              <h3 className="font-bold text-[3rem] font-serif">
                The relining mission
              </h3>
              <h4 className="text-[1.5rem]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corrupti nesciunt natus ipsum quo minus! Suscipit expedita vitae
                fugiat error
              </h4>
            </div>
            <div className=" min-w-[14rem]" style={{ flex: "1 1 20%" }}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et vel
              officia nulla accusamus ducimus numquam exercitationem obcaecati
              sequi! Cumque a illo quidem atque aperiam in fugit laudantium
              distinctio officiis tempore? Lorem ipsum dolor, sit amet
              consectetur adipisicing elit. Quo fugit officiis mollitia sunt nam
              ducimus dolore? Rem id, similique, molestias animi placeat vel
              commodi illo veritatis, nam tempora nesciunt facere. Lorem ipsum
              dolor sit amet consectetur adipisicing elit. In accusantium
              tenetur dignissimos a ut deleniti aliquam! Suscipit, sint. Itaque
              non unde excepturi, atque mollitia illo eveniet recusandae animi!
              Iure, atque!
            </div>
          </div>
        </div>
      </div>
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="absolute z-0 translate-y-20 top-0 -scale-x-[1]">
          <Image height={"280"} src={unDrawCompare} alt=""></Image>
        </div>

        <h3 className="relative z-10 font-bold text-[3rem] font-serif text-center mx-auto bg-white bg-opacity-50 rounded-xl">
          Relinig vs Stambyte
        </h3>
        <div className="relative z-10 mx-auto max-w-3xl">
          <div className="overflow-x-auto">
            <table className="table mt-8 bg-white bg-opacity-50">
              {/* head */}
              <thead>
                <tr>
                  <th>Funktion</th>
                  <th>Relinig</th>
                  <th>Stambyte</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                <tr>
                  <td>Installationstid</td>
                  <td>
                    <TableYes text={"två mikrosekunder"}></TableYes>
                  </td>
                  <td>
                    <TableNo text={"tre år"}></TableNo>
                  </td>
                </tr>
                {/* row 2 */}
                <tr>
                  <td>Landskapsarkitektur</td>
                  <td>
                    <TableYes text={"bra typ"}></TableYes>
                  </td>
                  <td>
                    <TableNo text={"kräver att man gräver typ"}></TableNo>
                  </td>
                </tr>
                {/* row 3 */}
                <tr>
                  <td>Långvarighet</td>
                  <td>
                    <TableYes text={"bra typ"}></TableYes>
                  </td>
                  <td>
                    <TableYes text={"också rätt bra typ"}></TableYes>
                  </td>
                </tr>
                {/* row 1 */}
                <tr>
                  <td>Installationstid</td>
                  <td>
                    <TableYes text={"två mikrosekunder"}></TableYes>
                  </td>
                  <td>
                    <TableNo text={"tre år"}></TableNo>
                  </td>
                </tr>
                {/* row 2 */}
                <tr>
                  <td>Landskapsarkitektur</td>
                  <td>
                    <TableYes text={"bra typ"}></TableYes>
                  </td>
                  <td>
                    <TableNo text={"kräver att man gräver typ"}></TableNo>
                  </td>
                </tr>
                {/* row 3 */}
                <tr>
                  <td>Långvarighet</td>
                  <td>
                    <TableYes text={"bra typ"}></TableYes>
                  </td>
                  <td>
                    <TableYes text={"också rätt bra typ"}></TableYes>
                  </td>
                </tr>
                {/* row 1 */}
                <tr>
                  <td>Installationstid</td>
                  <td>
                    <TableYes text={"två mikrosekunder"}></TableYes>
                  </td>
                  <td>
                    <TableNo text={"tre år"}></TableNo>
                  </td>
                </tr>
                {/* row 2 */}
                <tr>
                  <td>Landskapsarkitektur</td>
                  <td>
                    <TableYes text={"bra typ"}></TableYes>
                  </td>
                  <td>
                    <TableNo text={"kräver att man gräver typ"}></TableNo>
                  </td>
                </tr>
                {/* row 3 */}
                <tr>
                  <td>Långvarighet</td>
                  <td>
                    <TableYes text={"bra typ"}></TableYes>
                  </td>
                  <td>
                    <TableYes text={"också rätt bra typ"}></TableYes>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="relative z-10 bg-slate-600">
        <div className="container mx-auto px-4 py-20 text-white">
          <div className="flex flex-wrap-reverse items-start gap-4 w-full">
            <div style={{ flex: "1 1 20%" }} className="p-8">
              <div className="flex flex-col items-center gap-4 min-w-[24rem]">
                <div className="collapse collapse-plus bg-slate-700 rounded-none">
                  <input type="checkbox" className="peer" />
                  <div className="collapse-title text-xl font-medium peer-checked:bg-slate-800">
                    Click me to show/hide contents
                  </div>
                  <div className="collapse-content peer-checked:bg-slate-800">
                    <p>hello</p>
                  </div>
                </div>
                <div className="collapse collapse-plus bg-slate-700 rounded-none">
                  <input type="checkbox" className="peer" />
                  <div className="collapse-title text-xl font-medium peer-checked:bg-slate-800">
                    Click me to show/hide contents
                  </div>
                  <div className="collapse-content peer-checked:bg-slate-800">
                    <p>hello</p>
                  </div>
                </div>
                <div className="collapse collapse-plus bg-slate-700 rounded-none">
                  <input type="checkbox" className="peer" />
                  <div className="collapse-title text-xl font-medium peer-checked:bg-slate-800">
                    Click me to show/hide contents
                  </div>
                  <div className="collapse-content peer-checked:bg-slate-800">
                    <p>hello</p>
                  </div>
                </div>
                <div className="collapse collapse-plus bg-slate-700 rounded-none">
                  <input type="checkbox" className="peer" />
                  <div className="collapse-title text-xl font-medium peer-checked:bg-slate-800">
                    Click me to show/hide contents
                  </div>
                  <div className="collapse-content peer-checked:bg-slate-800">
                    <p>hello</p>
                  </div>
                </div>
                <div className="collapse collapse-plus bg-slate-700 rounded-none">
                  <input type="checkbox" className="peer" />
                  <div className="collapse-title text-xl font-medium peer-checked:bg-slate-800">
                    Click me to show/hide contents
                  </div>
                  <div className="collapse-content peer-checked:bg-slate-800">
                    <p>hello</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative h-fit mb-auto" style={{ flex: "1 1 0%" }}>
              <h3 className="font-bold text-[3rem] font-serif relative z-10">
                Vanliga frågor
              </h3>
              <h4 className="text-[1.5rem] relative z-10">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corrupti
              </h4>
              <div className="absolute z-0 right-0 top-0 -translate-y-full md:bottom-0 md:translate-y-full">
                <Image height={"200"} src={unDrawFaq} alt=""></Image>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto relative z-10 px-4 py-20">
        <h3 className="font-bold text-[3rem] font-serif text-center">
          Låter det interessant?
        </h3>
        <div className="flex justify-center items-center gap-2 mt-8">
          <button className="bg-rose-500 text-base hover:opacity-80 transition-all text-white font-bold rounded-full px-8 py-3">
            Boka tid
          </button>
          <button className="text-base font-medium rounded-full px-5 py-2 border-2 border-rose-500 text-rose-500 hover:bg-rose-500 hover:text-white transition-all hover:opacity-80">
            Prata med en expert
          </button>
        </div>
        <p className="text-center mt-4">
          (bara 4 lediga tider kvar denna månad)
        </p>
      </div>
      <Footer></Footer>
    </>
  );
}
