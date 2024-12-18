import { Route, Routes } from 'react-router-dom';
import { History } from './pages/history/history';
import { Favourites } from './pages/favourites/Favorurites';
import { Characters } from './pages/characters/Characters';
import { NotFound } from './pages/notFound/NotFound';
import { AuthForm } from './components/Ui/AuthForm/AuthForm';
import { User } from './pages/user/User';
import './App.css';
import { Layout } from './components/Layout/Layout';
import { useSelector } from 'react-redux';


function App() {
  const userStatus =  useSelector((state: any) => state.registration.active)

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
           {userStatus ? 
            <>
              <Route index element={<Characters />} />
              <Route path="/favourites" element={<Favourites />} />
              <Route path="/history" element={<History />} />
              <Route path='/user' element={<User/>}/>
            </>
           :  
            <>
              <Route path='/registration' element={<AuthForm />}/>
              <Route index element={<AuthForm />} />
            </>
           }
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
