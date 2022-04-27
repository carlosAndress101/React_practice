/* eslint-disable react-hooks/rules-of-hooks */
import Cupcake from '../../Cards/compCupcake';
import useFetch from '../../Hooks/useFetch';

const cupcake = ({ peticion, title }) => {

    const [miCupcake] = useFetch(peticion)
    
    return (
        <div className="ed-grid">
            {title && <h1>Pagina Cupcakes</h1>}
            {
                miCupcake ? (
                    <section className="ed-grid s-grid-2 m-grid-3 lg-grid-4 row-gap">
                        {
                            miCupcake.map(({ sabor, color, descripcion, precio, imagen, id }) => <Cupcake
                                sabor={sabor} color={color} descripcion={descripcion} precio={precio}
                                imagen={imagen} key={id} 
                            />)
                        }
                    </section>
                ) : (<span>Cargando...</span>)
            }
        </div>
    )
};

export default cupcake;
//json-server --watch --port 53000 db.json



