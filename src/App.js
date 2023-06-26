import {BrowserRouter, Route, Routes} from 'react-router-dom'
import HomePage from "./pages/home";
import MoviePage from "./pages/moviePage";

function App() {



    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path={'/'} element={<HomePage/>}/>
                    <Route path={'/movie/:id'} element={<MoviePage/>}/>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
