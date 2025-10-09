import React, { useState, useEffect } from "react";
import { Outlet, useNavigation } from "react-router";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import LoadingSpinner from "../../Components/LoadingSpinner/LoadingSpinner";
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

  const navigation = useNavigation();

  return (
    <div className="">
      <Navbar />
      <div className="relative min-h-screen">
        <div
          className={`transition-all duration-300 ease-in-out ${
            navigation.state === "loading"
              ? "opacity-40 blur-[1px]"
              : "opacity-100"
          }`}
        >
          <Outlet
            context={{ installedApps, handleInstallApp, handleUninstallApp }}
          />
        </div>
        <div
          className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
            navigation.state === "loading"
              ? "opacity-100"
              : "opacity-0 pointer-events-none"
          }`}
        >
          <LoadingSpinner />
        </div>
      </div>
      <ToastContainer />
      <Footer />
    </div>
  );
};

export default Root;
