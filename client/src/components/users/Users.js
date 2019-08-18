import React from 'react';
import UserInst from './UserInst';
import Spinner from '../layout/Spinner';

//No need to be a class, since no state
const Users = ({ users, loading }) => {
    if (loading) {
        return <Spinner />;
    } else {
        if (Array.isArray(users)) {
            return (
                <div style={userStyle}>
                    {users.map(user => (
                        <UserInst key={user.id} user={user} />
                    ))}
                </div>
            );
        } else {
            return <div> API error </div>;
        }
    }
};

const userStyle = {
    display: ' grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '1rem'
};

export default Users;
