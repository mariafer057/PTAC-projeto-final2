import { useParams } from "react-router-dom";
import Cabecalho from "../componentes/cabecalho";
import Card from '../Card/Card';

export default function Detalhe(){
    const { id } = useParams();
    const lista = JSON.parse(localStorage.getItem("Lista"));
    
    const video = lista.filter((objeto) => {
        if (objeto.id == id){
            return objeto;
        }
        return null;
        
    });
    
    return (
        <div>
    {video.map((videos)=> (
    <div key={videos.id}>
        <Cabecalho />
<h1>Veja os detalhes sobre a música</h1>
<p><strong>Nome: </strong>{videos.nome}</p>
<iframe width= "500" height= "300"src={`https://www.youtube.com/embed/${videos.link.slice(17)}`} frameborder="0"></iframe>
<p><strong>letra da Música: </strong>{videos.LetraMsc}</p>
<p><strong>Cantor: </strong>{videos.Cantor}</p>

    </div>
    )
)
}
</div>
    );
}
//tive que "transformar" o meu video em um array, por que a minha pg detalhe não tava funcionando, então tive que fazer com que as minhas info retornasse para o meu array
