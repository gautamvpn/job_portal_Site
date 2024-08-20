import Header from "@/components/Header"
import { Outlet } from "react-router-dom"

const AppLayout = () => {
  return (
    <div>
      <div className="grid-background"></div>
      <main className="min-h-screen container">
      
       <Header/>
      <Outlet/>
      </main>

      <div className="text-center p-6 mt-4 bg-gray-800 ">
        With love ❤️ vipin.........
      </div>
    </div>
  )
}

export default AppLayout
