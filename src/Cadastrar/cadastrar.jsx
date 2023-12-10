import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Cadastrar() {
    const listaLocalStorage = JSON.parse(localStorage.getItem("Lista"))  || [];
    const [nome, setNome ] = useState("");
   const [cantor, setCantor ] = useState("");
   const [duracao, setDuracao ] = useState("");
   const [estilo, setEstilo ] = useState("");
   const [descricao, setDescricao ] = useState("");
   const [letraMsc, setLetraMsc ] = useState("");
   const [link, setLink ] = useState("");
   const [lista, setLista ] = useState("");
   const [id, setId] = useState(listaLocalStorage[listaLocalStorage.length - 1]?.id + 1 || 1);

   useEffect(() => {
    localStorage.setItem("Lista", JSON.stringify(lista));}, [lista]);

    //importanda o modulo

    const salvar =(e) =>{
        // e.preventDefault(); > previnir o comportamento
        e.preventDefault();
        setLista([...lista, {
                nome: nome, 
                cantor:cantor, 
                duracao: duracao, 
                estilo: estilo,
                descricao: descricao,
                letraMsc: letraMsc,
                link: link,
                id: id
        }]);
        setId(id + 1);
        setNome("");
        setCantor("");
        setDuracao("");
        setEstilo("");
        setDescricao("");
        setLetraMsc("");
        setLink("");

    }
    return(
    <div className="botao">
        <h1 className="titulo">Videos</h1>

    <Link to="/">home</Link>

        <form onSubmit={salvar}>

        <p className="txt-input"><b>Nome da Musica</b></p>
    <input value={nome} type="text"
    onChange={(e)=>{ setNome(e.target.value)}}/>

        <p className="txt-input"><b>Cantor:</b></p>
    <input value={cantor} type="text"
    onChange={(e)=>{ setCantor(e.target.value)}}/>

       <p className="txt-input"><b>Duração:</b></p>
    <input value={duracao} type="text"
    onChange={(e)=>{ setDuracao(e.target.value)}}/>

           <p className="txt-input"><b>Estilo musical:</b></p>
    <input value={estilo} type="text"
    onChange={(e)=>{ setEstilo(e.target.value)}}/>

       <p className="txt-input"><b>Descrição:</b></p>
    <input value={descricao} type="text"
    onChange={(e)=>{ setDescricao(e.target.value)}}/>

<p className="txt-input"><b>Letra da Música:</b></p>
    <input value={letraMsc} type="text"
    onChange={(e)=>{ setLetraMsc(e.target.value)}}/>

<p className="txt-input"><b>Link do video:</b></p>
    <input value={link} type="text"
    onChange={(e)=>{ setLink(e.target.value)}}/>


<button className="btn">ADD</button>   
    </form>
</div>
    );
}


//pegando do anterior
//pegando novamente do cod anterior