import { AiOutlineTwitter, AiOutlineMedium, AiOutlineGithub } from "react-icons/ai"
import { LogoName } from "./LogoName"
import { BsDiscord, BsTelegram } from "react-icons/bs"

const Footer = () => {
  const texts = ['Terms and Conditions', 'Referral Terms', 'Media Kit']
  return (
    <div className="border-t">
      <div className="container mx-auto mt-10 flex flex-col items-center">
        <LogoName />
        <div className="flex items-center gap-10 text-2xl my-5">
          <AiOutlineTwitter />
          <AiOutlineMedium />
          <AiOutlineGithub />
          <BsTelegram />
          <BsDiscord />
        </div>
        <div className="flex items-center gap-5 text-sm">
          {
            texts?.map(text => <h1 key={text}>{text}</h1>)
          }
        </div>
      </div>
    </div>
  )
}

export default Footer