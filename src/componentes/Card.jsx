import { useEffect, useState } from 'react';
import ButtonStatus from './ButtonStatus';
import './stylecard.css';

function CardServices({operaciones, nombre_operacion, buttonstatus, status_operacion, tiempo_transcurrido, contar_tiempo}) {
    const [remainingTime, setRemainingTime] = useState(tiempo_transcurrido);

    useEffect(() => {
      const intervalId = setInterval(() => {
        setRemainingTime((prevTime) => incrementTime(prevTime));
      }, 1000); // Actualiza cada segundo
  
      return () => clearInterval(intervalId);
    }, []);
  
    const incrementTime = (timeString) => {
        const regex = /(\d+ days )?(\d{2}):(\d{2}):(\d{2}).(\d{6})/;
        const match = regex.exec(timeString);
      
        if (match) {
          const days = match[1] ? parseInt(match[1], 10) : 0;
          const hours = parseInt(match[2], 10);
          const minutes = parseInt(match[3], 10);
          const seconds = parseInt(match[4], 10);
          const milliseconds = parseInt(match[5], 10);
      
          const totalMilliseconds = days * 24 * 60 * 60 * 1000 +
            hours * 60 * 60 * 1000 +
            minutes * 60 * 1000 +
            seconds * 1000 +
            milliseconds;
      
          const newTime = new Date(totalMilliseconds + 1000);
      
          const newTimeString = `${
            newTime.getUTCDate() > 1 ? newTime.getUTCDate() - 1 + ' days ' : ''
          }${newTime.getUTCHours().toString().padStart(2, '0')}:${newTime.getUTCMinutes().toString().padStart(2, '0')}:${newTime.getUTCSeconds().toString().padStart(2, '0')}.${newTime.getUTCMilliseconds().toString().padStart(6, '0')}`;
      
          return newTimeString;
        }
      
        return timeString;
    };


    console.log(remainingTime)

    return (
        <div className="card">
            <button className="mail">
                <span>Orden. {operaciones}</span>
            </button>
            <div className="profile-pic">
                {
                    nombre_operacion == 'Mecanica' ? (<img src="https://i.imgur.com/OJ2ZKRz.png" />) :
                    nombre_operacion == 'Latoneria' ? (<img src="https://i.imgur.com/TnFoFnu.png" />) : 
                    nombre_operacion == 'Pintura Alistamiento' ? (<img src="https://i.imgur.com/TnFoFnu.png" />) :
                    nombre_operacion == 'Pintura Cabinado' ? (<img src="https://i.imgur.com/TnFoFnu.png" />) : 
                    nombre_operacion == 'Armado' ? (<img src="https://i.imgur.com/CqoHclK.png" />) : 
                    nombre_operacion == 'Embellecimiento' ? (<img src="https://i.imgur.com/LmiF5iE.png" />) : null
                }               
            </div>
            <div className="bottom">
                <div className="content">
                    <span className="status-actual"><strong>ESTADO:</strong> {status_operacion}</span>
                    {contar_tiempo == "true" ? (<span className="status-time"><strong>Tiempo Transcurrido:</strong> {remainingTime.slice(0, -7)}</span>) : null}
                    <span className="name" style={{ marginTop: contar_tiempo === "true" ? '2px' : '40px' }}>PRACTICA A REALIZAR</span>
                    <span className="about-me">{nombre_operacion}</span>
                </div>
                <div className="bottom-bottom">
                    <div className="social-links-container">
                        {buttonstatus && buttonstatus.map((item) => (
                            <ButtonStatus key={item.id} orden={operaciones} id={item.id} status={item.status} nombre={item.nombre}/>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardServices;



