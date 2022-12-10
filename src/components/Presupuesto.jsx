import React from 'react'
import { useAppContext } from '../context/AppProvider'

export const Presupuesto = () => {

    const { presupuesto, productos } = useAppContext()

    const calcularTotal = () => {
        let total = 0;
        if (productos.length > 0){
            total = productos.reduce( (amaunt, producto) => {
                return amaunt + ( producto.precio * producto.unidades )
            }, 0)
        }

        return total;
    }

    return (
        <div className="alert alert-warning text-center rounded-5 border-danger">
            <b>
                Presupesto:
            </b>
            <span className='d-block text-decoration-underline text-danger'>
                 Ar $ { presupuesto - calcularTotal() } 
            </span>
        </div>
    )
}
