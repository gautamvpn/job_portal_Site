import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import './App.css'
import AppLayout from './Pages/AppLayout'
import LoadingPage from './Pages/LoadingPage'
import Onboarding from './Pages/Onboarding'
import JobListing from './Pages/JobListing'
import JobPage from './Pages/JobPage'
import PostJob from './Pages/PostJob'
import Savedjob from './Pages/Saved_job'
import Myjob from './Pages/My_job'
import { ThemeProvider } from './components/theme-provider'


const router = createBrowserRouter([
  {
    element: <AppLayout/>,
    children:[
      {
       path:'/',
       element:<LoadingPage/>
      },
      {
        path:'onboarding',
        element:<Onboarding/>
      },
      {
        path:'joblisting',
        element:<JobListing/>
      },
      {
        path:'joblisting:id',
        element:<JobPage/>
      },
      {
        path:'post-job',
        element:<PostJob/>
      },
      {
        path:'saved-jobs',
        element:<Savedjob/>
      },
      {
        path:'my-jobs',
        element:<Myjob/>
      },
    ]
  }
])


function App() {
  return (

    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      
      <RouterProvider router={router}></RouterProvider>

    </ThemeProvider>
  
  )
}

export default App
