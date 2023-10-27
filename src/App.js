import { useState } from 'react';
import React from 'react';
import ItemList from './components/ItemList';
import { WalletNotDetected } from './components/WalletNotDetected';
import { ConnectWallet } from './components/connectWallet';

const HARDHAT_NETWORK_ID = Number(process.env.REACT_APP_NETWORK_ID);

function App() {
  const [selectedAddress, setSelectedAddress] = useState(undefined);

  async function connectWallet() {
    try {
      const [address] = await window.ethereum.request({method: "eth_requestAccounts"});

      await checkNetwork();

      setSelectedAddress(address);

      window.ethereum.on("accountsChanged", ([newAddress]) => {
        if (newAddress === undefined) {
          setSelectedAddress(undefined);
          return;
        }

        setSelectedAddress(newAddress);
        // connection to SC
        // getting owned pets
      });

    } catch(e) {
      console.error(e.message);
    }
  }

  console.log(connectWallet())

  async function switchNetwork() {
    const chainIdHex = `0x${HARDHAT_NETWORK_ID.toString(16)}`;

    return await window.ethereum.request({
      method: "wallet_switchEthereumChain",
      params: [{chainId: chainIdHex}]
    });
  }

  async function checkNetwork() {
    if (window.ethereum.networkVersion !== HARDHAT_NETWORK_ID.toString()) {
      return switchNetwork();
    }

    return null;
  }

  if (!window.ethereum) {
    return <WalletNotDetected />
  }


  if (!selectedAddress) {
    return <ConnectWallet connect={connectWallet} />
  }
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <ItemList address={selectedAddress} />
    </div>
  );
}

export default App;