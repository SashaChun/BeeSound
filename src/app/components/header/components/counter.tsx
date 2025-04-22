const Counter = ({ count }: { count: number }) => {
    return (
        <div className="absolute bottom-4 right-2 bg-[#AF367B] rounded-full py-1 px-3 flex justify-center items-center -z-10">
            <p className="text-white text-[14px] font-semibold">{count}</p>
        </div>
    );
};

export default Counter;
