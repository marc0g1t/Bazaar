import Image from "next/image";
export function OppositeFiskil() {
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
    <div className="w-[1152px] h-[480px] flex flex-row-reverse">
      <div className="h-full w-[576px] bg-[#F9FAFB] px-[48px] py-[48px]">
        <Image src="/picture.png" height={384} width={480} />
      </div>
      <div className="h-full h-[576px] flex flex-col gap-[24px]">
        <div>Fiskil</div>
        <div className="w-[480px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec
          urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in
          faucibus orci luctus et ultrices posuere cubilia curae.
        </div>
        <div className="w-[480px] flex gap-4 flex-wrap">
          {array.map((e) => (
            <button className="rounded-[12px] px-[20px] py-[4px] bg-[#E5E7EB]">
              {e}
            </button>
          ))}
        </div>
        <div>
          <Image src="/Icon Button.png" height={36} width={36} />
        </div>
      </div>
    </div>
  );
}
