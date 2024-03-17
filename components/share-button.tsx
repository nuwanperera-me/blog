"use client";

import { url } from "inspector";
import React from "react";
import {
  FacebookIcon,
  FacebookShareButton,
  FacebookShareCount,
  TwitterShareButton,
  XIcon,
} from "react-share";

interface Props {
  social: string;
  url: string;
  title: string;
}

const ShareButton = (props: Props) => {
  const shareUrl = "https://example.com";
  const title = "Example Title";
  if (props.social === "facebook") {
    return (
      <>

          <FacebookShareButton url={props.url} title={props.title} className="">
            <FacebookIcon size={32} round />
          </FacebookShareButton>

          <div>
            <FacebookShareCount url={props.url} className="">
              {(count) => count}
            </FacebookShareCount>
          </div>
      </>
    );
  }
  else if (props.social === "twitter") {
    return (
      <>
      <TwitterShareButton
          url={props.url}
          title={props.title}
          className="Demo__some-network__share-button"
        >
          <XIcon size={32} round />
        </TwitterShareButton></>
    );
  }
};

export default ShareButton;
