import { HashRouter as Router,Route } from "react-router-dom";
import Detail from "../routes/Detail";
import Home from "../routes/Home";


function App() {
  return (
    <Router>
   <Route exact path="/" components={Home}/>
   <Route path="/:id" components={Detail}/>
   </Router>
  );
}

export default App;
