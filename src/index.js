import { render } from 'react-dom';
import './index.css'
import App from './App';
import   { ContextProvider }  from "./contexts/ContextProvider";

render(
    <ContextProvider>
        <App />
    </ContextProvider>
   , document.getElementById('root'));