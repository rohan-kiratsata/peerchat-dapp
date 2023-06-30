import Link from "next/link";
import React from "react";

export default function HeroSection() {
  return (
    <div className="h-[80vh] flex flex-col justify-center items-center hero-background">
      <h1
        className="text-7xl text-center font-semibold text-accent-content
      "
      >
        Connect, Collaborate, and <br /> Learn with{" "}
        <span className="text-primary">PeerChat</span>
      </h1>
      <p className="text-xl text-center py-4 w-1/2">
        Peerchat is a Decentralized P2P Community web app. Peechat allows you to
        connect and communicate with like-minded people in communities or
        groups.
      </p>
      <div className="inline-flex gap-5 items-center">
        <Link href="/" className="text-xl">
          <span className="">Learn more</span>
        </Link>
        {/* <ConnectWalletButton /> */}
      </div>
    </div>
  );
}
