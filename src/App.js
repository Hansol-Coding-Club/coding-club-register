import './App.css';
import StartForm from "./jsx/form/StartForm";
import { BrowserRouter, Routes, Route, } from 'react-router-dom'
import FirstRegisterForm from "./jsx/form/FirstRegisterForm";
import SecondRegisterForm from "./jsx/form/SecondRegisterForm";
import ResultForm from "./jsx/form/ResultForm";
import { PAGE_ } from "./js/RouteLink";

function App() {
    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Routes>
                <Route path={PAGE_.START} element={<StartForm/>}/>
                <Route path={PAGE_.FIRST_REGISTER} element={<FirstRegisterForm/>}/>
                <Route path={PAGE_.SECOND_REGISTER} element={<SecondRegisterForm/>}/>
                <Route path={PAGE_.RESULT} element={<ResultForm/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
