import { createBrowserRouter } from 'react-router'
import Root from './Root'
import Home from '../pages/Home'
import Gallery from '../pages/Gallery'
import WorkDetail from '../pages/WorkDetail'
import About from '../pages/About'
import Contact from '../pages/Contact'
import NotFound from '../pages/NotFound'

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
