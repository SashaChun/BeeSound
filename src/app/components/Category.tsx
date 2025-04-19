import Image from "next/image";

const Category = ({ color , dots}: { color: string , dots : string}) => {
    return (
        <div
            className="rounded-bl-[12px] px-10 flex flex-row items-center  justify-between rounded-tl-[100px] rounded-tr-[12px] rounded-br-[100px] h-[250px]"
            style={{ backgroundColor: color }}
        >
          <div className={'flex w-[50%] flex-col '}>
              <p className="mt-4 sm:text-[25px] text-[18px] text-white/90 leading-relaxed">
                  Hight-quality
                  Bluetooth Earbuds
              </p>
              <button className="mt-6 max-w-[250px] bg-white text-[#af367b] px-2 sm:px-6 py-2 rounded-full text-[10px] sm:text-[15px] md:text-[16px] font-semibold hover:bg-white/90 transition">
                  Buy Now
              </button>
          </div>
             {dots ? (
                <Image
                    src={dots.startsWith('//') ? `https:${dots}` : dots}
                    width={200} height={190} alt={'dots'} className={'w-[160px] h-[140px] sm:w-[200px] sm:h-[190px]'}
                />
            ) : null}
        </div>
    );
};

export default Category;