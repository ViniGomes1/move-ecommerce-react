import { Outlet } from 'react-router-dom';
import Header from './Components/Header/Header';
import Baseboard from './Components/Baseboard/Baseboard';
import CartDrawer from './Components/CartDrawer/CartDrawer';
import { CartProvider } from './context/CartContext';

function App() {
  return (
    <CartProvider>
      <Header />
      <main className="min-h-[calc(100vh-8rem)]">
        <Outlet />
      </main>
      <Baseboard />
      <CartDrawer />
    </CartProvider>
  );
}

export default App;
