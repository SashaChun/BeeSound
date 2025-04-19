import {geistSans} from "@/app/fonts";

import Sellitem from "@/app/components/Sellitem"; 

const NewArriver = () => {
    return <section className={'mt-12 '} >
        <div className={'flex flex-row items-center justify-between'}>
            <p className={`${geistSans.variable} font-sans text-[23px] text-[#1A1A1A]`}>New Arrivals</p>
            <button className={`${geistSans.variable} font-sans text-[20px] text-[#616161]`}>
                See More
            </button>
        </div>
        <div className={'grid md:grid-cols-2 xl:grid-cols-4 sm:grid-cols-1  gap-10 mt-10'}>
            <Sellitem/>
            <Sellitem/>
            <Sellitem/>
            <Sellitem/>
        </div>
    </section>
}

export default  NewArriver;