import React from 'react';

// Store
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

// Styles
import { Row, RessourceBoard } from '../styles/Dashboard';

const UserElem = ({ user }) => {
    const history = useHistory();
    return (
        <Row onClick={() => history.push(`/user/${user.id}`)}>
            <td>{user.firstname}</td>
            <td>{user.lastname}</td>
            <td>{user.state}</td>
        </Row>
    )
};

const Dashboard = () => {
    const db = useSelector(state => state.db);

    return (
        <>
            <RessourceBoard>
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {db.map(user => <UserElem user={user} key={user.id} />)}
                </tbody>
            </RessourceBoard>
        </>
    )
}

export default Dashboard;