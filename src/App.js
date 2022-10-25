import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './components/layout/Main';
import Home from './components/Home/Home';
import Courses from './components/Courses/Courses';

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
          element: <Courses></Courses>
        },
        {
          path: '/faq',
          element:
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
