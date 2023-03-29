import { Route, Routes } from 'react-router-dom';
import './App.css'
import RickAndMortyList from './pages/RickAndMortyList';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<RickAndMortyList/>} />
    </Routes>
  );
}

export default App;