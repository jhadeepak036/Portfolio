import React from "react";

function Tile ({title, mediumTitle, desc}) {
  return (
    <div className="mtb-10" style={{ background: "#fff", padding: "20px" ,width:"250px"}}>
      <p className="primaryColor font-14 bold-500 mtb-10 uppercase">{title}</p>
      <p className="textColor font-14 bold=600 mtb-10 uppercase">{mediumTitle}</p>
      <p className="grey font-12 mtb-10">{desc}</p>
    </div>
  );
}

export default Tile;
