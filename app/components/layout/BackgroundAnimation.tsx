'use client';

import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const BackgroundGradientAnimation = ({
  gradientBackgroundStart = 'rgb(108, 0, 162)',
  gradientBackgroundEnd = 'rgb(0, 17, 82)',
  firstColor = '18, 113, 255',
  secondColor = '221, 74, 255',
  thirdColor = '100, 220, 255',
  fourthColor = '200, 50, 50',
  fifthColor = '180, 180, 50',
  size = '100%',
  blendingValue = 'hard-light',
  children,
  className,
  containerClassName,
}: {
  gradientBackgroundStart?: string;
  gradientBackgroundEnd?: string;
  firstColor?: string;
  secondColor?: string;
  thirdColor?: string;
  fourthColor?: string;
  fifthColor?: string;
  size?: string;
  blendingValue?: string;
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
}) => {
  const [isSafari, setIsSafari] = useState(false);

  useEffect(() => {
    setIsSafari(/^((?!chrome|android).)*safari/i.test(navigator.userAgent));
    document.body.style.setProperty(
      '--gradient-background-start',
      gradientBackgroundStart
    );
    document.body.style.setProperty(
      '--gradient-background-end',
      gradientBackgroundEnd
    );
    document.body.style.setProperty('--first-color', firstColor);
    document.body.style.setProperty('--second-color', secondColor);
    document.body.style.setProperty('--third-color', thirdColor);
    document.body.style.setProperty('--fourth-color', fourthColor);
    document.body.style.setProperty('--fifth-color', fifthColor);
    document.body.style.setProperty('--size', size);
    document.body.style.setProperty('--blending-value', blendingValue);
  }, []);

  return (
    <div
      className={cn(
        'relative w-full h-full overflow-hidden',
        containerClassName
      )}
    >
      <svg className='hidden'>
        <defs>
          <filter id='blurMe'>
            <feGaussianBlur
              in='SourceGraphic'
              stdDeviation='10'
              result='blur'
            />
            <feColorMatrix
              in='blur'
              mode='matrix'
              values='1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8'
              result='goo'
            />
            <feBlend in='SourceGraphic' in2='goo' />
          </filter>
        </defs>
      </svg>
      <div className={cn('relative z-10', className)}>{children}</div>
      <div
        className={cn(
          'absolute inset-0 gradients-container blur-lg',
          isSafari ? 'blur-2xl' : '[filter:url(#blurMe)_blur(40px)]'
        )}
      >
        <motion.div
          className={cn(
            `absolute [background:radial-gradient(circle_at_center,_var(--first-color)_0,_var(--first-color)_50%)_no-repeat]`,
            `[mix-blend-mode:var(--blending-value)] w-[var(--size)] h-[var(--size)] top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)]`,
            `[transform-origin:center_center] opacity-100`
          )}
          animate={{
            scale: [1, 1.2, 1],
            x: ['-50%', '50%', '-50%'],
            y: ['-50%', '50%', '-50%'],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className={cn(
            `absolute [background:radial-gradient(circle_at_center,_rgba(var(--second-color),_0.8)_0,_rgba(var(--second-color),_0)_50%)_no-repeat]`,
            `[mix-blend-mode:var(--blending-value)] w-[var(--size)] h-[var(--size)] top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)]`,
            `[transform-origin:calc(50%-400px)] opacity-100`
          )}
          animate={{
            scale: [1, 1.3, 1],
            x: ['50%', '-50%', '50%'],
            y: ['50%', '-50%', '50%'],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className={cn(
            `absolute [background:radial-gradient(circle_at_center,_rgba(var(--third-color),_0.8)_0,_rgba(var(--third-color),_0)_50%)_no-repeat]`,
            `[mix-blend-mode:var(--blending-value)] w-[var(--size)] h-[var(--size)] top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)]`,
            `[transform-origin:calc(50%+400px)] opacity-100`
          )}
          animate={{
            scale: [1, 1.4, 1],
            x: ['-50%', '50%', '-50%'],
            y: ['50%', '-50%', '50%'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className={cn(
            `absolute [background:radial-gradient(circle_at_center,_rgba(var(--fourth-color),_0.8)_0,_rgba(var(--fourth-color),_0)_50%)_no-repeat]`,
            `[mix-blend-mode:var(--blending-value)] w-[var(--size)] h-[var(--size)] top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)]`,
            `[transform-origin:calc(50%-200px)] opacity-70`
          )}
          animate={{
            scale: [1, 1.3, 1],
            x: ['50%', '-50%', '50%'],
            y: ['-50%', '50%', '-50%'],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className={cn(
            `absolute [background:radial-gradient(circle_at_center,_rgba(var(--fifth-color),_0.8)_0,_rgba(var(--fifth-color),_0)_50%)_no-repeat]`,
            `[mix-blend-mode:var(--blending-value)] w-[var(--size)] h-[var(--size)] top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)]`,
            `[transform-origin:calc(50%-800px)_calc(50%+800px)] opacity-100`
          )}
          animate={{
            scale: [1, 1.2, 1],
            x: ['-50%', '50%', '-50%'],
            y: ['50%', '-50%', '50%'],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>
      <div className='absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent' />
    </div>
  );
};
