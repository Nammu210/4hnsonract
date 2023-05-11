import React from "react";
import { Link } from "react-router-dom";
import Nav from "./Nav";
import './Stu.css';

function Student() {
    return (
        <>
            <Nav />
            <h1>Student Detail </h1>



            <button className="button">Add New Student</button>

            <table border='1px' className="back" cellPadding={20}>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Course</th>
                    <th>Batch</th>
                    <th>Change</th>
                </tr>

            </thead>
            <tbody>
                <tr>
                    <td>John</td>
                    <td>24</td>
                    <td>MERN</td>
                    <td>Octomber</td>
                    <td><Link>Edit</Link></td>
                </tr>



                <tr>
                    <td>Ram</td>
                    <td>24</td>
                    <td>MERN</td>
                    <td>January</td>
                    <td><Link>Edit</Link></td>
                </tr>



                <tr>
                    <td>Shiv</td>
                    <td>25</td>
                    <td>MERN</td>
                    <td>February</td>
                    <td><Link>Edit</Link></td>
                </tr>



                <tr>
                    <td>Krishna</td>
                    <td>24</td>
                    <td>MERN</td>
                    <td>May</td>
                    <td><Link>Edit</Link></td>
                </tr>



                <tr>
                    <td>Ganesh</td>
                    <td>24</td>
                    <td>MERN</td>
                    <td>July</td>
                    <td><Link>Edit</Link></td>
                </tr>



                <tr>
                    <td>Hanuman</td>
                    <td>24</td>
                    <td>MERN</td>
                    <td>April</td>
                    <td><Link>Edit</Link></td>
                </tr>
            </tbody>
        </table >
        </>

        
    )


}
export default Student