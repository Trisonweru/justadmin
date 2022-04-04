import React from "react";
import "./Navbar.scss";
import {
  ChatBubbleOutlineOutlinedIcon,
  DarkModeOutlinedIcon,
  FullscreenExitOutlinedIcon,
  LanguageOutlinedIcon,
  ListOutlinedIcon,
  NotificationsNoneIcon,
  SearchOutlinedIcon,
} from "../icons";

function Navbar() {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search..." />
          <SearchOutlinedIcon className="icon" />
        </div>
        <div className="items">
          <div className="item">
            <LanguageOutlinedIcon className="icon" />
            English
          </div>
          <div className="item">
            <DarkModeOutlinedIcon className="icon" />
          </div>
          <div className="item">
            <FullscreenExitOutlinedIcon />
          </div>
          <div className="item">
            <NotificationsNoneIcon className="icon" />
            <div className="counter">2</div>
          </div>
          <div className="item">
            <ChatBubbleOutlineOutlinedIcon className="icon" />
            <div className="counter">3</div>
          </div>
          <div className="item">
            <ListOutlinedIcon className="icon" />
          </div>
          <div className="item">
            <img
              src="https://avatars.githubusercontent.com/u/34444123?v=4"
              alt="avatar"
              className="avatar"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
