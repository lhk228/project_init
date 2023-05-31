import { Outlet, Link, useNavigate } from "react-router-dom";


const MainLayout = () => {

  return (
    <>       
      <section>
        <Outlet></Outlet>
      </section>
    </>
  )
}

export default MainLayout;