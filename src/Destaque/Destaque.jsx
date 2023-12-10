import { useEffect, useState } from "react";
import Cabecalho from "../componentes/cabecalho";
import Card from "../Card/Card";
export default function Destaque(){        
    const MeusDestaq = JSON.parse(localStorage.getItem("Lista")).slice(-2);
    const mostrar = MeusDestaq.slice(-2);
    console.log(mostrar);

    return (
        <div>
        <Cabecalho/>
        <h2>Aqui estão as Músicas:</h2>
        <br />
        <Card videos={mostrar} />
        </div>
    );
}