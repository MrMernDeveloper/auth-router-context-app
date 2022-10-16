import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from './Context/UserContext';

const Header = () => {
    const {user,logOut} = useContext(AuthContext)
    // console.log('context', abc)

    const handelSignOut = () => {
        logOut()
            .then(() => {
            console.log('log out')
            })
        .catch(error=>console.error(error))
    }

    return (
        <div>

            <div className="navbar bg-primary text-primary-content">
                <Link className="btn btn-ghost normal-case text-2xl">Awesome Auth</Link>
                <div className='mr-auto'>
                    <Link className="btn btn-ghost normal-case text-lg" to='/'>Home</Link>
                    <Link className="btn btn-ghost normal-case text-lg" to='/login'>Log In</Link>
                    <Link className="btn btn-ghost normal-case text-lg" to='/register'>Register</Link>
                    {user?.email && <span>Welcome, {user.email}</span>}
                    <button onClick={handelSignOut} className="btn btn-sm ml-2">Sign Out</button>
               </div>

            </div>
        </div>
    );
};

export default Header;