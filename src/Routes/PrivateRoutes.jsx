import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import { SyncLoader } from 'react-spinners';

const PrivateRoutes = ({ children }) => {

    const { user, loading } = useContext(AuthContext);

    const location = useLocation();

    if (loading) {
        return <div className='flex justify-center my-6'>
               <SyncLoader color="#000000" />
             </div>
    }

    if (user) {
        return children;
    }
    return (<Navigate state={{ from: location }} to='/login' replace></Navigate>);
};
export default PrivateRoutes;