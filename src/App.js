
import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import ManageInventory from './components/ManageInventory/ManageInventory'

import { Routes, Route } from "react-router-dom";
import OrderReview from './components/OrderReview/OrderReview';
import ProductDetail from './components/ProductDetail/ProductDetail';




function App() {
  return (
    <div>
     <Header></Header>

     <Routes>
        <Route exact path="/shop" element={<Shop />} />
      </Routes>

      <Routes>
        <Route path ="/review" element = {<OrderReview />} />
      </Routes>

      <Routes>
         <Route path ="/manage" element = {<ManageInventory />} />
         
      </Routes>

      <Routes>
        <Route path ="/product/:productKey" element = {<ProductDetail />} />
              
      </Routes>

      
    
    
    
    
    
  

      
      
    </div>
  );
}

export default App;
