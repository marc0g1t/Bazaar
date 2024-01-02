import Image from "next/image";
export function Apps(props) {
  const { image, name } = props;
  return (
    <div className="w-[88px] h-[100px]">
      <div className="h-[72px]">
        <Image src={`${image}`} height={64} width={64} />
      </div>
      <div className="h-[28px]">{name}</div>
    </div>
  );
}
