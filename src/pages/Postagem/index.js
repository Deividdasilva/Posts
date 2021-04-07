import { useEffect, useState } from 'react';
import './styles.css';
import { useHistory, useParams } from 'react-router-dom';
import api from '../../services/api';

export default function Postagem(){
  const { id } = useParams();
  const history = useHistory();
  const [postagem, setPostagem] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(()=>{

    async function loadPostagem(){
      const response = await api.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
      
      if(response.data.length === 0){
        //Tentou acessar com um ID que nao existe, será direcionado ele para Home
        history.replace('/');
        return;
      }

      setPostagem(response.data);
      setLoading(false);
    }
    loadPostagem();

    return () => {
      console.log('COMPONENTE DESMONTADO')
    }

  }, [history, id]);

  function favoritaPostagem(){
    
    const minhaLista = localStorage.getItem('postagens');

    let postagensFavoritas = JSON.parse(minhaLista) || [];

    // se tiver alguma postagem salva com esse mesmo id ignorar
    const hasPostagem = postagensFavoritas.some((postagemFavorita) => postagemFavorita.id === postagem.id)

    if(hasPostagem){
      alert('Voce ja Favoritou essa postagem');
      return;
      // para a execução do codigo aqui
    }

    postagensFavoritas.push(postagem);
    localStorage.setItem('postagens', JSON.stringify(postagensFavoritas));
    alert('Favoritado com Sucesso!');

  }

  if(loading){
    return(
      <div className="postagem-info">
        <h1>Carregando sua Postagem...</h1>
      </div>
    )
  }

  return(
    <div className="postagem-info">
      <h2>{postagem.title}</h2>
      <p>{postagem.body}</p>

      <div className="botao-favoritar">
        <button onClick={ favoritaPostagem }>Favoritar</button>
      </div>
    </div>
  )
}