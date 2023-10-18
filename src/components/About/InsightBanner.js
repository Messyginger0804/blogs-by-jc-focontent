import React from 'react'

function InsightBanner({ insights }) {
    return (
        <div className='w-full bg-accent text-light whitespace-nowrap overflow-hidden'>
            <div className='animate-roll w-full py-3 flex items-center justify-center capitalize font-semibold tracking-wider text-base text-light'>
                {
                    insights.map((text, index) =>
                        <div key={index} className='text-light'>{text}
                            <span className='px-4'>|</span>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default InsightBanner