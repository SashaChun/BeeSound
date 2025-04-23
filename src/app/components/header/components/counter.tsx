const Counter = ({ count }: { count: number | null}) => {
    return (
      <>{count ?  <div className="absolute bottom-4 right-2 bg-[#AF367B] rounded-full py-1 px-3 flex justify-center items-center ">
          <p className="text-white text-[14px] font-semibold">{count}</p>
      </div> : null}
      </>
    );
};

export default Counter;
