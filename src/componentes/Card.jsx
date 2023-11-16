import { useContext, useEffect, useState } from 'react';
import ButtonStatus from './ButtonStatus';
import './stylecard.css';
import { AuthContext } from '../context/AuthContext';

function CardServices({operaciones, nombre_operacion, buttonstatus, status_operacion, tiempo_transcurrido, contar_tiempo}) {
  const {
    isloadingButton,
} = useContext(AuthContext)  
  
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


  /*   console.log(remainingTime) */

    return (
        <div className="card">
            <button className="mail">
            <span className="status-actual"><strong>ESTADO:</strong> {status_operacion}</span>
            </button>
            <div className="profile-pic">
                {
                    nombre_operacion == 'Mecanica' ? (<img src="https://i.imgur.com/OJ2ZKRz.png" />) :
                    nombre_operacion == 'Latoneria' ? (<img src="https://i.imgur.com/TnFoFnu.png" />) : 
                    nombre_operacion == 'Alistamiento Pintura' ? (<img src="https://th.bing.com/th/id/OIG.tD4k.vl9KIL3BhgzhjFB?pid=ImgGn&w=1024&h=1024&rs=1" />) :
                    nombre_operacion == 'Cabinado' ? (<img src="https://th.bing.com/th/id/OIG.w308XGeLh1xTZbvIw8wh?pid=ImgGn" />) :
                    nombre_operacion == 'Pintura Cabinado' ? (<img src="https://i.imgur.com/TnFoFnu.png" />) : 
                    nombre_operacion == 'Armado' ? (<img src="https://i.imgur.com/CqoHclK.png" />) : 
                    nombre_operacion == 'Embellecimiento' ? (<img src="https://i.imgur.com/LmiF5iE.png" />) : null
                }               
            </div>
            <div className="bottom">
                <div className="content">
                    {contar_tiempo == "true" ? (<span className="status-time"><strong>Tiempo Transcurrido:</strong> {remainingTime.slice(0, -7)}</span>) : null}
                    <span className="name" style={{ marginTop: contar_tiempo === "true" ? '15px' : '30px' }}>PRACTICA A REALIZAR</span>
                    <span className="about-me">{nombre_operacion}</span>
                </div>
                <div className="bottom-bottom">
                    <div className="social-links-container">
                    {!isloadingButton ? (
                      buttonstatus && buttonstatus.map((item) => (
                        <ButtonStatus key={item.id} orden={operaciones} id={item.id} status={item.status} nombre={item.nombre}/>
                      ))
                    ) : (
                      <svg
                        className="animate-spin h-5 w-5 rounded-full"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2.99988V5.99988M12 20.9999V17.9999M4.20577 16.4999L6.80385 14.9999M21 11.9999H18M16.5 19.7941L15 17.196M3 11.9999H6M7.5 4.20565L9 6.80373M7.5 19.7941L9 17.196M19.7942 16.4999L17.1962 14.9999M4.20577 7.49988L6.80385 8.99988" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    )}

                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardServices;



