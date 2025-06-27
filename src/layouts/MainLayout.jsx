import { Outlet } from "react-router"

const MainLayout = () => {
    return(
        <div>
            Navbar

            Home contents changeable on requests
            <Outlet />

            Footer
        </div>
    )
}

export default MainLayout