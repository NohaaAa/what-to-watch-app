import {NextComponentType, NextPageContext} from 'next';
import {useRouter} from 'next/router';
import {useEffect, useState} from 'react';

const RouteGuard: NextComponentType<NextPageContext,
    any>
    = ({children}) => {
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
        console.log("URL", url)
        const publicPaths = ['/login', '/signup', '/', '/series', '/movies'];
        const token = sessionStorage.getItem('token');
        if(!publicPaths.includes(url) && !token) {
            console.log("HERE")
            setAuthorized(false);
            router.push('/login');
        } else {
            setAuthorized(true);
        }
        console.log("AUTH", authorized)
    }
    return (
        <>
            {authorized && children}
        </>
    )
}
export default RouteGuard;
