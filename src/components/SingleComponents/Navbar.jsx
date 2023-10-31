
import PrimaryButton from "./PrimaryButton";
import { BiWallet } from 'react-icons/bi';
import { AiFillCompass } from 'react-icons/ai';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { LogoName } from "./LogoName";

const Navbar = () => {
  const navItems = ["Home", "Dashboard", "NFT", "Earn", "Buy", "Referrals", "Ecosystem", "About"];

  return (
    <div className="shadow-md border-b border-b-gray-600 ">
      <div className="flex flex-nowrap items-center justify-between mx-8 my-2">
        {/* logo & name  */}
        <LogoName />
        {/* nav tabs  */}
        <div>
          <ul className="flex gap-5 text-base ">
            {
              navItems.map(item => <li className="text-gray-400" key={item}>{item}</li>)
            }
          </ul>
        </div>
        {/* right tabs  */}
        <div className="flex items-center gap-3">
          <div>
            <PrimaryButton href={'/trade'} text={'Trade'} />
          </div>
          <div className="flex items-center primary-border px-4 py-2 gap-2 gray-hover">
            <BiWallet className="" />
            <h1 className="text-sm ">Connect Wallet</h1>
          </div>
          <div className="flex items-center primary-border px-4 py-2 gap-2 gray-hover">
            <AiFillCompass className="" />
            <h1 className="text-sm ">|</h1>
            <BsThreeDotsVertical className="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar