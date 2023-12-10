import { useParams } from "react-router-dom";
import Cabecalho from "../componentes/cabecalho";
import Card from '../Card/Card';

export default function Destaque(){        
    const MeusDestaq = JSON.parse(localStorage.getItem("Lista"));
    const mostrar = MeusDestaq.slice(-2);
    console.log(mostrar);

    return (
        <div>
        <Cabecalho/>
        <Card lista={mostrar} />
        </div>
    )
}