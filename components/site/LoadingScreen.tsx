"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export function LoadingScreen() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setVisible(false), 1450);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          className="fixed inset-0 z-[100] grid place-items-center overflow-hidden bg-[#020617]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.55 } }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_34%,rgba(37,99,235,0.35),transparent_38%),linear-gradient(180deg,#020617,#061326)]" />
          <motion.div
            className="relative w-[min(430px,84vw)]"
            initial={{ opacity: 0, scale: 0.94, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <Image src="/media/brand/loading-screen.png" alt="Hamroh Cargo loading" width={720} height={960} priority className="h-auto w-full image-mask-fade" />
            <div className="absolute bottom-10 left-1/2 h-2 w-64 max-w-[70vw] -translate-x-1/2 overflow-hidden rounded-full border border-sky-300/40 bg-slate-950/70">
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-sky-500 via-cyan-300 to-blue-600 shadow-[0_0_24px_rgba(56,189,248,0.9)]"
                initial={{ width: "12%" }}
                animate={{ width: "92%" }}
                transition={{ duration: 1.25, ease: "easeInOut" }}
              />
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
