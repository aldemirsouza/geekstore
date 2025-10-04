"use client";

import React, { useState, useEffect } from 'react';

interface CountdownShelfProps {
  targetDateString: string;
  title: string;
  description: string;
}

interface TimeLeft {
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
}

const unitTranslations = {
  days: 'DIAS',
  hours: 'HORAS',
  minutes: 'MIN',
  seconds: 'SEG',
};

const calculateTimeLeft = (targetDateString: string): TimeLeft | null => {
  const targetDate = new Date(targetDateString);
  const difference = +targetDate - +new Date();
  let timeLeft: TimeLeft | null = null;

  if (difference > 0) {
    timeLeft = {
      days: String(Math.floor(difference / (1000 * 60 * 60 * 24))).padStart(2, '0'),
      hours: String(Math.floor((difference / (1000 * 60 * 60)) % 24)).padStart(2, '0'),
      minutes: String(Math.floor((difference / 1000 / 60) % 60)).padStart(2, '0'),
      seconds: String(Math.floor((difference / 1000) % 60)).padStart(2, '0'),
    };
  }

  return timeLeft;
};

export function CountdownShelf({ targetDateString, title, description }: CountdownShelfProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(
    calculateTimeLeft(targetDateString)
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetDateString));
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDateString]);

  return (
    <section className="pt-8">
      <div className="max-w-[1055px] mx-auto px-2 sm:px-0">

        <div className="flex flex-col sm:flex-row justify-between items-center mb-2 p-4 bg-gray-50 border-l-4 border-secondary rounded-lg shadow-sm">
          <div className="text-center sm:text-left mb-4 sm:mb-0">
            <h2 className="text-3xl font-extrabold text-primary sm:text-3xl">
              {title}
            </h2>
            <p className="text-md text-gray-600 mt-1">
              {description}
            </p>
          </div>

          <div className="flex gap-4 items-center justify-center">
            {Object.entries(timeLeft!).map(([unit, value], index) => (
              <React.Fragment key={unit}>

                <div className="flex flex-col items-center">
                  <span className="text-3xl font-bold text-red-500">{String(value)}</span>
                  <span className="text-xs font-medium text-gray-600 uppercase">
                    {unitTranslations[unit as keyof typeof unitTranslations]}
                  </span>
                </div>

                {index < Object.keys(timeLeft!).length - 1 && (
                  <span className="text-2xl font-bold text-black">:</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}