import { useContext } from 'react';
import AuthContent from '../context/AuthProvider';

const useAuth = () => {
    return useContext(AuthContent);
}

export default useAuth;
