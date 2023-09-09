import Link from "next/link";
import { Dropdown } from "../Nav";
import { Button } from "@nextui-org/react";
import ModalForm from "../ModalForm";

const alternativesTwStyle =
  "hover:bg-white focus:bg-white rounded-lg py-1 px-4 whitespace-nowrap cursor-pointer active:scale-95 transition-all text-start";

const menueItems = {
  nav: [
    <div key="omrelining">Om relining</div>,

    <div key="jobbahar">Jobba här</div>,
    <Dropdown
      key="dropdown2"
      z={0}
      alternatives={[
        <Link
          key="link-vaxjo"
          href={"/har-finns-vi"}
          className=" whitespace-nowrap"
        >
          Här finns vi
        </Link>,
        <Link
          key="link-vaxjo"
          href={"/stader/vaxjo"}
          className=" whitespace-nowrap"
        >
          Våran historia
        </Link>,
      ]}
    >
      <div>Om oss</div>
    </Dropdown>,
  ],
  leftSide: (
    <Link key="left-link" className="font-semibold text-2xl" href={"/"}>
      Relining <span className="text-primary">Exellent</span>
    </Link>
  ),
  rightSide: (
    <ModalForm
      key="right-button"
      className="hover:scale-105"
      color="primary"
      size="lg"
      radius="full"
    >
      Kontakta oss
    </ModalForm>
  ),
};

export default menueItems;
