import {geistSans} from "@/app/fonts";

const HaracteristicItem = (
    {name , haracteristic} : {name : string , haracteristic : number | string}
) => {
    return <div className={`flex flex-row space-x-3 ${geistSans.variable} font-sans text-[16px] font-[500] text-[#1A1A1A]`} >
        <p>{name}</p>
        <p className={'text-gray-500'}>{haracteristic}</p>
    </div>
}

export default HaracteristicItem;