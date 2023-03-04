import React from "react";
import NavBarImg from "./NavBarImg.png";
import { useState} from "react";
import {ethers} from 'ethers';
function Deposit(props){
    let etherAccount1Deposit = 5;
    let myContract =props.Contract;
    let myAccount =props.Account;
    const Send = async () => {
        await myContract.deposit({ value: ethers.utils.parseEther(etherAccount1Deposit.toString()) });
        console.log('Already send')
        console.log(myContract.address)
        
    }
    
    return(
        <div>
            <button className="NavBar-Btn" onClick={Send}>Deposit ETH</button>

        </div>
    )
}
export default Deposit;