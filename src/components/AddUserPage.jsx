import axios from 'axios';
import React, { useState } from 'react';
import { Button, Card, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


function AddUserPage() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [age, setAge] = useState('');
    const [premiumMember, setPremiumMember] = useState(false);

    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     // Add the logic to handle form submission
    //     console.log({ name, email, age, premiumMember });
    // };
const SubmitUser=async(event)=>{
event.preventDefault
 const response =await axios.post(
    'http://localhost:3000/users/',
    {
name:name,
email:email,
age:parseInt(age),
premiumMember:premiumMember

    
    }
)
const id=response.data.id
Navigate('/users/'+id)
}
    return (
        <div className="row justify-content-center">
            <div className="md-4">
                <Card className="p-4">
                    <Form onSubmit={SubmitUser}>
                        <Form.Group className='mb-3'>
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                type='text'
                                required

                                placeholder='Enter name'
                                value={name}
                                onChange={(event) => setName(event.target.value)}
                            />
                        </Form.Group>
                        <Form.Group className='mb-3'>
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type='email'
                                required
                                placeholder='name@example.com'
                                value={email}
                                onChange={(event) => setEmail(event.target.value)}
                            />
                        </Form.Group>
                        <Form.Group className='mb-3'>
                            <Form.Label>Age</Form.Label>
                            <Form.Control
                                type='number'
                                required

                                placeholder='Age'
                                value={age}
                                onChange={(event) => setAge(event.target.value)}
                            />
                        </Form.Group>
                        <Form.Group className='mb-3'>
                            <Form.Check
                                type='checkbox'
                                label='Premium Member'
                                checked={premiumMember}
                                onChange={(event) => setPremiumMember(event.target.checked)}
                            />
                        </Form.Group>
                        <Button variant='primary' type='submit'>
                            Add New User
                        </Button>
                    </Form>
                </Card>
            </div>
        </div>
    );
}

export default AddUserPage;
