import React, { useState, useEffect } from "react";

export const Seconds = () => {
  //establecer 3 estados normales

  const [time, setTime] = useState(0);
  const [startTimer, setStartTimer] = useState(false);
  const [timerId, setTimerId] = useState(0);

  useEffect(() => {
    //Iniciamos la variable como nulo
    let intervalId = null;

    //validamos si startTimer es falso
    if (startTimer) {
      //la variable almacena el estado e incrementa el valor(modificando el estado) mediante cada 1 segundo, mediante setInterval
      intervalId = setInterval(() => {
        setTime((prev) => prev + 1);
      }, 1000);
      setTimerId(intervalId); //al siguiente estado se le va agregando lo que contenga la variable
    } else {
      clearInterval(timerId); //en caso de que no se siga sumando numeros se limpia
    }
  }, [startTimer]);

  const resetear = () => {
    setTime(0);
  };

  return (
    <>
      <div>Seconds: {time}</div>
      <button onClick={() => setStartTimer(true)}>Play</button>
      <button onClick={() => setStartTimer()}>Stop</button>
      <button onClick={resetear}>Reset</button>
    </>
  );
};
