import { Route, Routes } from 'react-router-dom';
import { Episodes } from './pages/episodes/Episodes';
import { Locations } from './pages/locations/Locations';
import { Characters } from './pages/characters/Characters';
import { NotFound } from './pages/notFound/NotFound';
import './App.css';
import { Layout } from './components/Layout/Layout';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Characters/>}/>
          <Route path='/locations' element={<Locations/>}/>
          <Route path='/episodes' element={<Episodes/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App;
