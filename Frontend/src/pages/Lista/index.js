// src\pages\Lista\index.js

import ListaDeUsuarios from '../../components/ListaDeUsuarios'
import { useNavigate } from 'react-router-dom'
import './styles.css'

function PaginaListaUsuarios() {
    const navigate = useNavigate()

    return (
        <div className='pagina-lista-usuarios'>
            <div className='container'>
                <h1>Jogadores Cadastrados</h1>
                <ListaDeUsuarios />
                <button onClick={() => navigate('/')} className='link-voltar'>
                    Voltar
                </button>
            </div>
        </div>
    )
}

export default PaginaListaUsuarios