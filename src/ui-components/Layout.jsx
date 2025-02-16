import Header from "../components/Header"
import Sidebar from "../components/Sidebar"

function Layout({children}) {
    return (
     <div className="dashboard mt-3">
          <div className="container mx-auto">
            <div className="dashboard__container rounded-[15px] p-[15px] bg-white ">
            <Header/>
        <div className="flex">
        <Sidebar/>
        <div className="layout-container p-[25px]">
            {children}
        </div>
        </div>
            </div>
      
       </div>
     </div>
    )
}

export default Layout
