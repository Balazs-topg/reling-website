"use client";
import Nav from "@/components/Nav";
import menueItems from "@/components/component-configs/nav-config";
export default function NavProvider() {
  return <Nav config={menueItems} />;
}
