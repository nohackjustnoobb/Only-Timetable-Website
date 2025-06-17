"use client";
import React from "react";

export function CopyButton({ link }: { link: string }) {
  const [copied, setCopied] = React.useState(false);

  return (
    <button
      type="button"
      onClick={async () => {
        await navigator.clipboard.writeText(link);
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
      }}
      className={copied ? "outlinedButton" : "filledButton"}
    >
      {copied ? "Copied!" : "Copy Plugin Link"}
    </button>
  );
}
