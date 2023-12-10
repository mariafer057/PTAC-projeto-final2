import Cabecalho from './componentes/cabecalho';
import Card from './Card/Card';
import "./home.css"

export default function Home(){
    const videos =  JSON.parse(localStorage.getItem("Lista")) || []
    return(
        <div>
         <Cabecalho/>
         <div class="msc">
        <h1>Músicas</h1>
        </div>

        <div class="container">
        <Card videos={videos}/>
      </div>
</div>
        );
}

//peguei o código anterior do meu projeto PTAC-2-AULA5
//pegando o navbar do bootstrap