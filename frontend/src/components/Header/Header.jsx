import './Header.css'

export default function Header(props){
    return(
        <nav style={{background: '#43C6AC'}} class="navbar ">
            <form class="container-fluid justify-content-start">
                <button onClick={props.onClick} id='button' class="btn me-2" type="button">
                    <span>
                        Adicionar nota
                    </span>
                    <span class="material-symbols-outlined">
                        add
                    </span>
                </button>
            </form>
        </nav>  
    )
}