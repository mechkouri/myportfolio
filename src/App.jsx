import { About, Banner, Contact, Header, Navbar, Services, Skills, Works } from "./components"


function App() {
  

  return (
    <>
      <div className='bg-site bg-no-repeat bg-cover overflow-hidden'>
         <Header />
         <Banner />
         <Navbar />
         <About />
         <Services />
         <Skills />
         <Works />
         <Contact />
         <div className=" flex h-[50px] lg:hidden"></div>
      </div>
    </>
  )
}

export default App
