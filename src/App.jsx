import './App.css'
import Template from '@/components/template/Template.jsx'
import { CartProvider }  from '@/context/CartContext'

function App() {
  return (
    <CartProvider>
      <Template />
    </CartProvider>
  )
}

export default App
