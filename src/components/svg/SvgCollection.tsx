import React from 'react';
import * as tailwindConfig from '../../../tailwind.config';

export const curvedSvgBorder = (type?: 'top' | 'bottom') => {
  return (
    <svg
      viewBox="0 0 500 85"
      preserveAspectRatio="none"
      height="100%"
      width="100%"
      fill={tailwindConfig.theme.colors.customBgContrast}
    >
      <path
        d={
          type == 'top'
            ? 'M0.00,49.98 C149.99,150.00 271.49,-49.98 500.00,49.98 L500.00,0.00 L0.00,0.00 Z'
            : 'M0.00,49.98 C149.99,150.00 422.40,-23.19 529.06,99.17 L548.81,207.72 L0.00,150.00 Z'
        }
      ></path>
    </svg>
  );
};

export const zigZagSvgBorder = (type?: 'top' | 'bottom') => {
  return (
    <svg
      viewBox="0 0 500 13"
      preserveAspectRatio="none"
      height="100%"
      width="100%"
      transform={
        type === 'top' ? 'translate(-15 -2) rotate(180)' : 'translate(-15 2)'
      }
      fill={tailwindConfig.theme.colors.customBgContrast}
    >
      <polyline points="0.7,13.7 13.4,0.8 25.3,12.8 37.2,0.8 49,12.8 60.9,0.8 72.8,12.8 84.7,0.8 96.6,12.8 108.4,0.8 120.3,12.8 132.2,0.8 144,12.8 155.9,0.8 167.7,12.8 179.8,0.7 191.7,12.8 203.6,0.8 215.4,12.8 227.3,0.8 239.2,12.8 251.1,0.8 262.9,12.8 274.8,0.8 286.7,12.8 298.6,0.8 310.4,12.8 322.9,0.8 334.8,12.8 346.7,0.8 358.6,12.8 370.4,0.8 382.9,12.8 394.8,0.8 406.7,12.8 418.6,0.8 430.4,12.8 442.9,0.8 456.8,12.8 468.7,0.8 480.6,12.8 492.4,0.8 504.9,12.8 516.8,0.8 528.7,12.8 540.6,0.8 552.4,12.8 564.9,0.8 576.8,12.8 588.7,0.8 600.6,12.8"></polyline>
    </svg>
  );
};
