import useFetch from '../hooks/useFetch'
import { useEffect, useState } from 'react'
import { TypeAnimation } from 'react-type-animation'



const Profils = () => {
    const [profils, setProfils] = useState([])
    const {data, loading, error} = useFetch("/profils")

    useEffect(()=>{
        data && setProfils(data)
       },[data])

  return (
    <>
        {loading ? "loading ..." : profils.map(profil => (
                    <TypeAnimation key={profil.id} sequence={  [profil.attributes.profile1, 2000, profil.attributes.profile2 , 2000 ,profil.attributes.profile3, 2000]}
                        speed={50}
                        className='text-accent'
                        wrapper='span'
                        repeat={Infinity}
                    />
        ))}
    </>
  )
}

export default Profils