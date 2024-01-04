import { CiMail } from "react-icons/ci";
import { GoCopy } from "react-icons/go";
import { FiPhone } from "react-icons/fi";
import { FiGithub } from "react-icons/fi";
import { FiTwitter } from "react-icons/fi";
import { FaFigma } from "react-icons/fa";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Image from "next/image";

export function Tail() {
  return (
    <div>
      <div className="w-[1440px] h-[560px] flex justify-center items-center dark:bg-black dark:text-white">
        <div className="w-[1280px] h-[368px] flex items-center justify-center flex-col justify-between ">
          <div className="w-[1216px] h-[100px] flex flex-col justify-between items-center ">
            <div className="w-[112px] h-[28px]  ">
              <button className="w-[112px] h-[28px]  rounded-[12px] px-[20px] py-[4px] bg-[#E5E7EB] text-[12px] dark:bg-[#374051] dark:text-[#d1d5dc]">
                Get in touch
              </button>
            </div>
            <div className="w-[576px] h-[56px]  text-[20px]">
              What’s next? Feel free to reach out to me if you're looking for a
              developer, have a query, or simply want to connect.
            </div>
          </div>
          <div className="w-[596px] h-[104px]  flex items-center justify-center flex-col justify-between">
            <div className="w-[596px] h-[44px]  flex justify-between">
              <CiMail className="text-[32px]" />

              <div className="w-[480px] h-[40px]  text-[36px] items-center flex">
                reachsagarshah@gmail.com
              </div>
              <CopyToClipboard text="reachsagarshah@gmail.com">
                <GoCopy className="text-[32px] hover:scale-125 active:scale-100" />
              </CopyToClipboard>
            </div>
            <div className="w-[414px] h-[44px]  flex justify-between">
              <FiPhone className="text-[32px]" />
              <div className="w-[298px] h-[40px]  text-[36px] flex items-center">
                +91 8980500565
              </div>
              <CopyToClipboard text="+91 8980500565">
                <GoCopy className="text-[32px] hover:scale-125 active:scale-100 ease-in-out cursor-pointer" />
              </CopyToClipboard>
            </div>
          </div>
          <div className="w-[312px] h-[68px]  flex flex-col justify-between items-center">
            <div className="w-[312px] h-[24px] ">
              You may also find me on these platforms!
            </div>
            <div className="w-[116px] h-[36px]  flex justify-between">
              <FiGithub className="text-[24px]" />
              <FiTwitter className="text-[24px]" />
              <FaFigma className="text-[24px]" />
            </div>
          </div>
        </div>
      </div>
      <div className="h-[20px] w-[1440px] border-solid  flex justify-center">
        <div className="flex h-[20px] w-[390px] border-solid  flex justify-between items-center">
          <Image
            src="/c-icon.png"
            width={16}
            height={16}
            alt="Picture of the author"
          />{" "}
          <div>2023 | Designed and coded with ❤️️ by Sagar Shah</div>
        </div>
      </div>
    </div>
  );
}
