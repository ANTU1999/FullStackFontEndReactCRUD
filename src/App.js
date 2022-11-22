
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from './layout/Navbar';
import Home from './pages/Home';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import AddUser from './users/AddUser';
import Error from './pages/Error';
import EditUser from './users/EditUser';
import ViewUser from './users/ViewUser';

function App() {
  return (
    <div className="App">
    <Router>
    <Navbar/>
      <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route exact path="/adduser" element={<AddUser/>}></Route>
          <Route exact path="/edituser/:id" element={<EditUser/>}/>
          <Route exact path="/viewuser/:id" element={<ViewUser/>}/>
          <Route path="*" element={<Error/>}></Route>
      </Routes>
    </Router>

     
     
    </div>
  );
}

export default App;
