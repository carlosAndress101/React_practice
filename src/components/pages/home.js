import Cupcake from '../pages/cupcake';
import Banner from '../sections/banner';

const Home = () => {

    return (
        <>
            <Banner />
            <Cupcake  peticion={"cupcake?sabor_like=vainilla"}/>
        </>

    )
};

export default Home;