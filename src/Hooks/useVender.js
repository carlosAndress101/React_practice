import { useState} from 'react';

const useVender = () => {
    const [vendido, setVendido] = useState()

    const vender = () => {
        setVendido(true);
    }
    return [vendido, vender]
}

export default useVender;