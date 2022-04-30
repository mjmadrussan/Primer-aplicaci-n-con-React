import React from 'react';
import Encabezado from "./Encabezado.js"
import Banner from "./Banner.js"
import Producto from './Producto.js';
import Footer from './Footer.js';
function Web() {
  return (
    <div className="container">
      <Encabezado />
      <Banner />
      <Producto />
      <Footer />
    </div>
  )

}
export default Web;