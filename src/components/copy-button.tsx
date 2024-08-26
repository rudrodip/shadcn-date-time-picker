"use client";

import React, { useState } from "react";
import { CheckIcon, ClipboardCopyIcon, ClipboardIcon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";

export const CopyButton = ({ children, className, iconClassName }: { children: React.ReactNode, className?: string, iconClassName?: string }) => {
  const [isCopied, setIsCopied] = useState(false);

  const copy = async () => {
    const sourceCode = extractSourceCode(children);
    await navigator.clipboard.writeText(sourceCode);
    setIsCopied(true);

    setTimeout(() => {
      setIsCopied(false);
    }, 1000);
  };

  const extractSourceCode = (node: React.ReactNode): string => {
    if (typeof node === "string") {
      return node;
    }
    if (Array.isArray(node)) {
      return node.map(extractSourceCode).join("");
    }
    if (React.isValidElement(node)) {
      const { type, props } = node;
      const children = React.Children.map(props.children, extractSourceCode)?.join("");
      const propPairs = Object.entries(props)
        .map(([key, value]) => `${key}={${JSON.stringify(value)}}`)
        .join(" ");
      return `${children}`;
    }
    return "";
  };

  return (
    <button disabled={isCopied} onClick={copy} className={cn("border rounded p-1 border-border/30", className)}>
      {isCopied ? <CheckIcon className={iconClassName} /> : <ClipboardIcon className={iconClassName} />}
    </button>
  );
};