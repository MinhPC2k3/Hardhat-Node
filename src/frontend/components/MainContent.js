import React from "react";
import { useState} from "react";
import {ethers} from 'ethers'
const ConnectWallet = () =>{
    const [errorMessage , setErrorMessage] = useState(null);
    const [account , setAccount] = useState(null);
    const [accountBalance , getAccountBalance] = useState(null)
    const connectMetaMask = () =>{
        if(window.ethereum){
            window.ethereum.request({ method: 'eth_requestAccounts' })
            .then(result =>{
                accountChangeHandler(result[0]);
                setAccountBalance(result[0]);
            })

        }else {
            setErrorMessage('Install MetaMask')
        }
    }
    const accountChangeHandler = (newAccount) =>{
        setAccount(newAccount);
    }
    const setAccountBalance = (newAccount) =>{
        window.ethereum.request({method: 'eth_getBalance', params: [newAccount, 'latest']})
        	.then(balance => {
			    getAccountBalance(ethers.utils.formatEther(balance));
                console.log("hello")
		    })
            .catch(error => {
                setErrorMessage(error.message);
            });
	};
    return(
        <div className="container">
            <h3>Address: {account}</h3>
            <h3>Balance: {accountBalance}</h3>
        </div>
    )
}
export default ConnectWallet;
// import React, {useState} from 'react'
// import {ethers} from 'ethers'


// const ConnectWallet = () => {

// 	const [errorMessage, setErrorMessage] = useState(null);
// 	const [defaultAccount, setDefaultAccount] = useState(null);
// 	const [userBalance, setUserBalance] = useState(null);
// 	const [connButtonText, setConnButtonText] = useState('Connect Wallet');

// 	const connectWalletHandler = () => {
// 		if (window.ethereum && window.ethereum.isMetaMask) {
// 			console.log('MetaMask Here!');

// 			window.ethereum.request({ method: 'eth_requestAccounts'})
// 			.then(result => {
// 				accountChangedHandler(result[0]);
// 				setConnButtonText('Wallet Connected');
// 				getAccountBalance(result[0]);
// 			})
// 			.catch(error => {
// 				setErrorMessage(error.message);
			
// 			});

// 		} else {
// 			console.log('Need to install MetaMask');
// 			setErrorMessage('Please install MetaMask browser extension to interact');
// 		}
// 	}

// 	// update account, will cause component re-render
// 	const accountChangedHandler = (newAccount) => {
// 		setDefaultAccount(newAccount);
// 		getAccountBalance(newAccount.toString());
// 	}

// 	const getAccountBalance = (account) => {
// 		window.ethereum.request({method: 'eth_getBalance', params: [account, 'latest']})
// 		.then(balance => {
// 			setUserBalance(ethers.utils.formatEther(balance));
// 		})
// 		.catch(error => {
// 			setErrorMessage(error.message);
// 		});
// 	};

// 	const chainChangedHandler = () => {
// 		// reload the page to avoid any errors with chain change mid use of application
// 		window.location.reload();
// 	}


// 	// listen for account changes
// 	window.ethereum.on('accountsChanged', accountChangedHandler);

// 	window.ethereum.on('chainChanged', chainChangedHandler);
	
// 	return (
// 		<div className='walletCard'>
// 		<h4> {"Connection to MetaMask using window.ethereum methods"} </h4>
// 			<button onClick={connectWalletHandler}>{connButtonText}</button>
// 			<div className='accountDisplay'>
// 				<h3>Address: {defaultAccount}</h3>
// 			</div>
// 			<div className='balanceDisplay'>
// 				<h3>Balance: {userBalance}</h3>
// 			</div>
// 			{errorMessage}
// 		</div>
// 	);
// }

// export default ConnectWallet;

