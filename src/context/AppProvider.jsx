import { createContext, useContext, useReducer } from "react"
import { formReducer } from "../reducers/formReducer";


//*1ro- Creo el contexto
const AppContext = createContext();

//*3ro- Genero una función para usar el contexto en otros componentes. Obviamente esta A esta función hay que exportarla luego.

//*HOOOK PRESONALIZADO
const useAppContext = (  ) => {
    // LA SENTENCIA: useContext( AppContext ) nos DEVUELVE EL VALOR EXACTO DE LO QUE NOSOTROS LE ESTAMOS PROVEYENDO EN EL CONTEXTO. Es decir  si en el "value" del provider le pasamos peras, la sentencia de la que hablo nos devolverá peras.
    //*Por lo tanto la función useAppContext nos estaría retornando cualquier cosa que noostros pongamos en el "value" del Provider.
    return useContext( AppContext );
}

const initialState = {
    productos: [],
    presupuesto: 4000
}




const AppProvider = ({ children }) => {

    const [ state, formDispatch] = useReducer(formReducer, initialState)

    return (
        //Esto lo podríamos hacer directamente en el App.jsx, pero es mejor tener todo aquí para así dejar todo el tema de los datos recluídos acá. Todo se gestiona aquí todo se genera aquí, y simplemente luego en nuestra App.jsx decimos que todos nuestros componentes van a estar incluídos dentro del provider, y luego a partir de eso cada uno de los elementos puede utilizar la información que necesite.
        //*2do- Genero un proveedor de contexto y EN "value" pongo todo lo que quiero que se pueda acceder desde los componentes que consumen el contexto.
        <AppContext.Provider 
            value={{ 
                presupuesto: state.presupuesto, 
                productos: state.productos, 
                formDispatch 
            }}
        >
            {children}
        </AppContext.Provider>
    )
}

export {
    AppProvider,
    useAppContext
}