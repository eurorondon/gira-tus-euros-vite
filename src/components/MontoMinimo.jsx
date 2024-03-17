import React from "react";
import colors from "../colors";

import { HiOutlineCash } from "react-icons/hi";

function MontoMinimo() {
  return (
    <>
      <div className="flex justify-center mt-16">
        <button
          className="flex items-center gap-3 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          style={{ backgroundColor: colors.primary }}
        >
          <span>Monto minimo de envio </span>
          <HiOutlineCash size={28} />
        </button>
      </div>

      <div className="flex justify-center my-5 gap-3">
        <img
          src={"/card.png"}
          alt="card"
          width={"40px"}
          height={"40px"}
          style={{ width: "auto", height: "auto" }}
        />{" "}
        <h4 className=" text-xl font-bold">20 € EUR</h4>{" "}
      </div>
      <div
        className="mx-5 text-center py-3 rounded-md mb-10"
        style={{ backgroundColor: "rgba(44, 199, 209, 0.19)" }}
      >
        <p className="text-xs" style={{ color: "#545353" }}>
          Desde España y paises SEPA
        </p>
      </div>
    </>
  );
}

export default MontoMinimo;
