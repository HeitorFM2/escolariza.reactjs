import './App.css';
import Home from "./pages/Home"
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
} from 'react-router-dom';


function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" exact element={<Home></Home>}></Route>
          {/* <Route path="/ainbaue" exact element={}></Route> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
