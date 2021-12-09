import './Dashboard.css'

import { NavDropdown } from 'react-bootstrap';
import { Link } from "react-router-dom";
import UserContext from "../../context/user-context";
import { useState, useEffect, useContext } from "react";


function Dashboard() {
    const userContext = useContext(UserContext);

    console.log(userContext.userDetails);
    const role = localStorage.getItem('role');
    const token = localStorage.getItem('mytoken');
    const username = localStorage.getItem('username');

    return (
        <div className="dash">
            {/* Admin name  */}
            {role === 'Admin' && token && username === 'admin' && <div className="dashboarditem">Admin</div>}

            {/* Manager  */}
            {role === 'Manager' && token && <div className="dashboarditem">Manager: {username}</div>}

            {/* Admin Dashboard */}
            {role === 'Admin' && token && username === 'admin' &&
                <div classname="dashboarditem">
                    <div className="item">
                        <NavDropdown title="Course" id="basic-nav-dropdown">
                            <NavDropdown.Item ><Link to="/admin/course">Course Management</Link></NavDropdown.Item>
                            <NavDropdown.Item ><Link to="/admin/course-enquiry">Course Enquiry Management</Link></NavDropdown.Item>
                        </NavDropdown>
                    </div>
                    <div className="item">
                        <NavDropdown title="Resource" id="basic-nav-dropdown">
                            <NavDropdown.Item >  < Link to="/admin/resource">Resource Management</Link></NavDropdown.Item>
                            <NavDropdown.Item >< Link to="/admin/resource-enquiry">Resource Enquiry Management</Link></NavDropdown.Item>
                        </NavDropdown>
                    </div>
                </div>}

            {/* Manager Dashboard */}
            {role === 'Manager' && token &&
                <div classname="dashboarditem">
                    <div className="item">
                        <NavDropdown className="" title="View" id="basic-nav-dropdown">
                            <NavDropdown.Item>
                                <Link to="/manager/view-course-enquiry">
                                    {" "}
                                    View Course Enquiry{" "}
                                </Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                <Link to="/manager/view-resourse-enquiry">
                                    View Resource Enquiry
                                </Link>
                            </NavDropdown.Item>
                        </NavDropdown>
                    </div>

                    <div className="item">
                        <NavDropdown title="Sales Pipeline" id="basic-nav-dropdown">
                            <NavDropdown.Item>
                                {" "}
                                <Link to="/manager/view-chart">Chart View</Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                {" "}
                                <Link to="/manager/view-table">Table View</Link>
                            </NavDropdown.Item>

                        </NavDropdown>
                    </div>
                </div>}

        </div>

    )
}

export default Dashboard;