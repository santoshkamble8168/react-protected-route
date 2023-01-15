import React from 'react'
import Navigation from '../components/Navigation'
import { Card } from 'react-bootstrap';

const Dashboard = () => {
  return (
    <>
      <Navigation />
      <Card style={{ width: '18rem' }} className="mt-3">
        <Card.Body>
          <Card.Title>Dashboard</Card.Title>
          <Card.Text>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  )
}

export default Dashboard