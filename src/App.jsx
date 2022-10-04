import { Route, Routes } from 'react-router-dom';
import CreateAccount from './views/CreateAccount';
import Login from './views/Login';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Login/>} />
      <Route path='/create-account' element={<CreateAccount/>} />
   </Routes>
  );
}

export default App;
