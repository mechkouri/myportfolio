import { FaGithub, FaLinkedin,  FaPhone, FaRegEnvelope, FaTwitter, FaWhatsapp } from 'react-icons/fa'
import useFetch from '../hooks/useFetch'
import { useEffect, useState } from 'react'




const SocialMedia = () => {
    const [urls, setUrls] = useState([])
    const {data, loading, errorUrl} = useFetch("/social-medias")

    useEffect(()=>{
        data && setUrls(data)
       },[data])

  return (
    <>
    {loading ? "loading ..." : urls.map(url => (
        <div  className='flex flex-row space-x-6' key={url.id}>
                <a href={url.attributes.githubeURL} target="_blank" rel="noopener noreferrer">
                <FaGithub strokeWidth={0}  />
                </a>
                <a href={url.attributes.linkedinURL} target="_blank" rel="noopener noreferrer">
                <FaLinkedin strokeWidth={0} />
                </a>
                <a href={url.attributes.twitterURL} target="_blank" rel="noopener noreferrer">
                    <FaTwitter strokeWidth={0} />
                </a>
                <a href={url.attributes.whatssapURL} target="_blank" rel="noopener noreferrer">
                    <FaWhatsapp strokeWidth={0}  />
                </a>
                <a href={url.attributes.emailURL} target="_blank" rel="noopener noreferrer">
                    <FaRegEnvelope strokeWidth={0} />
                </a>
                <a href={url.attributes.phoneURL} target="_blank" rel="noopener noreferrer">
                    <FaPhone strokeWidth={0} />
                </a>
                </div>
        ))}
      </>
  )
}

export default SocialMedia