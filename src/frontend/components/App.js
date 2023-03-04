import logo from './logo.svg';
import './App.css';
import NavBar from './NavBar';
import ConnectWallet from './MainContent'
import { useState } from "react";
import { ethers, Signer } from 'ethers';
import SimpleTransactionAbi from '../components/contractsData/SimpleTransaction.json';
import SimpleTransactionAddress from '../components/contractsData/SimpleTransaction-address.json';
import Deposit from './test';
import Balance from './getBalance';
function App() {
  var etherAccount1Deposit = 5;
  const [check, setCheck] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [account, setAccount] = useState(null);
  const [accountBalance, getAccountBalance] = useState(null);
  const [simpleTransaction, setSimpleTransaction] = useState({})
  const SendTransaction = () => {
    if (window.ethereum) {
      window.ethereum.request({
        method: 'eth_sendTransaction',
        params: [
          {
            from: account,
            to: '0x976EA74026E726554dB657fA54763abd0C3a0aa9',
            value: '0x29a2241af62c0000', //'0x9184e72a'
            gas: '0x76c0', // 30400
            gasPrice: '0x9184e72a000', // 10000000000000
            chainId: 31337,
          },
        ],
      })
        .then((txhash) => console.log(txhash))
    }
  }
  const ConnectWallet = () => {
    if (window.ethereum) {
      window.ethereum.request({ method: 'eth_requestAccounts' })
        .then(result => {
          accountChangeHandler(result[0]);
          setAccountBalance(result[0]);
          setCheck(true);
        }
        )
      setCheck(true)
      const provider = new ethers.providers.Web3Provider(window.ethereum)
      // Set signer
      const signer = provider.getSigner()
      loadContract(signer)
    } else {
      setErrorMessage('Install MetaMask')
    }
  }
  const accountChangeHandler = (newAccount) => {
    setAccount(newAccount);
  }
  const setAccountBalance = (newAccount) => {
    window.ethereum.request({ method: 'eth_getBalance', params: [newAccount, 'latest'] })
      .then(balance => {
        getAccountBalance(ethers.utils.formatEther(balance));
        console.log("hello")
      })
      .catch(error => {
        setErrorMessage(error.message);
      });
  };
  const loadContract = async (signer) => {
    const mySimpleTransaction = new ethers.Contract(
      SimpleTransactionAddress.address,
      SimpleTransactionAbi.abi,
      signer,
    )
    setSimpleTransaction(mySimpleTransaction)
  }

  return (
    <div className="App">
      <div>
        <NavBar Account={account} Balance={accountBalance} CheckValue={check} />
        <div className="btn-container"><button className="NavBar-Btn" onClick={ConnectWallet}>Connect Wallet</button></div>
      </div>
      <div>
        <div><button className="NavBar-Btn" onClick={SendTransaction}>Send ETH</button></div>
      </div>
      <Deposit Account={account} Contract={simpleTransaction} />
      <Balance Account={account} Contract={simpleTransaction} />
    </div>

  );
}

export default App;