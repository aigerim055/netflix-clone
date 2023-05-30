import {BrowserRouter, Route, Routes} from 'react-router-dom'
import HomePage from "./pages/home";
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {getPopularMovies} from "./redux/action/movieAction";

function App() {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getPopularMovies())
    }, [])

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path={'/'} element={<HomePage/>}/>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
