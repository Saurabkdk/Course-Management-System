import { Navigate } from 'react-router-dom';
import { UseAuthentication } from './adminAuthentication'

export const RequireAuthentication = ({children}) => {
    const authentication = UseAuthentication();

    if(!authentication.admin){
        return <Navigate to='/' />
    }

  return children;
}
