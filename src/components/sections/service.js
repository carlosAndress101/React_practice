import useFetch from '../../Hooks/useFetch';
import {number, string} from 'prop-types';

const Service = ({ peticion }) => {

    const [miservice, error] = useFetch(peticion)

    if (error) {
        return <span>Hubo un error</span>
    }
    if (!miservice || miservice.leng === 0) {
        return <span>No hay servicios</span>
    }
    return (
        <div className='ed-grid'>
            {
                miservice.map(s => (
                    <div key={s.id}>
                        <h3>{s.nombre}</h3>
                        <p>{s.descripcion}</p>
                    </div>
                ))
            }
        </div>
    )
}
Service.protoType = {
    id: number.isRequired,
    nombre: string,
    descripcion: string
}

export default Service;
