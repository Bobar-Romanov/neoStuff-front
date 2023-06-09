
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HeaderComponent from './components/HeaderComponent';
import ListComponent from './components/ListComponent';
import ViewComponent from './components/ViewComponent';
function App() {
  return (
    <div>
      <Router>
        <HeaderComponent />
         <div className="container">
          <Routes>
            <Route path="/" element={<ListComponent />} />   
            <Route path = "/view/:id" element = {<ViewComponent/>}></Route>  
          </Routes>
        </div>
      </Router>
    </div>
  );
}


export default App;
