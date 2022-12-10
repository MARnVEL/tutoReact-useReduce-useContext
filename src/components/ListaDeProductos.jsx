import { useAppContext } from "../context/AppProvider";

const ListaDeProductos = () => {

    const { productos } = useAppContext();

    let lista = <h5>No existen productos para listar</h5>
    if (productos.length > 0) {
        lista = (
            <ul className='list-group'>
                {
                    productos.map(producto => (

                        //!Ojo acá: estas etiquetas li deberían tener un key

                        <li className='list-group-item'>
                            {producto.nombre} ({producto.unidades} unidades) ${producto.precio}
                        </li>
                    ))
                }
            </ul>
        )
    }
    return (
        <>
            <h3>Lista de productos</h3>
            {lista}
        </>
    )
}

export default ListaDeProductos;