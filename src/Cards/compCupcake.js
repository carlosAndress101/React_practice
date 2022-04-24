const Cupcake = ({ sabor, color, descripcion, precio, imagen }) => {

    return (
        <div className="s-radius-1 s-shadow-bottom s-bg-white s-pxy-2">
            <img src={imagen} alt={descripcion}/>
            <p> {`Sabor: ${sabor}`} </p>
            <p> {`Color: ${color}`} </p>
            <p> {`Descripcion: ${descripcion}`} </p>
            <p> {`Precio: ${precio}`} </p>
        </div>
    )
};
export default Cupcake;

