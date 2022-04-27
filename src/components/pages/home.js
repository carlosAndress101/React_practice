import Cupcake from '../pages/cupcake';
import Banner from '../sections/banner';
import Service from '../sections/service';

const Home = () => {

    return (
        <>
            <Banner />
            <Cupcake  peticion={"cupcake?sabor_like=vainilla"}/>
            <Service peticion={"Servicio"} />
        </>
    )
};

export default Home;