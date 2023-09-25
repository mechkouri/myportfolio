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
    {loading ? "loading ..." : urls.map(url => (<>
                <a href={url.attributes.githubeURL} target="_blank" rel="noopener noreferrer">
                <FaGithub />
                </a>
                <a href={url.attributes.linkedinURL} target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
                </a>
                <a href={url.attributes.twitterURL} target="_blank" rel="noopener noreferrer">
                    <FaTwitter />
                </a>
                <a href={url.attributes.whatssapURL} target="_blank" rel="noopener noreferrer">
                    <FaWhatsapp />
                </a>
                <a href={url.attributes.emailURL} target="_blank" rel="noopener noreferrer">
                    <FaRegEnvelope />
                </a>
                <a href={url.attributes.phoneURL} target="_blank" rel="noopener noreferrer">
                    <FaPhone />
                </a>
        </>
        ))}
      </>
  )
}

export default SocialMedia