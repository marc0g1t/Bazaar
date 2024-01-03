import Image from "next/image";
export function Fiskil() {
  const array = [
    "React",
    "Next.js",
    "Typescript",
    "Nest.js",
    "PostgreSQL",
    "Tailwindcss",
    "Figma",
    "Cypressd",
    "Storybook",
    "Git;",
  ];
  return (
    <div className="w-[1152px] h-[480px] flex">
      <div className="h-full w-[576px] bg-[#F9FAFB] px-[48px] py-[48px] rounded-tl-lg rounded-bl-lg dark:bg-[#3c4850] dark:text-whites">
        <Image src="/picture.png" height={384} width={480} />
      </div>
      <div className="h-full w-[576px] flex flex-col gap-[24px]  bg-[#ffffff] rounded-tr-lg rounded-br-lg flex items-center dark:bg-[#1f2937] dark:text-white">
        <div className="border-solid border w-[480px] h-[28px] mt-10 text-2xl">
          Fiskil
        </div>
        <div className="w-[480px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec
          urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in
          faucibus orci luctus et ultrices posuere cubilia curae.
        </div>
        <div className="w-[480px] flex gap-4 flex-wrap ">
          {array.map((esport) => (
            <button
              className="rounded-[12px] px-[20px] py-[4px] bg-[#E5E7EB]   dark:bg-white
              dark:text-black"
            >
              {esport}
            </button>
          ))}
        </div>
        <div className="h-[36px] w-[480px] border border-solid">
          <Image src="/Icon Button.png" height={36} width={36} />
        </div>
      </div>
    </div>
  );
}
