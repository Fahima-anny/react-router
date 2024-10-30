import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Compo/Home.jsx';
import About from './Compo/About.jsx';
import Contact from './Compo/Contact.jsx';
import Users from './Compo/Users.jsx';
import UserDetails from './Compo/UserDetails.jsx';
import Posts from './Compo/Posts.jsx';
import Post from './Compo/Post.jsx';
import PostDetails from './PostDetails.jsx';
import ErrorPage from './ErrorPage.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    errorElement: <ErrorPage></ErrorPage> ,
    children: [
      {
        path: '/about' ,
        element: <About></About>
      } ,
      {
        path: '/contact' ,
        element: <Contact></Contact>
      },
      {
        path: '/users' ,
        loader: () => fetch('https://jsonplaceholder.typicode.com/users') ,
        element: <Users></Users>
      },
      {
        path: '/users/:userId',
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`)  ,
        element: <UserDetails></UserDetails>
      },
      {
        path: '/posts' ,
        element: <Posts></Posts> ,
        loader: () => fetch('https://jsonplaceholder.typicode.com/posts')
      },
      {
        path: '/posts/:postId' ,
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`) ,
        element: <PostDetails></PostDetails>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    </StrictMode>,
)
