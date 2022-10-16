import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from './Context/UserContext';

const Header = () => {
    const {user} = useContext(AuthContext)
    // console.log('context', abc)
    return (
        <div>

            <div className="navbar bg-primary text-primary-content">
                <Link className="btn btn-ghost normal-case text-2xl">Awesome Auth</Link>
                <div className='mr-auto'>
                    <Link className="btn btn-ghost normal-case text-lg" to='/'>Home</Link>
                    <Link className="btn btn-ghost normal-case text-lg" to='/login'>Log In</Link>
                    <Link className="btn btn-ghost normal-case text-lg" to='/register'>Register</Link>
                    <button className="btn btn-sm">Sign Out</button>
                    {user?.email && <span>Welcome, { user.email}</span> }
               </div>

            </div>
        </div>
    );
};

export default Header;