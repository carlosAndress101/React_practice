import { BrowserRouter } from "react-router-dom";
import {createRoot} from 'react-dom/client';
import App from './components/App';


const root = createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);


