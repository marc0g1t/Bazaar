import { MdWbSunny } from "react-icons/md";
import { IoMenu } from "react-icons/io5";
import { useTheme } from "next-themes";

import Image from "next/image";

export default function Page() {
  return (
    <Image
      src="/Bazaar/cv-sagar/public/Sagaraa.png"
      width={280}
      height={320}
      alt="Picture of the author"
    />
  );
}
export const Header = ({ children }) => {
  const { theme, setTheme } = useTheme();

  const routes = ["About", "Work", "Testioials", "Contact"];
  return (
    <div className="mx-auto mt-7 max-w-screen-xl">
      <div className=" px-20 py-4 flex justify-between">
        <h2>{"<SS />"}</h2>

        <div className="hidden md:flex  divide-x-2 gap-6">
          <div className="flex gap-6">
            {routes.map((route, index) => (
              <p key={index}>{route}</p>
            ))}
          </div>
          <div className=" flex gap-4 items-center">
            <div onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
              <MdWbSunny />
            </div>
            <button className="rounded-xl bg-black text-white px-4 py-1.5">
              Download CV
            </button>
          </div>
        </div>
        <div className="block md:hidden text-4xl">
          <IoMenu />
        </div>
      </div>
      <div>{children}</div>
    </div>
  );
};
