import React from 'react';

interface Props {
  rating: number; 
}

const Rating = ({ rating }: Props) => {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => {
        const full = i + 1 <= Math.floor(rating);
        const half = !full && i < rating;
        return (
          <span key={i}>
            {full ? (
              // ফুল স্টার
              <svg width="24" height="24" fill="#fa8900" viewBox="0 0 24 24">
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
              </svg>
            ) : half ? (
              // হাফ স্টার
              <svg width="24" height="24" viewBox="0 0 24 24">
                <defs>
                  <linearGradient id={`half${i}`}>
                    <stop offset="50%" stopColor="#fa8900" />
                    <stop offset="50%" stopColor="#f7ca00" />
                  </linearGradient>
                </defs>
                <path
                  d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                  fill={`url(#half${i})`}
                />
              </svg>
            ) : (
              // এম্পটি স্টার
              <svg width="24" height="24" fill="#262622" viewBox="0 0 24 24">
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" fillOpacity="0.3"/>
              </svg>
            )}
          </span>
        );
      })}
    </div>
  );
};

export default Rating;