import Link from "next/link";
import { Dropdown } from "../Nav";

const alternativesTwStyle =
  "hover:bg-white focus:bg-white rounded-lg py-1 px-4 whitespace-nowrap cursor-pointer active:scale-95 transition-all text-start";

const menueItems = {
  nav: [
    <div key="home">Home</div>,
    <div key="bruh">bruh</div>,
    <Dropdown
      key="dropdown1"
      z={0}
      alternatives={[<div key="alt1">alt1</div>, <div key="alt2">alt2</div>]}
    >
      <div>dropdown</div>
    </Dropdown>,
    <Dropdown
      key="dropdown2"
      z={0}
      alternatives={[
        <Link key="link-vaxjo" href={"/stader/vaxjo"}>
          Växjö
        </Link>,
        <div key="alt22">alt2</div>,
      ]}
    >
      <div>Här finns vi</div>
    </Dropdown>,
  ],
  leftSide: (
    <Link key="left-link" className="font-semibold text-2xl" href={"/"}>
      Relining <span className="text-rose-500">Exellent</span>
    </Link>
  ),
  rightSide: (
    <button
      key="right-button"
      className="text-base w-fit font-medium rounded-full px-5 py-2 border-2 border-rose-500 text-rose-500 hover:bg-rose-500 hover:text-white transition-all hover:opacity-80"
    >
      Prata med en expert
    </button>
  ),
};

export default menueItems;
