import { FC, memo, useState } from "react";
import { Outlet } from "react-router-dom";
import SideBar from "../components/SideBar";
import Navbar from "../components/NavBar";

type LandingPageProps = {};

const LandingPage: FC<LandingPageProps> = (props) => {
  interface SharedDataState {
    directMessage: boolean;
    groups: boolean; // Assuming 'group' is the intended property
  }
  
  const[sharedData, setSharedData] = useState<SharedDataState>({
    directMessage: false,
    groups: false
  })
  return <div className="flex">
    <SideBar setSharedData={setSharedData} />
    <Navbar sharedData={sharedData} />

    <Outlet />
  </div>
};

LandingPage.defaultProps = {};

export default memo(LandingPage);