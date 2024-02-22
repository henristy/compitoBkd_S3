import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getUsers } from '../slice/userSlice';
import { Image, Row, Table } from 'react-bootstrap';
import MessageError from './MessageError';
import Loading from './Loading';



export default function UsersComponent() {
    const users = useSelector(state => state.users);
    const dispatch = useDispatch();

    useEffect(() => {
        !users.results && dispatch(getUsers());

    }, [dispatch, users.results]);

    return (
        users.results &&
        <Row md={3} className='mt-5'>

            {users.loading && <Loading />}
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>Avatar</th>
                        <th>Name</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    {users.error ? <MessageError err={users.error} /> :
                        users.results.map((user, i) => <tr key={i} user={user}>
                            <td><Image className='me-2' roundedCircle src={user.avatar_urls['96']} alt={user.name + "'s avatar"} /></td>
                            <td>{user.name}</td>
                            <td>{user.description}</td>
                        </tr>)
                    }
                </tbody>
            </Table>
        </Row >

    );
}
