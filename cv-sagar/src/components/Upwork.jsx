import Image from "next/image";
export function Upwork(props) {
  const { date, title, text1, text2, text3, text4 } = props;
  return (
    <div className="w-[896px] rounded-[12px] px-[32px] py-[32px] bg-white dark:bg-[#1f2937]">
      <div className="flex gap-[48px] w-[832px] ">
        <div>
          <Image src="/upwork.png" height={28} width={102} />
        </div>
        <div className="w-[384px]">
          <div className="w-full h-[28px]">{title}</div>
          <div className="w-full">
            <h1>{text1}</h1>
            <h1>{text2}</h1>
            <h1>{text3}</h1>
            <h1>{text4}</h1>
          </div>
        </div>
        <div className="w-[148px] h-[24px]">{date}</div>
      </div>
    </div>
  );
}
