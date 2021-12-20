import "./ViewCourse.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import CartContext from "../../../context/cart-context";
import { useContext } from "react";

import Dashboard from "../../../Components/Dashboard/Dashboard";
import { Table, Button } from "react-bootstrap";

function ViewCourse() {
    let [user, setUser] = useState(false);
    let [admin, setAdmin] = useState(false);

    const cartContext = useContext(CartContext);

    const [courses, setCourses] = useState([]);
    const [coursesearch, setCourseSearch] = useState("");

    const id = localStorage.getItem('id');
    const token = localStorage.getItem('mytoken');



    const navigate = useNavigate();
    const goBack = () => {
        navigate('/admin')
    }


    const Users = () => {
        if (localStorage.getItem("role") === "User") {
            setUser(true);
        }
    };

    const Admins = () => {
        if (localStorage.getItem("role") === "Admin") {
            setAdmin(true);
        }
    };

    useEffect(() => {
        console.log("The use effect hook has been executed");

        axios.get("http://localhost:3009/courses").then((response) => {

            //response object contains the complete HTTP REQUEST with
            //returned data, status code, and headers. We need only 'data'
            setCourses(response.data);
        });
        Users();
        Admins();
    }, []);

    return (
        <div>
            {/* Admin interface for course list */}
            {admin && <Dashboard />}
            {admin &&
                <div className="mainBody">
                    <h4>Course List</h4>


                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>id</th>
                                <th align="left">Course Name
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <input
                                        type="text"
                                        align="center"
                                        placeholder="Search here"
                                        onChange={(e) => {
                                            setCourseSearch(e.target.value);
                                        }}
                                    />
                                </th>
                                <th>Details</th>

                            </tr>
                        </thead>
                        <tbody>
                            {courses.filter((course) => {
                                if (coursesearch == "") {
                                    return course;
                                } else if (course.coursename.includes(coursesearch)) {
                                    return course;
                                }
                            })
                                .map((course) => {
                                    return (
                                        // <div className="ULbox">
                                        <tr key={course.id}>
                                            <td>{course.coursecode}</td>
                                            <td>{course.coursename}</td>
                                            <td> {user ? (
                                                <Button variant="outline-primary"
                                                    onClick={() => {
                                                        navigate(`/user/view-courses/${course.id}`);
                                                    }}
                                                >
                                                    Click for details
                                                </Button>
                                            ) : (
                                                <div>
                                                    <Link to={`${course.id}`}>View Course Details</Link>
                                                </div>
                                            )}</td>
                                        </tr>
                                    )
                                }
                                )
                            }
                        </tbody>
                    </Table>
                    <Button className="right" variant="primary" type="reset" onClick={() => goBack()}>
                        Go Back
                    </Button>

                </div>}

            {/* User interface for course list */}
            {user &&
                <div className="course-list-body-user">User Interface
                    <div className="user-ops">
                        <div className="course-list-search">
                            <input
                                type="text"
                                align="center"
                                placeholder="Search here"
                                onChange={(e) => {
                                    setCourseSearch(e.target.value);
                                }}
                            />
                        </div>
                    </div>
                    <div className="course-list-container">

                        {courses.filter((course) => {
                            if (coursesearch == "") {
                                return course;
                            } else if (course.coursename.includes(coursesearch)) {
                                return course;
                            }
                        })
                            .map((course) => {
                                return (
                                    // <div className="ULbox">
                                    <div className="course-list-item" key={course.id}>
                                        <div>course code: <b>{course.coursecode}</b></div>
                                        <div>course name: <b>{course.coursename}</b></div>
                                        <div>
                                            <Button variant="outline-primary"
                                                onClick={() => {
                                                    navigate(`/user/view-courses/${course.id}`);
                                                }}
                                            >
                                                Click for details
                                            </Button>
                                            <Button variant="outline-primary"
                                                onClick={() => {


                                                    if (cartContext.courseList && cartContext.length !== 0) {
                                                        // alert("Already added")
                                                        if (cartContext.courseList.includes(course.id)) {
                                                            alert("Already in the cart");
                                                            return;
                                                        }
                                                        cartContext.courseInCart(token, course.id);
                                                        navigate(`/user/view-courses/cart/${id}`);
                                                    } else {
                                                        cartContext.courseInCart(token, course.id);
                                                        navigate(`/user/view-courses/cart/${id}`);

                                                    }

                                                }}
                                            >
                                                Add To Cart
                                            </Button>
                                        </div>
                                    </div>
                                )
                            }
                            )
                        }
                        {/* 
                        <div className="course-list-item">Lorem i
                            minima nesciunt dolorem! Officiis iure rerum voluptates a cumque velit </div>
                        <div className="course-list-item">Item content 2</div>
                        <div className="course-list-item">Item content 3</div>
                        <div className="course-list-item">Item content 4</div>
                        <div className="course-list-item">Item content 5</div> */}
                    </div>
                </div>
            }

        </div>
    );
}

export default ViewCourse;
