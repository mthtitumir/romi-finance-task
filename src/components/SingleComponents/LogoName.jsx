import Image from "next/image";

export const LogoName = () => {
    return (
        <div className="flex items-center">
            <Image className="text-white" src={'https://i.ibb.co/HqH6yGP/romi-finance.png'} alt="romi finance logo" width={50} height={50} />
            <h1 className="text-2xl">Romi Finance</h1>
        </div>
    )
}
