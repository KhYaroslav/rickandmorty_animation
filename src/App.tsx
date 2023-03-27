import { Route, Routes } from 'react-router-dom';
import { useEffect} from 'react'
import { useDispatch } from 'react-redux';
import { AppDispatch } from './redux/store';
import { fetchingRickAndMorty } from './redux/actions/rickAndMortyActions';
import './App.css'
import RickAndMortyList from './pages/RickAndMortyList';

const App = () => {
  console.log('message');
  

  const dispatch = useDispatch<AppDispatch>()
  
  useEffect(() => {
    dispatch(fetchingRickAndMorty())
  }, [dispatch])

  return (
    <Routes>
      <Route path="/" element={<RickAndMortyList/>} />
    </Routes>
  );
}

export default App;