import "./App.css";
import {BrowserRouter, Route,Routes} from "react-router-dom";
import ListEmployees from "./components/ListEmployees";
import AddEmployee from "./components/AddEmployee";
import UpdateEmployee from "./components/UpdateEmployee";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' exact element={<ListEmployees/>}></Route>
          <Route path='/employees' element={<ListEmployees/>}></Route>
          <Route path='/add-employee' element={<AddEmployee/>}></Route>
          <Route path='/update-employee/:id' element={<UpdateEmployee/>}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
