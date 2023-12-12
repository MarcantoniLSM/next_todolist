import Note from '../Note/Note';
import './NotesArea.css';
import axios from 'axios';

export default function NotesArea() {
    var array = []
    axios.get('sua_url_api')
      .then(response => {
        array = response.data;
        console.log(data);
      })
      .catch(error => {
        console.error('Erro na solicitação GET', error);
      });

  return (
    <div className='notesArea'>
      {array.map((e, index) => (
        <Note key={index} title={e.noteTitle} body={e.noteBody} />
      ))}
    </div>
  );
}