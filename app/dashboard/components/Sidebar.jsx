/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import { PiUserPlus } from "react-icons/pi";
import { friends, communities } from "@/app/utils/content";

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
              {/* <div className="btn btn-ghost"> */}
              {/* <PiUserPlus size={28} /> */}
              {/* You can open the modal using ID.showModal() method */}
              <button
                className="btn"
                onClick={() => window.my_modal_3.showModal()}
              >
                <PiUserPlus size={28} />
              </button>
              <dialog id="my_modal_3" className="modal">
                <form method="dialog" className="modal-box">
                  <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                    ✕
                  </button>
                  <h3 className="font-medium text-lg">Add your friends!</h3>
                  <p className="text-base-content">
                    Add your friends with their Peerchat username.
                  </p>
                  <input
                    type="text"
                    placeholder="Add friends with Peerchat username."
                    className="input input-bordered bg-[#2D353D] mt-2 input-md w-full max-w-xs"
                  />
                  <button className="btn btn-primary normal-case tracking-wide my-2">
                    Send Friend Request
                  </button>
                </form>
              </dialog>
              {/* </div> */}
            </div>
            {/* Title */}
            <div className="text-sm tracking-wide text-gray-500 my-2">
              COMMUNITIES
            </div>
            <div className="flex flex-col gap-1">
              {communities.map((community, index) => {
                return (
                  <li key={index}>
                    <a className="bg-base-100">
                      <img
                        src="/icons/blockchain.jpg"
                        width={"32px"}
                        height={"32px"}
                        alt=""
                        className="rounded-md"
                      />
                      <span>{community.name}</span>
                    </a>
                  </li>
                );
              })}
            </div>

            <div className="text-sm tracking-wide text-gray-500 my-2">
              FRIENDS
            </div>
            <div className="flex flex-col gap-1">
              {friends.map((item, index) => {
                return (
                  <li key={index}>
                    <a className="bg-base-100">
                      <div className="avatar online">
                        <div className="w-8 rounded-full">
                          <img src="https://picsum.photos/200" />
                        </div>
                      </div>
                      <span>{item.name}</span>
                    </a>
                  </li>
                );
              })}
            </div>
          </ul>
        </div>
      </div>
    </>
  );
}
