"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export function SafariRefresher() {
  const router = useRouter();

  useEffect(() => {
    const ua = navigator.userAgent;
    const isSafari = /^((?!chrome|android).)*safari/i.test(ua);
    const isIOS = /iPad|iPhone|iPod/.test(ua);

    if (isSafari || isIOS) {
      router.refresh();
    }
  }, [router]);

  return null;
}
