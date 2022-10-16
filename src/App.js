import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './componenrts/Layout/Main';
import Home from './componenrts/Home';
import Login from './componenrts/Login';
import Register from './componenrts/Register';
import PrivateRoute from './componenrts/routes/PrivateRoute';
import Orders from './componenrts/Orders';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      errorElement: <h1>404 NOT FOUND PAGE</h1>,
      children: [
        {
          path: '/',
          element:<Home></Home>
    
        },
        {
          path: '/orders',
          element: <PrivateRoute><Orders></Orders></PrivateRoute>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/register',
          element: <Register></Register>
        }
]    },
    
  ])
  return (
    <div className="App">
    <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
