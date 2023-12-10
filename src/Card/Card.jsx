import { Link } from "react-router-dom"

export default function Card({videos}){
    return(
        videos.map((video) =>

        <div class="">

        <div key= {video.id}>

        <Link to = {`/Detalhe/${videos.id}`}>
        <button class="button">Ver detalhes</button>
            <h4>Nome da Música: {videos.nome}</h4>
        </Link>
        
        <iframe width= "500" height= "300"src={`https://www.youtube.com/embed/${video.link.slice(17)}`} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen></iframe>
        </div>
        </div>
        )
    );
}
//pegando do meu projeto PTAC-2-AULA5/ CARD

//preguiça por isso copiei e colei do cadastar