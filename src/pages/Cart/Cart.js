import CartContext from "../../context/cart-context";
import { useContext, useState, useEffect } from "react";



function Cart() {

    const cartContext = useContext(CartContext);
    const [courseList, setCourseList] = useState([]);

    const cartItems = () => {
        let xx = localStorage.getItem('courseList');
        let x = JSON.stringify(xx).split('"')[1];
        setCourseList(x.split(","));
        console.log(x.split(","))

    }

    useEffect(() => {

        cartItems();
        console.log(cartContext.courseList);

    }, [])


    return (
        <div>
            <ul>
                {
                    cartContext.courseList.map((i) =>

                        <li>{i}</li>
                    )
                }
            </ul>
        </div>
    )
}

export default Cart;