import { lazy, Suspense } from 'react';
import Loading from '~/components/Loading';
const Home = lazy(() => import('../pages/Home'));
const Clothing = lazy(() => import('../pages/Clothing'));
const Shoes = lazy(() => import('../pages/Shoes'));
const Accessories = lazy(() => import('../pages/Accessories'));
const Watches = lazy(() => import('../pages/Watches'));
const Gifts = lazy(() => import('../pages/Gifts'));
const Grooming = lazy(() => import('../pages/Grooming'));
const About = lazy(() => import('../pages/About'));

export const publishRoutes = [
    {
        index: true,
        element: (
            <Suspense fallback={<Loading />}>
                <Home title="MR PORTER" />
            </Suspense>
        ),
    },
    {
        path: 'clothing',
        element: (
            <Suspense fallback={<Loading />}>
                <Clothing title="Men's Designer Clothes | MR PORTER" />
            </Suspense>
        ),
    },
    {
        path: 'shoes',
        element: (
            <Suspense fallback={<Loading />}>
                <Shoes title="Men's Designer Shoes | MR PORTER" />
            </Suspense>
        ),
    },
    {
        path: 'accessories',
        element: (
            <Suspense fallback={<Loading />}>
                <Accessories title="Designer Accessories | MR PORTER" />
            </Suspense>
        ),
    },
    {
        path: 'watches',
        element: (
            <Suspense fallback={<Loading />}>
                <Watches title="Men's Luxury Watches | MR PORTER" />
            </Suspense>
        ),
    },
    {
        path: 'gifts',
        element: (
            <Suspense fallback={<Loading />}>
                <Gifts title="Luxury Designer Gifts | MR PORTER" />
            </Suspense>
        ),
    },
    {
        path: 'grooming',
        element: (
            <Suspense fallback={<Loading />}>
                <Grooming title="Skincare, Shaving & Cologne | MR PORTER" />
            </Suspense>
        ),
    },
    {
        path: 'about',
        element: (
            <Suspense fallback={<Loading />}>
                <About title="About Us | MR PORTER" />
            </Suspense>
        ),
    },
];