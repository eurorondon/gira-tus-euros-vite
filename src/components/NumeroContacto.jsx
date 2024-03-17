import React from "react";
import colors from "../colors";

function NumeroContacto() {
  return (
    <>
      <div
        className="text-white mx-4 my-5 p-4 rounded-lg"
        style={{ backgroundColor: colors.dark }}
        id="contacto"
      >
        <h4 className="font-semibold text-xs">Unicos numero de contacto</h4>
        <div className="my-3">
          <p className="font-extrabold text-xs">
            +34 613 41 16 89 / +507 6524 67 47
          </p>
          <p className="font-extralight text-xs text-gray-300">
            Cualquier otro números de contacto es falso.
          </p>
        </div>
        <button
          className="text-xs py-1 px-2 border border-yellow-400 rounded-lg font-extralight"
          onClick={() => {
            window.open("https://wa.me/message/2GZHD5NUAMOZC1", "_blank");
          }}
        >
          Escribenos aqui
        </button>
      </div>
      <div className="mx-4 my-4 rounded-lg">
        <img
          src={"/gt2.png"}
          alt="gt"
          width={"400px"}
          height={"400px"}
          className="rounded-lg"
        />
      </div>
    </>
  );
}

export default NumeroContacto;
