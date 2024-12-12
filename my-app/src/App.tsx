import { Route, Routes } from 'react-router-dom';
import { History } from './pages/history/history';
import { Favourites } from './pages/favourites/Favorurites';
import { Characters } from './pages/characters/Characters';
import { NotFound } from './pages/notFound/NotFound';
<<<<<<< HEAD
import { AuthForm } from './components/Ui/AuthForm/AuthForm';
=======
import { Registration } from './pages/registration/Registration';
>>>>>>> 629fd6729f634eee6e898908ef690088429706eb
import './App.css';
import { Layout } from './components/Layout/Layout';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Characters/>}/>
<<<<<<< HEAD
          <Route path='/locations' element={<Locations/>}/>
          <Route path='/episodes' element={<Episodes/>}/>
          <Route path='/authorization' element={<AuthForm/>}/>
=======
          <Route path='/favourites' element={<Favourites/>}/>
          <Route path='/history' element={<History/>}/>
          <Route path='/registration' element={<Registration/>}/>
>>>>>>> 629fd6729f634eee6e898908ef690088429706eb
          <Route path='*' element={<NotFound/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App;
