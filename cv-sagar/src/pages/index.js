import { CiLocationOn } from "react-icons/ci";
import { FaGithub } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaFigma } from "react-icons/fa";
import Image from "next/image";
import { Apps } from "@/components/Apps";
import experience from "@/assets/experience.json";
import { Upwork } from "@/components/Upwork";
import { Fiskil } from "@/components/Fiskil";
import { OppositeFiskil } from "@/components/OppositeFiskil";
export default function Home() {
  const array = [
    {
      image: "icon-javscript.svg",
      name: "Javascript",
    },
    {
      image: "icon-typescript.svg",
      name: "Typescript",
    },
    {
      image: "icon-react.svg",
      name: "React",
    },
    {
      image: "icon-nextjs.svg",
      name: "Next.js",
    },
    {
      image: "icon-nodejs.svg",
      name: "Node.js",
    },
    {
      image: "icon-express.svg",
      name: "Express.js",
    },
    {
      image: "icon-nest.svg",
      name: "Nest.js",
    },
    {
      image: "icon-socket.svg",
      name: "React",
    },
    {
      image: "icon-postgresql.svg",
      name: "PostgreSQL",
    },
    {
      image: "icon-mongodb.svg",
      name: "MongoDB",
    },
    {
      image: "icon-sass.svg",
      name: "Sass/Scss",
    },
    {
      image: "icon-tailwindcss.svg",
      name: "Tailwindcss",
    },
    {
      image: "icon-figma.svg",
      name: "Figma",
    },
    {
      image: "icon-cypress.svg",
      name: "Cypress",
    },
    {
      image: "icon-storybook.svg",
      name: "Storybook",
    },
    {
      image: "icon-git.svg",
      name: "Git",
    },
  ];

  return (
    <div className="">
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
      <div className="border-solid border w-320 h-192.5 mt-20">
        <div className="border-solid border w-320 flex justify-center">
          <button className="bg-slate-300 rounded-xl px-3">About me</button>
        </div>
        <div className="border-solid border w-304 h-173.5 mt-12 flex justify-between ">
          <div className="border-solid border w-[584px] h-[694px]">
            <div className="border-solid border w-[440px] h-[520px]">
              <div className="relative">
                <div className="border-solid border w-[400px] h-[480px] bg-gray-100 absolute top-10"></div>
                <div className="absolute right-0">
                  {" "}
                  <Image
                    src="/Sagaraa black glasses.png"
                    width={400}
                    height={480}
                    alt="Picture of the author"
                    border-x-0
                    border-y-0
                  />{" "}
                </div>
              </div>
            </div>
          </div>

          <div className="border-solid border w-[584px] h-[694px] flex flex-col justify-between ">
            <h1 className="font-medium text-2xl">
              Curious about me? Here you have it:
            </h1>
            <div className="border-solid border w-[584px] h-[634px] flex flex-col gap-y-4">
              <div>
                I'm a passionate, self-proclaimed designer who specializes in
                full stack development (React.js & Node.js). I am very
                enthusiastic about bringing the technical and visual aspects of
                digital products to life. User experience, pixel perfect design,
                and writing clear, readable, highly performant code matters to
                me.
              </div>
              <div>
                I began my journey as a web developer in 2015, and since then,
                I've continued to grow and evolve as a developer, taking on new
                challenges and learning the latest technologies along the way.
                Now, in my early thirties, 7 years after starting my web
                development journey, I'm building cutting-edge web applications
                using modern technologies such as Next.js, TypeScript, Nestjs,
                Tailwindcss, Supabase and much more.
              </div>
              <div>
                I am very much a progressive thinker and enjoy working on
                products end to end, from ideation all the way to development.
              </div>
              <div>
                When I'm not in full-on developer mode, you can find me hovering
                around on twitter or on indie hacker, witnessing the journey of
                early startups or enjoying some free time. You can follow me on
                Twitter where I share tech-related bites and build in public, or
                you can follow me on GitHub.
              </div>
              <div>
                Finally, some quick bits about me.Finally, some quick bits about
                me.
              </div>
              <div className="border-solid border w-[584px] h-[58px] flex justify-between">
                <div className="border-solid border w-[287px] h-[58px]">
                  <div className="flex items-center gap-x-2 ml-2">
                    <div className="h-1 w-1 bg-black rounded "></div>
                    <div>B.E. in Computer Engineering</div>
                  </div>
                  <div className="flex items-center gap-x-2 ml-2">
                    <div className="h-1 w-1 bg-black rounded"></div>
                    <div>Full time freelancer</div>
                  </div>
                </div>
                <div className="border-solid border w-[287px] h-[58px]">
                  <div className="flex items-center gap-x-2 ml-2">
                    <div className="h-1 w-1 bg-black rounded"></div>
                    <div>Avid learner</div>
                  </div>
                  <div className="flex items-center gap-x-2 ml-2">
                    <div className="h-1 w-1 bg-black rounded "></div>
                    <div>Aspiring indie hacker</div>
                  </div>
                </div>
              </div>
              <div>
                One last thing, I'm available for freelance work, so feel free
                to reach out and say hello! I promise I don't bite 😉
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-solid border w-[1440px] h-[560px] flex justify-center items-center">
        <div className="border-solid border w-[1280px] h-[368px] flex flex-col justify-between items-center">
          <div className="border-solid border w-[1216px] h-[72px] flex flex-col justify-between ">
            <div className="border-solid border w-[1216px] h-[28px] flex justify-center">
              <button className="bg-slate-300 rounded-xl px-3">skills</button>
            </div>
            <div className="border-solid border w-[1216px] h-[28px] flex justify-center">
              The skills, tools and technologies I am really good at:
            </div>
          </div>
          <div className="border-solid border w-[1280px] h-[248px] flex flex-col justify-center items-center">
            <div className="border-solid border w-[1216px] h-[100px] flex gap-16 flex-wrap">
              {array.map((element) => (
                <Apps image={element.image} name={element.name} />
              ))}
            </div>
            <div className="border-solid border w-[1216px] h-[100px]"></div>
          </div>
        </div>
      </div>
      <div className="w-[1440px] h-[1140px] bg-[#F9FAFB] flex items-center justify-center">
        <div className="w-[1280px] h-[948px] px-[32px] flex flex-col items-center gap-[48px]">
          <div className="w-full flex flex-col items-center gap-[16px]">
            <button className="w-[115px] h-[28px] bg-[#E5E7EB] rounded-[12px] px-[20px] py-[4px] flex items-center justify-center">
              experience
            </button>
            <h3>Here is a quick summary of my most recent experiences:</h3>
          </div>
          <div className="flex flex-col gap-[48px]">
            {experience.map((e) => (
              <Upwork
                title={e.title}
                date={e.date}
                text1={e.text1}
                text2={e.text2}
                text3={e.text3}
                text4={e.text4}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="w-[1440px] h-[1848px] px-[96px] py-[80px]">
        <div className="w-[1228px] h-[1656px] flex flex-col gap-[48px]">
          <div>
            <div className="w-[1216px] h-[28px] flex justify-center">
              <button className="w-[75px] h-[28px]  rounded-[12px] px-[20px] py-[4px] bg-[#E5E7EB]">
                Work
              </button>
            </div>
            <h1 className="w-[1216px] h-[28px] flex justify-center">
              Some of the noteworthy projects I have built:
            </h1>
          </div>
          <Fiskil />
          <OppositeFiskil />
          <Fiskil />
        </div>
      </div>
    </div>
  );
}
