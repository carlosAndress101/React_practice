/* eslint-disable no-undef */
import { useState, useEffect } from 'react';
import Cupcake from '../../Cards/compCupcake';

const cupcake = ({peticion, title}) => {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [miCupcake, setCupcake] = useState()

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        fetch(`${process.env.REACT_APP_API}${peticion}`)
            .then(response => response.json())
            .then(data => setCupcake(data))
            .catch(e => console.log(e))
        }, [peticion])
        

    return (
        <div className="ed-grid">
            { title && <h1>Pagina Cupcakes</h1> }
            {
                miCupcake ? (
                    <section className="ed-grid s-grid-2 m-grid-3 lg-grid-4 row-gap">
                        {
                            miCupcake.map(({sabor, color, descripcion, precio, imagen, id}) => <Cupcake 
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



