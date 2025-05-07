import { useState } from "react";

export default function Currencies({ setCurrencyChange }) {

    return (
      <div className="p-4">
        <h2>Browse Currencies</h2>
        <button onClick={() => setCurrencyChange(false)}>Go Back</button>
      </div>
    );
  }