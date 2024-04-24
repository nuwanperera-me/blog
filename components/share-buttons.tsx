"use client";

import { url } from "inspector";
import React from "react";
import {
  FacebookShareButton,
  FacebookShareCount,
} from "react-share";

interface Props {
  url: string;
  title: string;
}

const ShareButtons = (props: Props) => {
  const shareUrl = "https://example.com";
  const title = "Example Title";
  return (
    <div>
      <FacebookShareButton url={props.url} title={props.title} className="">
      <img src="https://cdn.hugeicons.com/icons/facebook-02-stroke-rounded.svg" className="bg-white " alt="facebook share button" width="24" height="24" />
      </FacebookShareButton>

      <div>
        <FacebookShareCount url={props.url} className="">
          {(count) => count}
        </FacebookShareCount>
      </div>
    </div>
  );
};


export default ShareButtons;
