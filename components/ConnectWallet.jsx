import React from "react";
import {
  Mainnet,
  DAppProvider,
  useEtherBalance,
  useEthers,
  Config,
  Goerli,
} from "@usedapp/core";
import { getDefaultProvider } from "ethers";

export default function ConnectWallet() {
  const config = {
    readOnlyChainId: Mainnet.chainId,
    readOnlyUrls: {
      [Mainnet.chainId]: getDefaultProvider("mainnet"),
      [Goerli.chainId]: getDefaultProvider("goerli"),
    },
  };
  return <div className=""></div>;
}
