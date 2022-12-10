import './App.css'
import { Formulario } from './components/Formulario'
import ListaDeProductos from './components/ListaDeProductos'
import { Presupuesto } from './components/Presupuesto'
import { AppProvider } from './context/AppProvider'

const App = () => {
  return (
    <AppProvider>
      <div className="container mt-3">
        <Presupuesto/>
        <Formulario/>
        <hr />
        <ListaDeProductos/>
      </div>
    </AppProvider>

  )
}


export default App
