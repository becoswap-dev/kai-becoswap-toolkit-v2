import { MetamaskIcon } from "../..";
import Kardiachain from "./icons/Kardiachain";
import { Config, ConnectorNames } from "./types";

const connectors: Config[] = [
  {
    title: "KardiaChain",
    icon: Kardiachain,
    connectorId: ConnectorNames.KAI,
  },
  {
    title: "Metamask",
    icon: MetamaskIcon,
    connectorId: ConnectorNames.Injected,
  },
];

export default connectors;
export const connectorLocalStorageKey = "connectorId";
