"use client";

import { LazyMotion } from "motion/react";
import { ReactNode } from "react";

const domAnimation = () => import("motion/react").then((res) => res.domAnimation);

export function MotionProvider({ children }: { children: ReactNode }) {
  return (
    <LazyMotion features={domAnimation} strict>
      {children}
    </LazyMotion>
  );
}
