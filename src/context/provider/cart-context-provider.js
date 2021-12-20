import CartContext from "../cart-context";
import React, { useEffect, useState } from "react";

const CartContextProvider = ({ children }) => {
    const [userDetails, setUserDetails] = useState(null);
    const [courseList, setCourseId] = useState([]);

    useEffect(() => {
        const accessToken = localStorage.getItem('mytoken');
        const role = localStorage.getItem('role');
        const username = localStorage.getItem('username');
        const id = localStorage.getItem('id');
        const courses = localStorage.getItem('courseList');

        setUserDetails(accessToken ? {
            accessToken,
            role,
            username,
            id,

        } : null);

        setCourseId(accessToken ? [courses] : null)
        console.log("Hello World")

    }, []);

    const courseInCart = (token, id) => {
        // debugger;
        if (token) {
            // localStorage.setItem('mytoken', );
            if (courseList && courseList.length) {
                // not empty  
                courseList.push(id);
                setCourseId(token ? [...courseList] : null);
                localStorage.setItem('courseList', [...courseList]);
            } else {
                // empty 
                // courseList[0] = id;
                setCourseId(token ? [id] : null);
                localStorage.setItem('courseList', [id]);

            }



        }
    };

    const removeFromCart = (id) => {
        // // debugger;
        courseList = courseList.filter(x => x !== id);
        setCourseId(courseList);
    }

    return (
        <CartContext.Provider value={{
            userDetails,
            courseList,
            courseInCart,


        }}> {children} </CartContext.Provider>
    )

}

export default CartContextProvider;