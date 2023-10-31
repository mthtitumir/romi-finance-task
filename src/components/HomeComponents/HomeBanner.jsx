import React from 'react'
import PrimaryButton from '../SingleComponents/PrimaryButton'
import Image from 'next/image'

const HomeBanner = () => {
    const data = [{ img: 'https://zomi.finance/static/media/ic_trading.2c53815a.svg', title: 'Total Trading Volume', amount: 0 }, { img: 'https://zomi.finance/static/media/ic_totaluser.ae09b310.svg', title: 'Total Users', amount: 0 }, { img: 'https://zomi.finance/static/media/ic_stats.f0a18011.svg', title: 'Open Interest', amount: 0 }]
    return (
        <div className='my-24'>
            <div className='w-1/2  flex flex-col gap-8 items-start'>
                <h1 className='text-6xl'>Decentralized Perpetual Exchange</h1>
                <p className='text-xl w-3/4 text-gray-500'>Trade BTC, ETH, AVAX and other top cryptocurrencies with up to 30x leverage directly from your wallet</p>
                <PrimaryButton href={'/trade'} text={'Launch Exchange'} />
            </div>
            <div className='grid grid-cols-3 gap-3 mt-16'>
                {
                    data?.map(singleData => <div key={singleData.img} className='flex items-center gap-5 px-5 py-8 primary-border'>
                        <Image alt={singleData.title} height={48} width={48} src={singleData.img} />
                        <div>
                            <h1 className='color2'>{singleData.title}</h1>
                            <p className='text-2xl'>{singleData.amount}</p>
                        </div>
                    </div>)
                }
            </div>
        </div>
    )
}

export default HomeBanner