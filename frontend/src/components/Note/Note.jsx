import './Note.css'

export default function Note(props){
    return(
        <div style={{width:'15rem', height:'15rem'}} className="note">
            <h5 class="card-title">{props.title}</h5>
            <p>{props.body}</p>
        </div>
    )
}