import './App.css';
import StartForm from "./jsx/form/StartForm";
import { BrowserRouter, Routes, Route, } from 'react-router-dom'
import FirstRegisterForm from "./jsx/form/FirstRegisterForm";
import SecondRegisterForm from "./jsx/form/SecondRegisterForm";
import ResultForm from "./jsx/form/ResultForm";

function App() {
    return (

        <BrowserRouter>
            <Routes>
                <Route path='/' element={<StartForm/>}/>
                <Route path='/first-register-page' element={<FirstRegisterForm/>}/>
                <Route path='/second-register-page' element={<SecondRegisterForm/>}/>
                <Route path='/result-page' element={<ResultForm/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
