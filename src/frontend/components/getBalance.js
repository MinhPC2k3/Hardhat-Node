import React from "react";
import NavBarImg from "./NavBarImg.png";
import { useState} from "react";
import {ethers} from 'ethers';
function Balance(props){
    let etherAccount1Deposit = 5;
    let myContract =props.Contract;
    let myAccount =props.Account;
    let SmartContractMoney;
    const GetBalance =async() =>{
        
        SmartContractMoney = await myContract.CheckAccount(myAccount)
        console.log(SmartContractMoney)
        console.log('done getBalance')
        
    }
    return(
        <div>
            <button className="NavBar-Btn" onClick={GetBalance}>Get</button>
        </div>
    )
}
export default Balance;