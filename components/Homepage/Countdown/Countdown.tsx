'use client';
import { useEffect, useState } from "react";

const Countdown = () => {
  const [liveDate, setLiveDate] = useState(false);
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const target = new Date("10/25/2024 10:00:00");

    const interval = setInterval(() => {
      const now = new Date();
      const difference = target.getTime() - now.getTime();

      const d = Math.floor(difference / (1000 * 60 * 60 * 24));
      setDays(d);

      const h = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      setHours(h);

      const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      setMinutes(m);

      const s = Math.floor((difference % (1000 * 60)) / 1000);
      setSeconds(s);

      if (d <= 0 && h <= 0 && m <= 0 && s <= 0) {
        setLiveDate(true);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="overflow-visible md:w-[510px] md:h-[110px] sm:w-[312px] sm:h-[70px]">
      {liveDate ? (
        <div>&nbsp;</div>
      ) : (
        <div className="flex justify-center">
        <div className="relative pr-6 last:pr-0">
            <div className="text-center">
              <span className="block h-[30px] leading-[30px] text-gray-200">Days</span>
            </div>
            <div className="relative font-semibold w-[60px] h-[80px] rounded-xl text-4xl flex items-center justify-center text-gray-800 bg-gray-300">
              {days}
            </div>
          </div>

          {/* Hours */}
          <div className="relative pr-6 last:pr-0">
            <div className="text-center">
              <span className="block h-[30px] leading-[30px] text-gray-200">Hours</span>
            </div>
            <div className="relative font-semibold w-[60px] h-[80px] rounded-xl text-4xl flex items-center justify-center text-gray-800 bg-gray-300">
              {hours}
            </div>
          </div>

          {/* Minutes */}
          <div className="relative pr-6 last:pr-0">
            <div className="text-center">
              <span className="block h-[30px] leading-[30px] text-gray-200">Minutes</span>
            </div>
            <div className="relative font-semibold w-[60px] h-[80px] rounded-xl text-4xl flex items-center justify-center text-gray-800 bg-gray-300">
              {minutes}
            </div>
          </div>

          {/* Seconds */}
          <div className="relative pr-6 last:pr-0">
            <div className="text-center">
              <span className="block h-[30px] leading-[30px] text-gray-200">Seconds</span>
            </div>
            <div className="relative font-semibold w-[60px] h-[80px] rounded-xl text-4xl flex items-center justify-center text-gray-800 bg-gray-300">
              {seconds}
            </div>
          </div>
          </div>
      )}
    </div>
  );
};

export default Countdown