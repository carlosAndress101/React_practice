import Header from './sections/Header';
import '../style/style.scss';
import Home from './pages/home';
import Cupcake from './pages/cupcake';
import About from '../components/pages/aboutUs';
import { Route, Routes } from 'react-router-dom';

const App = () => {
    return (
        <div className="App">
            <Header />
            <Routes>
                <Route path="/cupcake" caseSensitive={false} element={<Cupcake title peticion={"cupcake"}/> } />
                <Route path="/About" caseSensitive={false} element={<About />} />
                <Route path="/home" caseSensitive={false} element={<Home />} />
            </Routes>
        </div>

    )
};
export default App;


// const App = () => {
//     return (
//         <Router>
//             <Header />
//             <Routes>
//                 <Route path="/Cupcake" caseSensitive={false} element={<Cupcake />} />
//                 <Route path="/About" caseSensitive={false} element={<About />} />
//                 <Route path="/home" caseSensitive={false} element={<Home />} />
//             </Routes>
//         </Router>
//     )
// };