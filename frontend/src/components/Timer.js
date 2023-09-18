import { useEffect, useState } from "react";

function Timer() {
  const [start] = useState(Date.now());
  const [now, setNow] = useState(start);
  const counter = now - start;

  const hour = Math.floor(counter / (1000 * 60 * 60 * 24)),
    min = Math.floor((counter / (1000 * 60)) % 60),
    sec = Math.floor((counter / 1000) % 60),
    mlSec = parseInt(counter % 1000);

  useEffect(() => {
    const intervalID = setInterval(() => setNow(Date.now()), 1);
    return () => clearInterval(intervalID);
  }, []);

  return (
    <div>
      {hour} : {min} : {sec} : {mlSec}
      {counter > 500 && <p>Server response delay exceeds 500 ms!</p>}
    </div>
  );
}

export default Timer;
