import React, { useState } from 'react'
import { Navigate, useNavigate } from "react-router-dom";
import { Button, Container, Form, Card } from "react-bootstrap";

const Login = () => {
    const navigate = useNavigate()
    const user = localStorage.getItem('user')

    const [email, setEmail] = useState("")
    const [passworrd, setPassworrd] = useState("")

    const HandleLogin = (e) => {
        e.preventDefault()
        if (email === "" || passworrd === "") //handle validation here
            return

        if (email === "admin@admin.com" || passworrd === "password") //verify user here or call an API
            localStorage.setItem('user', JSON.stringify({ email, passworrd }))
        navigate("/dashboard")
    }


    if (user) //if user is already loggedin redirect to dashboard page
        return <Navigate to="/dashboard" />

    return (
        <Card style={{ width: '50rem', margin: "0 auto" }} className="mt-3">
            <Card.Body>
                <Container>
                    <Card.Title>Login</Card.Title>
                    <Form onSubmit={HandleLogin}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" onChange={(e) => setPassworrd(e.target.value)} />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Login
                        </Button>
                    </Form>
                </Container>
            </Card.Body>
        </Card>

    )
}

export default Login