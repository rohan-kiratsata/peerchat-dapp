/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <div className="navbar bg-base-100 my-5">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <Image src="/name-logo.png" alt="" width={100} height={100} />
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>About Project</a>
            </li>

            <li>
              <a>Our Team</a>
            </li>
          </ul>
        </div>
        <Link href="/" className="normal-case text-xl">
          <Image src="/name-logo.png" alt="" width={150} height={150} />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-base">
          <li>
            <a>About Project</a>
          </li>
          <li>
            <a>Our Team</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn btn-primary normal-case">
          <img src="/logo-metamask.svg" alt="" width="28" height="28" />{" "}
          <span className="tracking-normal text-base">Login</span>
        </a>
      </div>
    </div>
  );
}
