import { useEffect, useState } from 'react';
import './styles.css';
import api from '../../services/api';
import { Link } from 'react-router-dom';


function Home() {
  const [postagens, setPostagens] = useState([]);

  useEffect(()=>{

    async function loadPostagem() {
      const response = await api.get('https://jsonplaceholder.typicode.com/posts')
      setPostagens(response.data);
    }

    loadPostagem();

  }, []);

  return (
    <div className="container">
      <div className="lista-postagens">
        {postagens.map((postagem)=>{
          return(
            <article key={postagem.id}>
              <strong>{postagem.title}</strong>
              <Link to={`/postagem/${postagem.id}`}>Detalhes</Link>
            </article>
          )
        })}
      </div>
    </div>
  );
}

export default Home;