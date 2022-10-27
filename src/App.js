import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './components/layout/Main';
import Home from './components/Home/Home';
import Courses from './components/Courses/Courses';
import Faq from './components/Faq/Faq';
import Blog from './components/Blog/Blog';
import Course from './components/Courses/Course/Course';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import PrivetRout from './components/PrivetRoute/PrivetRout';
import Premium from './components/PrivetRoute/Premium/Premium';
import { Toaster } from 'react-hot-toast';

function App () {
  const router = createBrowserRouter( [
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: '/courses',
          element: <Courses></Courses>,
          loader: () => fetch( 'https://education-server.vercel.app/courses' )
        },
        {
          path: '/faq',
          element: <Faq></Faq>
        },
        {
          path: '/blog',
          element: <Blog></Blog>
        },
        {
          path: '/course/:id',
          loader: ( { params } ) => fetch( `https://education-server.vercel.app/courses/${ params.id }` ),
          element: <Course></Course>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/register',
          element: <Register></Register>
        },
        {
          path: '/premium-access/:id',
          loader: ( { params } ) => fetch( `https://education-server.vercel.app/courses/${ params.id }` ),
          element: <PrivetRout><Premium></Premium></PrivetRout>
        },
      ]
    },
    {
      path: '*',
      element: <div><h2 className='text-danger mt-5'>Opps!! No address found.</h2></div>
    }
  ] )
  return (
    <div className="App">
      <RouterProvider router={ router }></RouterProvider>
      <Toaster />
    </div>
  );
}

export default App;
