
import './App.css';
import { BrowserRouter } from "react-router-dom";
import AppRoutes from './routes/AppRoutes';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <h1>Redux - Router</h1>
        <AppRoutes />
      </BrowserRouter>
    </div>
  );
}

export default App;
