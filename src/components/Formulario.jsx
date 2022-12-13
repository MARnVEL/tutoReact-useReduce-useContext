import { useState } from "react";
import { useAppContext } from "../context/AppProvider";
import { TYPES } from "../types/formTypes";

export const Formulario = () => {

    //!Para que el formulario interactúe con los demás componentes USAMOS EL DISPATCH
    const { formDispatch } = useAppContext();

    const [nombre, setNombre] = useState('')
    const [unidades, setUnidades] = useState('')
    const [precio, setPrecio] = useState('')
    
    const handleSubmit = ( ev ) => {
        ev.preventDefault();
        // console.log({ nombre, unidades, precio });

        const producto = {
            nombre,
            unidades: parseInt(unidades),
            precio: parseFloat(precio)
        }

        // console.log(producto);
        formDispatch({
            type: TYPES.ADD_PRODUCT_TO_LIST,
            value: producto
        })
        
        ev.target.reset()
    }
    return (
        <>
            <form onSubmit={(ev) => handleSubmit(ev)}>
                <div className="mb-3">
                    <label htmlFor="" className="form-label">
                        Nombre:
                    </label>
                    <input 
                        type="text" 
                        className="form-control" 
                        autoFocus={true}
                        onChange = { (event) => {setNombre(event.target.value)} }
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="" className="form-label">
                        Unidades:
                    </label>
                    <input 
                        type="number" 
                        className="form-control"
                        onChange = { (event) => {setUnidades(event.target.value)} }
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="" className="form-label">
                        Precio:
                    </label>
                    <input 
                        type="float" 
                        className="form-control"
                        onChange = { (event) => {setPrecio(event.target.value)} }
                    />
                </div>

                <div className="d-flex flex-row-reverse">
                    <input
                        type="submit"
                        className="btn btn-primary border-dark"
                        value="Enviar"
                    />
                </div>
            </form>

        {/* <div className="mb-3">
                <label htmlFor="" className="form-label">Email</label>
                <input 
                    type="email"
                    className="form-control"
                    name="" id="" 
                    aria-describedby="emailHelpId" 
                    placeholder="abc@mail.com"
                />
                <small id="emailHelpId" className="form-text text-muted">Help text</small>
            </div>

            <div className="mb-3">
                <label for="" className="form-label">Name</label>
                <input 
                    type="text"    
                    name="" 
                    id="" 
                    className="form-control" 
                    placeholder="" 
                    aria-describedby="helpId"
                />
                <small id="helpId" className="text-muted">Help text</small>
            </div> */}
        </>
    );
};
