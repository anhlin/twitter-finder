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
        if (Array.isArray(users) && users.length > 0) {
            return (
                <div className="user-ctn">
                    <div className="row">
                        {users.map(user => (
                            <div
                                className="col-sm-12 col-md-6 col-lg-4 col-xl-3"
                                key={user.id}
                            >
                                <UserInst key={user.id} user={user} />
                            </div>
                        ))}
                    </div>
                </div>
            );
        } else if (Array.isArray(users)) {
            return <div></div>;
        } else {
            return (
                <div className="text-center pt-4">
                    <h1 className="display-3">No results.</h1>
                    <h1 className="display-5">(Try again)</h1>
                </div>
            );
        }
    }
};

export default Users;
