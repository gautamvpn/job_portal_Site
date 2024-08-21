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
import ProtectedRoute from './components/protected_route'


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
        element:(
          <ProtectedRoute>
        <Onboarding/>
        </ProtectedRoute>
        ),
      },
      {
        path:'jobs',
        element:(
          <ProtectedRoute>
        <JobListing/>
        </ProtectedRoute>
        ),
      },
      {
        path:'joblisting:id',
        element:(
          <ProtectedRoute>
        <JobPage/>
        </ProtectedRoute>
        ),
      },
      {
        path:'post-job',
        element:(
          <ProtectedRoute>
        <PostJob/>
        </ProtectedRoute>
        ),
      },
      {
        path:'saved-jobs',
        element:(
          <ProtectedRoute>
        <Savedjob/>
        </ProtectedRoute>
        ),
      },
      {
        path:'my-jobs',
        element:(
          <ProtectedRoute>
        <Myjob/>
        </ProtectedRoute>
        ),
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
