'use client';

import React, { useEffect, useRef } from 'react';
import { motion, useAnimationControls } from 'framer-motion';

interface FlowingGradientTextProps {
  revealText: string;
  baseText: string;
}

export default function AnimatedGradientText({
  revealText,
  baseText,
}: FlowingGradientTextProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const gradientControls = useAnimationControls();

  useEffect(() => {
    const animateGradient = async () => {
      await gradientControls.start({
        backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
        transition: {
          duration: 10,
          ease: 'linear',
          repeat: Infinity,
        },
      });
    };

    animateGradient();
  }, [gradientControls]);

  return (
    <div
      ref={containerRef}
      className='relative h-screen w-full overflow-hidden bg-[#0f0f0f]'
    >
      <motion.div
        className='absolute inset-0 flex items-center justify-center bg-gradient-to-r from-transparent via-[#ec4e39] to-transparent bg-[length:200%_100%] text-black text-5xl leading-tight'
        animate={gradientControls}
        style={{
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}
      >
        <p className='w-full max-w-[1000px] p-10 text-center'>{revealText}</p>
      </motion.div>

      <div className='absolute inset-0 flex items-center justify-center text-[#afa18f] text-5xl leading-tight'>
        <p className='w-full max-w-[1000px] p-10 text-center'>
          {baseText.split(' ').map((word, index) => (
            <React.Fragment key={index}>
              {word === '<span>' ? (
                <span className='text-[#ec4e39]'>
                  {baseText.split('<span>')[1].split('</span>')[0]}
                </span>
              ) : word === '</span>' ? (
                ''
              ) : (
                `${word} `
              )}
            </React.Fragment>
          ))}
        </p>
      </div>
    </div>
  );
}
