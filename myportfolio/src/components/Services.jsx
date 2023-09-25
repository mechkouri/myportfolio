
import { Route, Routes, BrowserRouter as Router, NavLink } from 'react-router-dom';
import { Suspense, lazy } from "react";
const Experience = lazy(() => import("./Experience"))
const Education = lazy(() => import("./Education"))


const Services = () => {
  return (
    <section className="pt-20" id='services' >
      <Router>
        <div className="h3 mb-0 text-xl flex justify-center gap-2 lg:gap-6  text-white ">
          <NavLink to="/" className={({ isActive }) => (isActive ? 'text-gradient font-bold active-btn btn-p' : 'btn-p')} > <span>experience</span>  </NavLink>
          <NavLink to="/education" className={({ isActive }) => (isActive ? 'text-gradient font-bold active-btn btn-p' : 'btn-p')} > <span>education</span>  </NavLink>
        </div>
        <Suspense fallback={<h1>loading...</h1>}>
          <Routes>
            <Route path='*' element={<Experience />} />
            <Route path='/education' element={<Education />} />
          </Routes>
        </Suspense>
      </Router>
    </section>
  )
}

export default Services