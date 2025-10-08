import React, { useState } from "react";
import { Outlet } from "react-router";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";

const Root = () => {
  const [installedApps, setInstalledApps] = useState([]);

  const handleInstallApp = (appId) => {
    if (!installedApps.includes(appId)) {
      setInstalledApps([...installedApps, appId]);
    }
  };

  const handleUninstallApp = (appId) => {
    setInstalledApps(installedApps.filter((id) => id !== appId));
  };

  return (
    <div className="">
      <Navbar></Navbar>
      <Outlet context={{ installedApps, handleInstallApp, handleUninstallApp }} />
      <Footer></Footer>
    </div>
  );
};

export default Root;
