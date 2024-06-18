import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Card, Form } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

function EditUserPage() {
    const { userId } = useParams();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [age, setAge] = useState('');
    const [premiumMember, setPremiumMember] = useState(false);
    const [error, setError] = useState('');

    const fetchUser = async () => {
        try {
            const response = await axios.get(`http://localhost:3000/users/${userId}`);
            const user = response.data;
            setName(user.name);
            setEmail(user.email);
            setAge(user.age);
            setPremiumMember(user.premiumMember);
        } catch (err) {
            setError('Error fetching user data. Please try again later.');
            console.error('Error fetching user:', err.response?.data || err.message);
        }
    };

    useEffect(() => {
        fetchUser();
    }, [userId]);

    const updatedUser = async (event) => {
        event.preventDefault();
        try {
            await axios.patch(
                `http://localhost:3000/users/${userId}`,
                {
                    name: name,
                    email: email,
                    age: parseInt(age),
                    premiumMember: premiumMember
                }
            );
            alert('User updated successfully');
        } catch (err) {
            setError('Error updating user data. Please try again later.');
            console.error('Error updating user:', err.response?.data || err.message);
        }
    };

    return (
        <div className="row justify-content-center">
            <div className="col-md-6">
                <Card className="p-4">
                    {error && <p className="text-danger">{error}</p>}
                    <Form onSubmit={updatedUser}>
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
                            Save Changes
                        </Button>
                    </Form>
                </Card>
            </div>
        </div>
    );
}

export default EditUserPage;
