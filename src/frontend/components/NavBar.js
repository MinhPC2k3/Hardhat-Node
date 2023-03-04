import React from "react";
import NavBarImg from "./NavBarImg.png";
import { useState} from "react";
import {ethers} from 'ethers'
function NavBar (props){
    console.log(props.Account)
    let MyValue = props.CheckValue
    return(
        <div>
            <div className="NavBar">
                <div className="Left-NavBar">
                    <img src={NavBarImg} className="NavBar-Img"/> 
                    <p>&nbsp; Transfer </p>
                    <p>Home</p>
                    <p>My Listed</p>
                    <p>My Purchases</p>
                </div>
            </div>
            <div>
                {MyValue ?  
                    <div className="container">
                        <div className="MyAddress">
                            <p>Address: {props.Account}</p>
                        </div>
                        <div className="MyBalance">
                            <p>Balance: {props.Balance}</p>
                        </div>
                        
                        
                        
                    </div> : null
                }
            </div>
        </div>
        
    )
}
export default NavBar;
//Home Create My Listed Items My Purchases