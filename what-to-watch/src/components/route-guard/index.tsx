import {NextComponentType, NextPageContext} from 'next';
import {useRouter} from 'next/router';
import {useEffect, useState} from 'react';
import {IUser} from '@interfaces/user.interface';

const RouteGuard: NextComponentType<NextPageContext,
    any,
    { userInfo: {userInfo?: IUser, loading: boolean}}>
    = ({children, userInfo}) => {
    const router = useRouter();
    const [authorized, setAuthorized] = useState(false);
    useEffect(() => {
        authCheck(router.pathname);
        const hideContent = () => setAuthorized(false);
        router.events.on('routeChangeStart', hideContent);

        router.events.on('routeChangeComplete', authCheck);

        return () => {
            router.events.off('routeChangeStart', hideContent);
            router.events.off('routeChangeComplete', authCheck);
        }
    }, [])
    const authCheck = (url: string) => {
        const publicPaths = ['/login', '/signup', '/', '/series', '/movies'];
        const uuid = sessionStorage.getItem('uuid');
        if(!userInfo.userInfo && !publicPaths.includes(url) && !uuid) {
            setAuthorized(false);
            router.push('/login');
        } else {
            setAuthorized(true);
        }
    }
    return (
        <>
            {authorized && children}
        </>
    )
}
export default RouteGuard;
