import React from "react";
import { PiUserPlus } from "react-icons/pi";

export default function Sidebar() {
  return (
    <>
      <div className="drawer lg:drawer-open sticky top-0">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* Page content here */}
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-60 h-screen bg-base-200 text-base">
            <div className="flex justify-between items-center mb-5">
              <p className="font-medium text-lg">Inbox</p>
              {/* Add friends */}
              <div className="btn btn-ghost">
                <PiUserPlus size={28} />
              </div>
            </div>
            {/* Title */}
            <div className="text-sm tracking-wide text-gray-500 my-2">
              FRIENDS
            </div>
            <div className="flex flex-col gap-1">
              <li>
                <a className="bg-base-100">Sidebar Item 1</a>
              </li>
              <li>
                <a className="bg-base-100">Sidebar Item 1</a>
              </li>
              <li>
                <a className="bg-base-100">Sidebar Item 1</a>
              </li>{" "}
              <li>
                <a className="bg-base-100">Sidebar Item 1</a>
              </li>
              <li>
                <a className="bg-base-100">Sidebar Item 1</a>
              </li>
            </div>

            {/* Community */}
            <div className="text-sm tracking-wide text-gray-500 my-2">
              COMMUNITIES
            </div>
            <div className="flex flex-col gap-1">
              <li>
                <a className="bg-base-100">Sidebar Item 1</a>
              </li>
              <li>
                <a className="bg-base-100">Sidebar Item 1</a>
              </li>
              <li>
                <a className="bg-base-100">Sidebar Item 1</a>
              </li>{" "}
              <li>
                <a className="bg-base-100">Sidebar Item 1</a>
              </li>
              <li>
                <a className="bg-base-100">Sidebar Item 1</a>
              </li>
            </div>
          </ul>
        </div>
      </div>
    </>
  );
}
