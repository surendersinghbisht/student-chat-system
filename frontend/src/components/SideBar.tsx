import React, { memo, useState } from "react";
import { FaFire } from "react-icons/fa";
import { BsFillLightningFill, BsPlus } from "react-icons/bs";
import { RiSettings3Fill } from "react-icons/ri";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { axiosInstance } from "../../api/api";



const SidebarIcon = ({ icon, text = "tooltip" }) => (
  <div className="sidebar-icon group">
    {icon}
    <span className="sidebar-tooltip group-hover:scale-100">
      {text}
    </span>
  </div>
);

const SidebarLine = () => (
  <div className="h-0.5 w-12 bg-gray-800 mx-auto rounded-full"></div>
);


const SideBar = ({setSharedData}) => {

// const {data: authUser} = useQuery({queryKey: ["authUser"]})

// const {mutate} = useMutation({
//   mutationFn: async()=> {
//     await axiosInstance.post("/group/create-group",{})
//   }
// })

const addNewGroup = () => {

}

const friendsSection =()=>{
  setSharedData((prevState) => ({
    ...prevState,
    directMessage: true,
  }));
}

  return (
    <div className="z-10 fixed top-0 left-0 h-screen w-16 flex flex-col bg-gray-900 text-white shadow-lg">

        <button onClick={friendsSection}><SidebarIcon icon={<FaFire size="28" />} text="Direct Message" /></button>
       
      <SidebarLine />
      <button onClick={addNewGroup}><SidebarIcon icon={<BsPlus size="28" />} text="Add a new Server" /></button>
      
      <SidebarIcon icon={<BsFillLightningFill size="28" />} text="Upgrade to Pro" />
      {/* <SidebarIcon icon={<FaPoo size="28" />} text="Poop Time ?" /> */}
      <SidebarLine />
      <SidebarIcon icon={<RiSettings3Fill size="28" />} text="Settings" />
    </div>
  );
};

export default memo(SideBar);
