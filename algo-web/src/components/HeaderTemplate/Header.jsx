import React from "react";
import "./Header.css";
import { BiSearch } from "react-icons/bi";
import { AiOutlineUser } from "react-icons/ai";
import { TbMessages } from "react-icons/tb";
import { IoAnalytics } from "react-icons/io5";
import { HiOutlineMoon } from "react-icons/hi";
import { RiSettingsLine } from "react-icons/ri";

const Header = () => {
  return (
    <header>
      <div className="search-bar">
        <input type="text" placeholder="search..." />
        <BiSearch className="icon" />
      </div>

      <div className="tools">
        <AiOutlineUser className="icon" />
        <TbMessages className="icon" />
        <IoAnalytics className="icon" />

        <div className="divider"></div>

        <HiOutlineMoon className="icon"/>
        <RiSettingsLine className="icon" />
        <HiOutlineMoon className="icon" />

        <div className="divider"></div>
        <div className="user">
          <img
            src="data:image/jpeg;base64,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"
            alt=""
            className="profile-img"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
