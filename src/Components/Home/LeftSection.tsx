import React from "react";
import { ILeftSidebarProps } from "../../interfaces";

const LeftSectionComponent: React.FC<ILeftSidebarProps> = (
  props: ILeftSidebarProps
): JSX.Element => {
  return <>
  <div className="left-section ">
    <img src="/assets/image/banner.png"  alt="banner" className="banner-img" />
  </div>
  </>;
};

export default LeftSectionComponent;
