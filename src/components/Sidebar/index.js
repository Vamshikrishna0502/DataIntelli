import React from "react";
import { FiChevronsLeft,FiChevronsRight,FiMonitor } from "react-icons/fi";
import { IoIosSearch,IoMdCalendar } from "react-icons/io";
import { FaRegBuilding } from "react-icons/fa";
import { MdHelpOutline,MdHeadset } from "react-icons/md";
import { HiMiniCurrencyDollar } from "react-icons/hi2";
import { IoSettingsSharp } from "react-icons/io5";
import { TbSquareRoundedLetterD } from "react-icons/tb";
import "./index.css"

const SideBar = props => {
  const sidebarClass = props.isOpen ? "sidebar open" : "sidebar";
  return (
    <div className={`${sidebarClass}`}>
        <span><button onClick={props.toggleSidebar} className="sidebar-toggle">
        {props.isOpen ? <FiChevronsLeft className="icon"/> : <FiChevronsRight className="icon"/>}
      </button></span>
      <div className="side-bar-container">
      <div><TbSquareRoundedLetterD className="inner-icon"/></div>
      <div> <ul className="list-container">
        <li><IoIosSearch className="inner-icon"/></li>
        <li><FiMonitor  className="inner-icon"/></li>
        <li><MdHelpOutline  className="inner-icon"/></li>
        <li><IoMdCalendar  className="inner-icon"/></li>
        <li><FaRegBuilding  className="inner-icon"/></li>
        <li><HiMiniCurrencyDollar  className="inner-icon"/></li>
        <li><MdHeadset  className="inner-icon"/></li>
        </ul> </div>
        
      <div><IoSettingsSharp className="inner-icon"/></div>
      </div>
    </div>
  );
};
export default SideBar;