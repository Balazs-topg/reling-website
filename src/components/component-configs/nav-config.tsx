import Link from "next/link";
import { Dropdown } from "../Nav";
import { Button } from "@nextui-org/react";
import ModalForm from "../ModalForm";

const alternativesTwStyle =
  "whitespace-nowrap hover:bg-white   rounded-lg focus:bg-white py-1 px-4  cursor-pointer active:scale-95 transition-all text-start";

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
          key="om-oss"
          href={"/har-finns-vi"}
          className=" whitespace-nowrap"
        >
          Om oss
        </Link>,
      ]}
    >
      <div>Om oss</div>
    </Dropdown>,
  ],
  leftSide: (
    <Link key="left-link" className="text-2xl font-semibold" href={"/"}>
      Epoxy <span className="text-primary">Relining</span>
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
