import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './components/layout/Main';
import Home from './components/Home/Home';
import Courses from './components/Courses/Courses';
import Faq from './components/Faq/Faq';
import Blog from './components/Blog/Blog';
import Course from './components/Courses/Course/Course';

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
          path: '/course',
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
        }

      ]
    }
  ] )
  return (
    <div className="App">
      <RouterProvider router={ router }></RouterProvider>
    </div>
  );
}

export default App;
