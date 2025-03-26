

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";


export const DragCards = () => {
    return (
      <section className="relative scale-50 md:scale-75 w-[60%] min-h-[40vh] mx-auto grid place-content-center overflow-hidden bg-neutral-950">
        
        <h2 className="relative z-0 text-[8vw] font-black text-neutral-800 md:text-[100px]">
          ASTRO<span className="text-indigo-500">.</span>
        </h2>
        <Cards />
      </section>
    );
  };
  
  const Cards = () => {
    const containerRef = useRef(null);
  
    return (
      <div className="absolute inset-0 z-10 w-[80%] h-[80%] mx-auto" ref={containerRef}>
        <Card 
          containerRef={containerRef}
          src="https://images.unsplash.com/photo-1635373670332-43ea883bb081?q=80&w=2781&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Example image"
          rotate="6deg"
          top="10%"
          left="15%"
          className="w-10 md:w-14 "
        />
       
       
      </div>
    );
  };
  
  const Card = ({ containerRef, src, alt, top, left, rotate, className }) => {
    const [zIndex, setZIndex] = useState(0);
  
    const updateZIndex = () => {
      const els = document.querySelectorAll(".drag-elements");
  
      let maxZIndex = -Infinity;
  
      els.forEach((el) => {
        let zIndex = parseInt(
          window.getComputedStyle(el).getPropertyValue("z-index")
        );
  
        if (!isNaN(zIndex) && zIndex > maxZIndex) {
          maxZIndex = zIndex;
        }
      });
  
      setZIndex(maxZIndex + 1);
    };
  
    return (
      <motion.img
        onMouseDown={updateZIndex}
        style={{
          top,
          left,
          rotate,
          zIndex,
        }}
        className={twMerge(
          "drag-elements absolute w-48 bg-neutral-200 p-1 pb-4",
          className
        )}
        src={src}
        alt={alt}
        drag
        dragConstraints={containerRef}
        // Uncomment below and remove dragElastic to remove movement after release
        //   dragMomentum={false}
        dragElastic={0.65}
      />
    );
  };