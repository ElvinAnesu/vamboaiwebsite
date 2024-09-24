import React, { useState } from "react";
import MyContext from "./myContext";

const MyContextProvider = ({ children }) => {
  const [openMobileMenu,setOpenMobailmenu]=useState(false)
  const [openSubmenu, setOpenSubmenu] = useState(null);
  const toggleSubmenu = (index) => {
    setOpenSubmenu((prevIndex) => (prevIndex === index ? null : index));
};
  const toggleMobileMenu = () => {
    setOpenMobailmenu(!openMobileMenu);
};

  return (
    <MyContext.Provider value={{ openMobileMenu,setOpenMobailmenu,toggleMobileMenu,openSubmenu, setOpenSubmenu,toggleSubmenu }}>
      {children}
    </MyContext.Provider>
  );
};

export default MyContextProvider;
