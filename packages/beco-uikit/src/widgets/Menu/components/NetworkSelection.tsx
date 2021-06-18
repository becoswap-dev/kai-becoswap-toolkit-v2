import React, { useContext } from "react";
import Button from "../../../components/Button/Button";
import { useModal, Modal } from "../../Modal";
import { Flex } from "../../../components/Box";
import Kardiachain from "../../WalletModal/icons/Kardiachain";
import BNBLogo from "../icons/BNBLogo";
import { Context } from "../../Modal/ModalContext";

const NetworkSelection: React.FC = () => {
  const { onDismiss } = useContext(Context);

  const NetworkSelectModal = <Modal
    title="Select network"
    headerBackground="#FFF"
  >
    <Flex alignItems="start" justifyContent="space-between" mb="8px" flexDirection="column">
      <Flex style={{ cursor: "pointer" }} justifyContent="start" alignItems="center" minWidth="70px" onClick={onDismiss}>
        <Kardiachain/>&nbsp;KardiaChain
      </Flex>
      <Flex mt="8px" justifyContent="start" alignItems="center" minWidth="70px" onClick={onDismiss}>
        <BNBLogo/>&nbsp;
        <a href="https://bsc.becoswap.com" target="_blank">
          Binance smart chain (BSC)
        </a>
      </Flex>
    </Flex>
  </Modal>

  const [onPresentNetworkModal] = useModal(NetworkSelectModal)

  return (
    <Button
      mr="8px"
      scale="sm"
      variant="tertiary"
      onClick={() => onPresentNetworkModal()}
    >
      <Kardiachain/>&nbsp;KardiaChain
    </Button>
  );
};

export default React.memo(NetworkSelection);
