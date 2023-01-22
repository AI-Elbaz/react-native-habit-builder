import {useEffect, useRef, useState} from 'react';
import dayjs from 'dayjs';

const useCounter = startTime => {
  const [counter, setCounter] = useState(getDuration());
  const interval = useRef(null);

  function getDuration(start) {
    const diff = dayjs().diff(dayjs(start));
    const duration = dayjs.duration(diff);
    return {
      days: duration.days(),
      details: {
        hours: duration.hours().toString().padStart(2, 0),
        minutes: duration.minutes().toString().padStart(2, 0),
        seconds: duration.seconds().toString().padStart(2, 0),
      },
    };
  }

  useEffect(() => {
    clearInterval(interval.current);
    interval.current = setInterval(() => {
      setCounter(getDuration(startTime));
    }, 1000);
    return () => clearInterval(interval.current);
  }, [startTime]);

  return counter;
};

export default useCounter;
