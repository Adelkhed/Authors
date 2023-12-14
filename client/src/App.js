
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AllAuthors from './components/AllAuthors';
import NewAuthor from './components/NewAuthor';
import EditAuthor from './components/EditAuthor'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
           <Route exact path='/' element={ <AllAuthors />} />
          
           <Route path="/new" element={<NewAuthor/>} />
          
           <Route path="/edit/:id" element={<EditAuthor/>} />
            
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
