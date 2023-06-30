import Image from "next/image";
import React from "react";
import { PiHouseSimple, PiCompass, PiPlusCircle, PiGear } from "react-icons/pi";

const routes = [
  {
    name: "Home",
    icon: <PiHouseSimple size={28} />,
  },
  {
    name: "Explore",
    icon: <PiCompass size={28} />,
  },
  {
    name: "Create Community",
    icon: <PiPlusCircle size={28} />,
  },
  {
    name: "Settings",
    icon: <PiGear size={28} />,
  },
];

export default function Sidenav() {
  return (
    <>
      <aside className="w-24 p-4 flex flex-col justify-between h-full">
        <div>
          {/* Logo */}
          <div className="flex items-center justify-center">
            <Image src="/logo-svg.svg" height={38} width={38} alt="" />
          </div>
          <div className="my-8">
            <ul className="flex flex-col items-center justify-center gap-3">
              {routes.map((item, index) => {
                return (
                  <>
                    <div className="btn btn-ghost" key={index}>
                      {item.icon}
                    </div>
                  </>
                );
              })}
            </ul>
          </div>
        </div>
        {/* Profile */}
        <div className="flex justify-center">
          <img
            src="https://picsum.photos/200"
            className="rounded-full"
            width={"42px"}
            height={"42px"}
            alt=""
          />
        </div>
      </aside>
    </>
  );
}
