import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./Component/Navbar";
import Cart from "./Component/Cart/Cart";

function App() {
  const [products, setProducts] = useState([
    {
      img: "https://thephonecart.com/cdn/shop/files/Bling-Vloeibaar-Drijfzand-Glitter-Diamant-Telefoonhoesje-Voor-Iphone-15-14-Pro-13-12-11-14-Pro.jpg_640x640.jpg__5.jpg?v=1704192458&width=493",
      title: "Glittery Butterfly Liquid Case",
      price: "999",
      quantity: 1,
      link: "https://thephonecart.com/products/glittery-butterfly-liquid-case"
    },
    {
      img: "https://thephonecart.com/cdn/shop/files/Cute-Fun-3D-Coal-Ball-Coffee-Silicone-Phone-Case-For-iPhone-11-13-12-14-15.jpg_640x640_1667852f-5dcd-4fdf-94c8-210183da0f30.webp?v=1698315274&width=533",
      title: "3D Coal Ball Coffee Case",
      price: "1000",
      quantity: 1,
      link: "https://thephonecart.com/products/3d-coal-ball-coffee-case"
    },
    {
      img: "https://thephonecart.com/cdn/shop/files/Schattige-Cartoon-Schapen-Opvouwbare-Beugel-Stand-Funda-Case-Voo-Iphone-15-13-12-14-Pro-Max.jpg__1.jpg?v=1701090207&width=533",
      title: "Cartoon Sheep Foldable Stand Case",
      price: "1199",
      quantity: 1,
      link: "https://thephonecart.com/products/cartoon-sheep-foldable-stand-case"
    },
  ]);

  const [total, setTotal] = useState(0);

  function increaseQuantity(index) {
    let temp = [...products];
    temp[index].quantity += 1;
    setProducts(temp);
  }

  function decreaseQuantity(index) {
    let temp = [...products];
    if (temp[index].quantity > 0) {
      temp[index].quantity -= 1;
      setProducts(temp);
    }
  }

  function removepro(index) {
    let temp = products.filter((_, i) => i !== index);
    setProducts(temp);
  }

  useEffect(() => {
    let sum = 0;
    products.forEach((item) => {
      sum += parseFloat(item.price) * item.quantity;
    });
    setTotal(sum);
  }, [products]);

  return (
    <>
      <Navbar total={total} /> 
      {products.length > 0 ? (
        <div>
          <div className="cart-container">
            {products.map((item, index) => (
              <Cart
                key={index}
                img={item.img}
                title={item.title}
                price={item.price}
                quantity={item.quantity}
                link={item.link} 
                inc={() => increaseQuantity(index)}
                dec={() => decreaseQuantity(index)}
                rm={() => removepro(index)}
              />
            ))}
          </div>
          <hr />
          <button onClick={() => setProducts([])} className="clear">Clear Cart</button>
        </div>
      ) : (
        <div className="message">
          <h1>There is no items in the Cart. Please Add items.</h1>
        </div>
      )}
    </>
  );
}

export default App;