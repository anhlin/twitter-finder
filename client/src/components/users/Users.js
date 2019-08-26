import React, { useContext } from 'react';
import UserInst from './UserInst';
import Spinner from '../layout/Spinner';
import TwitterContext from '../../context/twitter/twitterContext';

//No need to be a class, since no state
const Users = () => {
    const twitterContext = useContext(TwitterContext);

    const { loading, users } = twitterContext;

    if (loading) {
        return <Spinner />;
    } else {
        if (Array.isArray(users)) {
            return (
                <div className="user-ctn" style={userStyle}>
                    {users.map(user => (
                        <UserInst key={user.id} user={user} />
                    ))}
                </div>
            );
        } else {
            return <div> API error :(</div>;
        }
    }
};

const userStyle = {
    display: ' grid',
    gridTemplateColumns: 'repeat(4, 3fr)',
    gridGap: '1rem'
};

export default Users;
