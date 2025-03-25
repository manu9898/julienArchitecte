"use client";

import React from "react";

type VideoProps = {
  src: string;
  alt: string;
};

const VideoComponent: React.FC<VideoProps> = ({ src, alt }) => {
  return (
    <video controls width="800" height="600">
      <source src={src} type="video/mp4" />
      {alt}
    </video>
  );
};

export default VideoComponent;
