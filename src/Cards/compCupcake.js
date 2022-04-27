import { number, string } from 'prop-types';
import useVender from '../Hooks/useVender';
const Cupcake = ({ sabor, color, descripcion, precio, imagen }) => {

    const [vendido, Vender] = useVender(false)

    return (
        <div className="s-radius-1 s-shadow-bottom s-bg-white s-pxy-2">
            <img src={imagen} alt={descripcion} />
            <p> {`Sabor: ${sabor}`} </p>
            <p> {`Color: ${color}`} </p>
            <p> {`Descripcion: ${descripcion}`} </p>
            <p> {`Precio: ${precio}`} </p>
            <p> <b>Estado:</b> {vendido ? "Vendido" : "A la venta"} </p>
            {
                !vendido && <button className="button ghost" onClick={Vender}>BUY $</button>
            }
        </div>
    )
};

Cupcake.prototype = {
    imagen: string,
    sabor: string.isRequired,
    color: string.isRequired,
    descripcion: string.isRequired,
    precio: number.isRequired
}
Cupcake.defaultProps= {
    imagen:"https://i.pinimg.com/736x/3f/0a/0a/3f0a0ad43613bf67882a3752ff756531--cupcake-drawing-sunflower-cupcakes.jpg",
    precio:0
}
export default Cupcake;

