import clouds from '../images/clouds-photo.webp';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import '../index.css';
import axios from 'axios';
import { useState } from 'react';

const Content = () => {
  const [formData, setFormData] = useState({
    name: "", 
    email: "", 
    phone: "", 
    description: "", 
    services: "" 
  })

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
  }

  const data = {
    name: formData.name,
    email: formData.email,
    phone: formData.phone,
    description: formData.description,
    services: formData.services
  }

  axios.post('http://formz.in/api/task', data)
    .then((response) => {
      if (response.status === 201) {
        console.log('Post successful:', response.data);
      }else {
        console.error('Unexpected status code:', response.status);
      }
    })
    .catch((error) => {
      if (error.response && error.response.data) {
        console.error('Error:', error.response.data);
      } else {
        console.error('Error occurred:', error.message);
      }
    })

  return (
    <div style={{ display: "flex", flexDirection: "row", height: "auto" }}>
      <div className='col-md-6' style={{ backgroundImage: `url(${clouds})`, backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
      </div>
      <div className='col-md-6 d-flex flex-column align-items-center form' style={{ marginTop: "140px", marginBottom: "100px" }}>
        <div className='text-start' style={{ maxWidth: "500px" }}>
          <div className='d-flex flex-column align-items-center'>
            <h1 className='text-start mb-4 heading' style={{ fontSize: "3rem" }}>Let's level up your<br /> brand, together</h1>
            <p className='text-secondary text-start'>You can reach us anytime via <strong>hi@rifkiui.com</strong></p>
          </div>
          <div className='d-flex align-items-start' style={{ width: "100%" }}>
            <Form onSubmit={handleSubmit} style={{ width: "100%" }}>
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label style={{ fontSize: "smaller" }}>Name</Form.Label>
                <Form.Control type="text" name='name' value={formData.name} onChange={handleChange} placeholder="Your name" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label style={{ fontSize: "smaller" }}>Email</Form.Label>
                <Form.Control type="email" name='email' value={formData.email} onChange={handleChange} placeholder="Enter email" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPhone">
                <Form.Label style={{ fontSize: "smaller" }}>Phone number</Form.Label>
                <Form.Control type="text" name='phone' value={formData.phone} onChange={handleChange} placeholder="+1 (555) 000-0000" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label style={{ fontSize: "smaller" }}>How can we help?</Form.Label>
                <Form.Control as="textarea" rows={3} name='description' value={formData.description} onChange={handleChange} placeholder="Tell us a little about the project..." />
              </Form.Group>
              <Form.Label style={{ fontSize: "smaller" }}>Services</Form.Label>
              <div className='d-flex flex-row mb-4'>
                <div className='d-flex flex-column me-4'>
                  <div className="form-check mb-2">
                    <input className="form-check-input" type="checkbox" name='services' value={formData.services} onChange={handleChange} id="defaultCheck1" />
                    <label className="form-check-label" htmlFor="defaultCheck1">
                      Website design
                    </label>
                  </div>
                  <div className="form-check mb-2">
                    <input className="form-check-input" type="checkbox" name='services' value={formData.services} onChange={handleChange} id="defaultCheck1" />
                    <label className="form-check-label" htmlFor="defaultCheck1">
                      UX design
                    </label>
                  </div>
                  <div className="form-check mb-2">
                    <input className="form-check-input" type="checkbox" name='services' value={formData.services} onChange={handleChange} id="defaultCheck1" />
                    <label className="form-check-label" htmlFor="defaultCheck1">
                      User research
                    </label>
                  </div>
                </div>
                <div className='d-flex flex-column'>
                  <div className="form-check mb-2">
                    <input className="form-check-input" type="checkbox" name='services' value={formData.services} onChange={handleChange} id="defaultCheck1" />
                    <label className="form-check-label" htmlFor="defaultCheck1">
                      Content Creation
                    </label>
                  </div>
                  <div className="form-check mb-2">
                    <input className="form-check-input" type="checkbox" name='services' value={formData.services} onChange={handleChange} id="defaultCheck1" />
                    <label className="form-check-label" htmlFor="defaultCheck1">
                      Strategy & consulting
                    </label>
                  </div>
                  <div className="form-check mb-2">
                    <input className="form-check-input" type="checkbox" name='services' value={formData.services} onChange={handleChange} id="defaultCheck1" />
                    <label className="form-check-label" htmlFor="defaultCheck1">
                      Other
                    </label>
                  </div>
                </div>
              </div>
              <Button variant="dark" type="submit" style={{ width: "100%" }}>
                Send message
              </Button>
            </Form>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Content;
