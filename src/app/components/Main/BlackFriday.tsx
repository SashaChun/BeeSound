import { geistSans } from "@/app/fonts";
import Sellitem from "@/app/components/Sellitem";

const BlackFriday = () => {
    return (
        <div className="p-6 sm:p-10 lg:p-[90px] mt-20 flex flex-col lg:flex-row gap-10 justify-between bg-[#222121]">
            <div className="w-full lg:w-[30%]">
                <h1 className={`text-[clamp(20px,5vw,35px)] text-white font-semibold leading-tight ${geistSans.variable} font-sans`}>
                    Our Black Friday Discount<br className="hidden md:block" />
                </h1>

                <div className="grid grid-cols-3 gap-2 mt-5">
                    <div className="bg-[#F2F5FF] h-[100px]"></div>
                    <div className="bg-[#F2F5FF] h-[100px]"></div>
                    <div className="bg-[#F2F5FF] h-[100px]"></div>
                </div>
            </div>

            <div className="w-full flex flex-col md:flex-row   justify-center items-center gap-6">
                <Sellitem isBlackFriday={true} />
                <Sellitem isBlackFriday={true} />
                <Sellitem isBlackFriday={true} />
            </div>
        </div>
    );
};

export default BlackFriday;
