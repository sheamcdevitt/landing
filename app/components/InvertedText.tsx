'use client';

import React, { useRef, useEffect } from 'react';

export const InvertedText: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const textRef = useRef<SVGTextElement>(null);
  const [dimensions, setDimensions] = React.useState({ width: 0, height: 0 });

  useEffect(() => {
    if (textRef.current) {
      const bbox = textRef.current.getBBox();
      setDimensions({ width: bbox.width, height: bbox.height });
    }
  }, [children]);

  return (
    <svg
      width={dimensions.width}
      height={dimensions.height}
      style={{ overflow: 'visible' }}
    >
      <defs>
        <mask id='textMask'>
          <rect width='100%' height='100%' fill='white' />
          <text
            ref={textRef}
            x='50%'
            y='50%'
            dominantBaseline='middle'
            textAnchor='middle'
            fill='black'
            className='text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl'
          >
            {children}
          </text>
        </mask>
      </defs>
      <rect
        width='100%'
        height='100%'
        fill='currentColor'
        mask='url(#textMask)'
      />
      <text
        x='50%'
        y='50%'
        dominantBaseline='middle'
        textAnchor='middle'
        fill='currentColor'
        className='text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl'
      >
        {children}
      </text>
    </svg>
  );
};
