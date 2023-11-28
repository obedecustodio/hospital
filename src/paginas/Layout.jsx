import { Link, Outlet } from "react-router-dom"
import imagem from "./imagens/esfigmomanometro.png"

// React hooks
function Layout(){
   


    return (
    <>
    <div className='body'>
      <nav className='nav'>
        <div>
          <img src={imagem} alt="imagem"></img>
          <label className='label' for='menu-toggler'>
            <h4>Center Med</h4>
            <h3> Medico</h3> 
            <input className='checkbox' type='checkbox' id='menu-toggler'></input>
          </label>
        
              <div className='menu'>
                <ul>
                  <li>Alterar senha</li>
                  <li> Logout</li>
                </ul>
              </div>

          </div>  
      </nav>

      <div className='container'>
      <div className='left_side'>
        <div className='menu_vert'>
          <Link to="/" > <i class="fas fa-home"></i> Home</Link>
          <Link to="/cadastrom" > <i class="fas fa-user"></i> Cadastrar Medicos</Link>
          <Link to="/cadastrof" > <i class="fas fa-user"></i>  cadastrarFuncionario</Link>
          <Link to="/cadastror" > <i class="fas fa-user"></i> Cadastrar Recepcionistas</Link>
          <Link to="/" > <i class="fas fa-user"></i> Cadastrar Tesoureiro </Link>
          <Link to="/" > <i class="fas fa-user"></i> Cadastrar Farmaceuticos </Link>
        </div>
        </div>
      <div className='right_side'>
        <Outlet/>
      </div>
       
      </div>
    </div>
    </>
    )
}

export default Layout