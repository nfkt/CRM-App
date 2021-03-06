import { useState, useEffect, useParams } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import { toast, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Form, Button } from "react-bootstrap";

import './CourseEnquiryForm.css'

function CourseEnquiryForm(props) {
    
    const [inputs, setInputs] = useState({});
    const navigate = useNavigate();

    const [courses, setCourses] = useState([]);


    useEffect(() => {
        console.log('The use effect hook has been executed');

        axios
            .get('http://localhost:3009/courses')
            .then(response => {
                console.log('Promise fulfilled');
                console.log(response);
                //response object contains the complete HTTP REQUEST with
                //returned data, status code, and headers. We need only 'data'
                setCourses(response.data);
            })

    }, [])


    function handleChange(event) {
        const name = event.target.name;
        const value = event.target.value;

        setInputs(values => ({ ...values, [name]: value }))
    }

    function handleSubmit(event) {
        event.preventDefault();
        console.log(inputs);
        axios
            .post('http://localhost:3009/course-enquiries/', inputs)
            .then(response => {
                console.log('promise fulfilled')
                console.log(response)
                toast.success("Submitted Successfully", {
                    transition: Slide,
                    hideProgressBar: true,
                    autoClose: 5000
                })

                navigate("/home/");
            }).catch(error => {
                console.log(error);
            })
    }

    return (
        <div className="enquiryForm">

            <Form onSubmit={handleSubmit}>

                <Form.Group className="mb-3" >
                    <Form.Label>Name :
                        <span className="required">*</span>
                    </Form.Label>
                    <Form.Control type="text" required placeholder="Enter your name" name="name" value={inputs.name || ""} onChange={handleChange} pattern="[A-Za-z]+\s{1}[A-Za-z]+" onInvalid={(e) => { e.target.setCustomValidity('Enter your name') }} onInput={(e) => { e.target.setCustomValidity('') }} />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Email :
                        <span className="required">*</span>
                    </Form.Label>
                    <Form.Control type="email" required placeholder="Enter your email id" name="email" value={inputs.email || ""} onChange={handleChange} onInvalid={(e) => { e.target.setCustomValidity('Enter a valid email-id') }} onInput={(e) => { e.target.setCustomValidity('') }} />
                </Form.Group>

                <Form.Group className="mb-3" >
                    <Form.Label>Age :
                        <span className="required">*</span>
                    </Form.Label>
                    <Form.Control type="number" min="7" required placeholder="Enter your age" name="age" value={inputs.age || ""} onChange={handleChange} onInvalid={(e) => { e.target.setCustomValidity('Enter your age') }} onInput={(e) => { e.target.setCustomValidity('') }} />
                </Form.Group>

                <Form.Group className="mb-3" >
                    <Form.Label>Course Name :
                        <span className="required">*</span>
                    </Form.Label>
                    <Form.Select name="courseName" required aria-label="Default select example" defaultValue={inputs.courseName} value={inputs.courseName} onChange={handleChange}>
                        <option value="">Select a Course</option>
                        {courses.map(course =>
                            <option value={course.coursename}>{course.coursename}</option>
                        )}
                    </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    {/* Course Category: <Form.Check type="checkbox" label="Web Dev"  className="formCheckBox"/><Form.Check type="checkbox" label="IOT"  className="formCheckBox"/><Form.Check type="checkbox" label="ML"  className="formCheckBox"/> */}
                    <Form.Label for="qualification">Qualification :
                        <span className="required">*</span>
                    </Form.Label>

                    <Form.Select name="qualification" required aria-label="Default select example" defaultValue={inputs.qualification} value={inputs.qualification || ""} onChange={handleChange}>
                        <option value="">--choose an option--</option>
                        <option value="Web Dev">BTech</option>
                        <option value="ML">B.Sc</option>
                        <option value="IOT">Higher Secondary</option>
                    </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Label for="interest">Technology Preference :
                        <span className="required">*</span>
                    </Form.Label>
                    <Form.Select name="interest" required aria-label="Default select example" defaultValue={inputs.interest} value={inputs.interest || ""} onChange={handleChange}>
                        <option value="">--choose an option--</option>
                        <option value="Web Dev">Web Dev</option>
                        <option value="ML">ML</option>
                        <option value="IOT">AI</option>
                    </Form.Select>
                </Form.Group>

                <Button variant="success" type="submit">
                    Enquire
                </Button>&nbsp;&nbsp;&nbsp;
                <Button variant="primary" >
                    Go Back
                </Button>
            </Form>
        </div>
    )
}

export default CourseEnquiryForm;