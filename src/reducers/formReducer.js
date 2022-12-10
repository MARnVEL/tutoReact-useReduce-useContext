import {TYPES} from '../types/formTypes';


export const formReducer = (state, action) => {

    //*Cuando hago los dispatch(), esta función ejecuta lo que tengo en el reducer. Entonces una forma de ver si el reducer está funcionando bien es hacer un clg aquí.

    console.log('CLG front. Antes de entrar al switch del reducer.', action);

    //! A partir del tipo y el valor que recibo EN EL ACTION A TRAVÉS DEL DISPATCH ES NECESARIO MODIFICAR EL ESTADO Y DEVOLVER UN NUEVO ESTADO (EN CASO DE SER NECESARIO). Es decir, procurar de decirle: "_Pasa esto, y cuando esto pase, quiero que sucedan estas cosas; y si pasa esto otro, quiero que sucedan estas otras cosas DENTRO DE MI ESTADO!"
    switch (action.type) {
        case TYPES.ADD_PRODUCT_TO_LIST: {
            //*Se retorna el DICHOSO NUEVO ESTADO (ACÁ ESTÁ LA CHICHA-ACÁ ESTÁ EL HUEVO)
            return {
                ...state,
                productos: [...state.productos, action.value]
            }
        }

        default:
            return state
    }
}

