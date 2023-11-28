import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './paginas/Home'
import CadastarFuncionario from './paginas/Administrador/CadastrarFuncionario';
import CadastrarMedicos from './paginas/Administrador/CadastrarMedicos'
import Lay from './paginas/Lay';
import CadastarRecepcionista from './paginas/Administrador/CadastrarRecepcionista';

function App() {
  return (
 <Router>
 <Routes> 
  <Route path="/" element={<Lay/>}>
    <Route index element={<Home/>}/>
    <Route path="/cadastrof" element={<CadastarFuncionario/>}/>
    <Route path="/cadastrom" element={<CadastrarMedicos/>}/>
    <Route path="/cadastror" element={<CadastarRecepcionista/>}/>
  </Route>
  
 </Routes>
 </Router>
  );
}

export default App;
