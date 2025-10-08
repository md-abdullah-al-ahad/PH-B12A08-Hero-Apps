import React, { useState } from "react";
import { Outlet } from "react-router";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Root = () => {
  const [installedApps, setInstalledApps] = useState([]);

  const handleInstallApp = (appId) => {
    if (!installedApps.includes(appId)) {
      setInstalledApps([...installedApps, appId]);
      toast.success("App installed successfully", { position: "top-right" });
    }
  };

  const handleUninstallApp = (appId) => {
    setInstalledApps(installedApps.filter((id) => id !== appId));
    toast.info("App uninstalled", { position: "top-right" });
  };

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
