import React from 'react'
import logo from '../../assets/images/logo.png'
import { useNavigate } from 'react-router-dom'
import './style.css'

function Home() {
  const navigate = useNavigate()

  return (
    <div className="home-container">
      <div className="home-box">
        <h1 className="home-title">Tela Inicial</h1>
        <img src={logo} alt='Logo do Time' width={200} className='home-logo'></img>
        <button className="home-button red" onClick={() => navigate('/cadastro')}>
          Cadastrar Jogador
        </button>
        <button className="home-button red" onClick={() => navigate('/usuarios')}>
          Ver Jogadores Cadastrados
        </button>
      </div>
    </div>
  )
}

export default Home
