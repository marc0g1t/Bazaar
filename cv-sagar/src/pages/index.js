import { CiLocationOn } from "react-icons/ci";
import { FaGithub } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaFigma } from "react-icons/fa";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="flex justify-between">
        <div className="max-w-[768px]">
          <h1 className="font-bold text-xl mt-20">Hi, I’m Sagar 👋</h1>
          <div className="mt-3">
            I'm a full stack developer (React.js & Node.js) with a focus on
            creating (and occasionally designing) exceptional digital
            experiences that are fast, accessible, visually appealing, and
            responsive. Even though I have been creating web applications for
            over 7 years, I still love it as if it was something new.
          </div>
          <div className="mt-10">
            <div className="flex">
              <CiLocationOn />
              <p>Ahmedabad, India</p>
            </div>
            <div className="flex items-center gap-x-2">
              <div className="h-2 w-2 bg-green-300 rounded ml-0.5"></div>
              <p>Available for new projects</p>
            </div>
          </div>
          <div className="flex mt-10 gap-x-5">
            <FaGithub size={24} />
            <FaTwitter size={24} />
            <FaFigma size={24} />
          </div>
        </div>
        <div>
          {" "}
          <Image
            src="/Sagaraa.png"
            width={280}
            height={320}
            alt="Picture of the author"
          />{" "}
        </div>
      </div>
      <div>
        <button className="bg-slate-300 rounded-xl px-3 ">About me</button>
      </div>
    </div>
  );
}
