import React, { useState } from "react";
import styles from "./style.module.scss";
import logo from "../../assest/img/logo.png";
import insta from "../../assest/img/insta.svg";
import vk from "../../assest/img/vk.svg";
import teleg from "../../assest/img/teleg.svg";
import visa from "../../assest/img/visa.png";
import verifyVisa from "../../assest/img/verifyVisa.png";
import snow from "../../assest/img/snow.png";
import webpay from "../../assest/img/webpay.png";
import master from "../../assest/img/master.png";
import masterSecure from "../../assest/img/masterSecure.png";
import { NavLink } from "react-router-dom";

 
export default function Pagination() {
const number = [1,2,3,4,5,6,7,8]
  return (
    <div style={{display:'flex',marginBottom:60}} >
      {number.map(item=><div style={{marginLeft:5}} key={item}>{item}</div>)}

    </div>

  );
}
