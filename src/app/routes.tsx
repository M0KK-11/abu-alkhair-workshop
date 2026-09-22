import { lazy } from 'react'
import { createBrowserRouter } from 'react-router'
import Root from './Root'

const Home = lazy(() => import('../pages/Home'))
const Gallery = lazy(() => import('../pages/Gallery'))
const WorkDetail = lazy(() => import('../pages/WorkDetail'))
const About = lazy(() => import('../pages/About'))
const Contact = lazy(() => import('../pages/Contact'))
const NotFound = lazy(() => import('../pages/NotFound'))

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: 'gallery', Component: Gallery },
      { path: 'work', Component: WorkDetail },
      { path: 'work/:slug', Component: WorkDetail },
      { path: 'featured-project', Component: WorkDetail },
      { path: 'about', Component: About },
      { path: 'contact', Component: Contact },
      { path: '*', Component: NotFound },
    ],
  },
])
