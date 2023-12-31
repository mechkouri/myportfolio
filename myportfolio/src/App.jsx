

import { useEffect, useState } from "react"
import useFetch from "./hooks/useFetch";
import { Error, Loading } from "./components";
import { About, Banner, Contact, Footer, Header, Navbar, Services, Skills, Works } from "./Sections";



function App() {
  const [information, setInformation] = useState([]);
  const { data, loading, error } = useFetch("/informations?populate=*")

  useEffect(() => {
    data && setInformation(data)
  }, [data])
  return (

      <div className='bg-site bg-no-repeat bg-cover overflow-hidden'>
        {loading ? <Loading /> : error ? (<Error />) : information.map((information, idx) => (
        <div key={idx}>
            <Header />
            <Banner information={information}  />
            <Navbar />
            <About />
            <Services />
            <Skills />
            <Works />
            <Contact />
            <Footer />
        </div>
        ))}
      </div>
    
  )
}

export default App
