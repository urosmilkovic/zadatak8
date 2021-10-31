import React from "react";
import backgroundSource from "../assets/images/wallpaper.jpg";
import "./style.scss";

const Layout = ({ children }) => {
  return (
    <div className="tc-layout-main">
      <div className="tc-layout-background">
        <img src={backgroundSource} alt="Wallpaper" />
      </div>
      <div className="tc-layout-content">{children}</div>
    </div>
  );
};

export default Layout;
