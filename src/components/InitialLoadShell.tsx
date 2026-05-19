"use client";

import React, { useState } from "react";
import LoadingScreen from "./LoadingScreen";
import Taskbar from "./Taskbar";

type InitialLoadShellProps = {
  children: React.ReactNode;
};

let hasShownInitialLoader = false;

const InitialLoadShell = ({ children }: InitialLoadShellProps) => {
  const [loading, setLoading] = useState(!hasShownInitialLoader);

  const handleLoadingFinish = () => {
    hasShownInitialLoader = true;
    setLoading(false);
  };

  return (
    <div className="bg-[#080808]">
      {loading && <LoadingScreen onFinish={handleLoadingFinish} />}
      {children}
      {!loading && <Taskbar />}
    </div>
  );
};

export default InitialLoadShell;
