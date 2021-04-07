import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

export default function Favoritos() {
  const [postagens, setPostagens] = useState([]);

  useEffect(()=>{

    const minhaLista = localStorage.getItem('postagens');
    setPostagens(JSON.parse(minhaLista) || []);

  }, []);

  function handleDelete(id){
    let filtroPostagens = postagens.filter((item)=> {
      return (item.id !== id)
    })

    setPostagens(filtroPostagens);
    localStorage.setItem('postagens', JSON.stringify(filtroPostagens))

  }
  return(
    <div id="meus-favoritos">
      <h1>Favoritos</h1>

      <ul>
        {postagens.map((item)=>{
          return(
            <li key={item.id}>
              <span>{item.title}</span>

              <div>
                <Link to={`postagem/${item.id}`}>Detalhes</Link>
                <button onClick={ () => handleDelete(item.id) }>Excluir</button>
              </div>

            </li>

       
          )
        })}
      </ul>
    </div>
  )
}