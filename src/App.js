import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import UserContextProvider from "./context/provider/user-context-provider";
import CartContextProvider from "./context/provider/cart-context-provider";
import Footer from "./Components/Footer/Footer";
import Routers from "./Routers/Routers";

export default function App() {
  return (
    <UserContextProvider>
      <CartContextProvider>
        <>
          <Routers />
          <Footer />
        </>
      </CartContextProvider>
    </UserContextProvider>
  );
}
