import '../App.css'
import logo from './imagens/esfigmomanometro.png'


function Navbar() {
  return (

    <nav className="navbar navbar-light bg-light fixed-top bg-danger-subtle" >
      <a className="navbar-brand" href="#">
        <img src={logo} width="50" height="45" className="d-inline-block align-top rounded-5" alt="Logo" id='img' />
        Center Med
      </a>
      <p className='m-3'>Medico</p>
    </nav>
  )
}

export default Navbar;