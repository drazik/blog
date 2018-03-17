import React from "react";
import TopBarProgress from "react-topbar-progress-indicator";

TopBarProgress.config({
  barColors: {
    "0": "#000",
    "1": "#000"
  },
  shadowBlur: 0
});

export const Loading = () => <TopBarProgress />;
