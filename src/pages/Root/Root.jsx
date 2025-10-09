import React, { useState, useEffect } from "react";
import { Outlet } from "react-router";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import { ToastContainer, toast } from "react-toastify";
import {
  addToStoredInstalled,
  getStoredInstalled,
  removeFromStoredInstalled,
} from "../../utils/storage";

const Root = () => {
  const [installedApps, setInstalledApps] = useState(() =>
    getStoredInstalled()
  );
  const handleInstallApp = (appId) => {
    if (!installedApps.includes(appId)) {
      addToStoredInstalled(appId);
      setInstalledApps((prev) => [...prev, appId]);
      toast.success("App installed successfully", { position: "top-right" });
    }
  };
  const handleUninstallApp = (appId) => {
    const newData = removeFromStoredInstalled(appId);
    setInstalledApps(newData);
    toast.info("App uninstalled", { position: "top-right" });
  };
  useEffect(() => {
    setInstalledApps(getStoredInstalled());
  }, []);

  return (
    <div className="">
      <Navbar></Navbar>
      <Outlet
        context={{ installedApps, handleInstallApp, handleUninstallApp }}
      />
      <ToastContainer />
      <Footer></Footer>
    </div>
  );
};

export default Root;
