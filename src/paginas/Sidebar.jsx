import { Link } from 'react-router-dom';
import '../App.css'

function Sidebar(){
    return(
        <div className="sidebar" id='sidebar'>
        <ul className="nav flex-column">
        
            <Link to='cadastrom' id='link'>Cadastrar Medico</Link>
            <Link to='cadastrof' id='link'>Cadastrar Paciente</Link>
            <Link to='cadastrof' id='link'>Consultas</Link>
            <Link to='cadastrof' id='link'>Pacientes</Link>
        </ul>
      </div>
    )
}


export default Sidebar;