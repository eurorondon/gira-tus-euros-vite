import React from "react";
import colors from "../colors";
import { whatsappButtonEvent } from "../../utils/facebookPixelEvents";

function InstruccionesEnvio() {
  const handleClick = () => {
    window.open("https://wa.me/message/2GZHD5NUAMOZC1", "_blank");
    whatsappButtonEvent();
  };
  return (
    <div className="mx-4 my-5" id="instrucciones">
      <h4 className="font-bold text-sm">¿Como hacer tus envios?</h4>
      <p className="text-xs">
        Sigue las intrucciones para el correcto envio a tus familiares en
        Venezuela.
      </p>

      <div className="grid gap-y-2 grid-cols-2 gap-x-2 mt-2 ">
        <img
          src={"/2.png"}
          alt="intruccion1"
          height={"200px"}
          width={"200px"}
        />
        <img
          src={"/3.png"}
          alt="intruccion1"
          height={"200px"}
          width={"200px"}
        />
        <img
          src={"/4.png"}
          alt="intruccion1"
          height={"200px"}
          width={"200px"}
        />
        <img
          src={"/5.png"}
          alt="intruccion1"
          height={"200px"}
          width={"200px"}
        />
      </div>

      {/* <div className="grid grid-cols-2 mx-5 ">
        <Image
          src={"/instruccion1.png"}
          alt="intruccion1"
          height={150}
          width={150}
        />
        <Image
          src={"/instruccion2.png"}
          alt="intruccion1"
          height={150}
          width={150}
        />
        <Image
          src={"/instruccion3.png"}
          alt="intruccion1"
          height={150}
          width={150}
        />
        <Image
          src={"/instruccion4.png"}
          alt="intruccion1"
          height={150}
          width={150}
        />
      </div> */}
      <div className="flex justify-center ">
        <button
          className="flex items-center gap-3 hover:bg-blue-700 text-white font-bold py-4 px-4 rounded mt-3"
          style={{ backgroundColor: colors.primary }}
          onClick={handleClick}
        >
          <p className="text-xs">CONTACTANOS AHORA </p>
        </button>
      </div>
    </div>
  );
}

export default InstruccionesEnvio;
