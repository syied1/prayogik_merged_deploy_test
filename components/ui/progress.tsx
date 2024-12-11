"use client";

import NextNProgress from "nextjs-progressbar";

const ProgressBar = () => {
  return (
    <NextNProgress
      color="#8956FF"
      startPosition={0.3}
      stopDelayMs={200}
      height={3}
      options={{ showSpinner: false }}
    />
  );
};

export default ProgressBar;
