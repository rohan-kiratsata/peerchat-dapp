import React from "react";

export default function Navbar() {
  return (
    <>
      <div className="navbar bg-base-200 sticky top-0">
        <p className="normal-case text-xl">CommunityName</p>
      </div>
      {/* // Channels */}
      <div className="flex gap-3 w-full py-3 px-5 bg-base-100 shadow-md">
        <div class="badge badge-neutral text-base">neutral</div>
        <div class="badge badge-neutral text-base">neutral</div>
        <div class="badge badge-neutral text-base">neutral</div>
        <div class="badge badge-neutral text-base">neutral</div>
        <div class="badge badge-neutral text-base">neutral</div>
        <div class="badge badge-neutral text-base">neutral</div>
      </div>
    </>
  );
}
