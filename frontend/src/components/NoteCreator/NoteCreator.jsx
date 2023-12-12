import { useState } from 'react'
import './NoteCreator.css'
import axios from 'axios';

export default function NoteCreator(props){

    

    const [title, setTitle] = useState()
    const [body, setBody] = useState()

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
      }
    
      const handleBodyChange = (e) => {
        setBody(e.target.value)
      };
    
      const handleSubmit = (e) => {
        e.preventDefault()
        
        axios.post('sua_url_api', {noteTitle:title, notebody:body})
            .then(response => {
                console.log('Solicitação POST bem-sucedida:', response.data);
            })
            .catch(error => {
                console.error('Erro na solicitação POST', error);
            })

            props.onClick()
      };

    return(
        <div className='noteCreator'>
            <form onSubmit={handleSubmit}>
      <label htmlFor="titulo">Título:</label>
      <input
        type="text"
        id="titulo"
        value={title}
        onChange={handleTitleChange}
      />

      <label htmlFor="descricao">Descrição:</label>
      <textarea
        id="descricao"
        value={body}
        onChange={handleBodyChange}
      />

      <button className='btn' type="submit">Enviar</button>
    </form>
        </div>
    )
}