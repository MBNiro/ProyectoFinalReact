import React from 'react'
import valijas from "../assets/viaje-y-turismo.png"



const Welcome = () => {
  return (
    <>
    <div className="welcome">
          <img src={valijas} alt="picture" />
        </div>
        <div className="welcomeMessage animate__animated animate__fadeIn animate__slow">
          <p className="textP animate__animated animate__fadeIn animate__slower animate__delay-1s">
    Bienvenidos a Turismo Argentino! Podras encontrar paquetes con varios destinos..Vivi tu experiencia!
          </p>
    </div>
  </>
)
}


export default Welcome