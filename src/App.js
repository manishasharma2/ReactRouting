import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import Home from './components/Home.jsx';
import Dashboard from './components/Dashboard.jsx'
import About from './components/About.jsx'
import Navbar from './components/Navbar.jsx';
import ParamComp from './components/ParamComp.jsx';
import Courses from './components/Courses.jsx';
import MockTest from './components/MockTest.jsx';
import Reports from './components/Reports.jsx';
import NotFound from './components/NotFound.jsx';
const router =  createBrowserRouter(
  [
    {path: '/',
      element:
      <div>
        <Navbar/>
        <Home/>
      </div>
    },
   {path:'/about',
      element:
      <div>
        <Navbar/>
        <About/>
    </div>
    },
    {
      path:'/dashboard',
      element:
      <div>
        <Navbar/>
        <Dashboard/>
      </div>,
      children:[
        {
          path:'Courses',
          element:<Courses/>
        },
        {
          path:'mock-test',
          element:<MockTest/>
        },
        {
          path:'reports',
          element:<Reports/>
        }
      ]
    },
    {
      path:"/students/:id",
      element:
      <div>
        <Navbar/>
        <ParamComp/>
      </div>
    },
    {
      path:'*',
      element:<NotFound/>
    }
  ]
);
function App() {
  return (
    <div >
     
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
