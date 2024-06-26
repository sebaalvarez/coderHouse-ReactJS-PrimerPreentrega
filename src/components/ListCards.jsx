import vino1 from "../assets/vino1.webp";
import vino2 from "../assets/vino2.webp";
import corona from "../assets/corona.webp";
import conac from "../assets/conac.webp";
import vino3 from "../assets/vino3.webp";

import Card from "./Card";
import "./listCards.css";

const ListCards = () => {
  return (
    <div className="listCards">
      <Card
        img={vino1}
        titulo={"Escorihuela Gascon"}
        precio={"$9.500"}
        desc={"Vino Escorihuela Gascon Malbec 750cc"}
      />
      <Card
        img={vino2}
        titulo={"Angelica Zapata"}
        precio={"$118.999"}
        desc={"Vino Angelica Zapata Malbec Alta Regalo Caja Madera X 4"}
      />
      <Card
        img={corona}
        titulo={"Cerveza Corona"}
        precio={"$8.160"}
        desc={"Cerveza Corona Clásica American Adjunct Lager 330 ml 6 Unidades"}
      />
      <Card
        img={conac}
        titulo={"Cognac Hennessy"}
        precio={"$47.081"}
        desc={"Cogñac Hennessy Very Special 700ml"}
      />
      <Card
        img={vino3}
        titulo={"Ruttini"}
        precio={"$26.159"}
        desc={"Vino Rutini Cabernet Malbec estuche con 2 unidades"}
      />
    </div>
  );
};

export default ListCards;
