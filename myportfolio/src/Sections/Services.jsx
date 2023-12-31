
import { Route, Routes, BrowserRouter as Router, NavLink } from 'react-router-dom';
import { Education, Experience } from '../components';





const Services = () => {
  return (
    <section className="pt-10 lg:pt-20" id='services' >
      <Router>
        <div className="h3 mb-0 text-xl flex justify-center gap-2 lg:gap-6  text-white ">
          <NavLink to="/" className={({ isActive }) => (isActive ? 'text-gradient font-bold active-btn btn-p' : 'btn-p')} > <span>experience</span>  </NavLink>
          <NavLink to="/education" className={({ isActive }) => (isActive ? 'text-gradient font-bold active-btn btn-p' : 'btn-p')} > <span>education</span>  </NavLink>
        </div>
          <Routes>
            <Route path='*' element={<Experience />} />
            <Route path='/education' element={<Education />} />
          </Routes>
      </Router>
    </section>
  )
}

export default Services