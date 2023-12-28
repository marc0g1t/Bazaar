import Image from "next/image";
const ProgramLanguages = (props) => {
  const { imgsrc, text } = props;
  return (
    <div className="flex h-[100px]  flex-col  items-center justify-between ">
      <Image src={imgsrc} width={64} height={64} />
      <p>{text}</p>
    </div>
  );
};
const Logos = [
  { imgsrc: "/js.svg", text: "JavaScript" },
  { imgsrc: "/type.svg", text: "TypeScript" },
  { imgsrc: "/react.svg", text: "React" },
  { imgsrc: "/nextjs.svg", text: "Next.js" },
  { imgsrc: "/node.svg", text: "Node.js" },
  { imgsrc: "/express.svg", text: "Express.js" },
  { imgsrc: "/nestjs.svg", text: "Node.js" },
  { imgsrc: "/soc.svg", text: "Socket.io" },

  { imgsrc: "/elep.svg", text: "PostgreSQL" },
  { imgsrc: "/mongo.jpeg", text: "MongoDB" },

  { imgsrc: "/sass.svg", text: "Sass/Scss" },
  { imgsrc: "/tailwind.svg", text: "Tailwindcss" },
  { imgsrc: "/figma.svg", text: "Figma" },
  { imgsrc: "/cyp.svg", text: "Cypress" },
  { imgsrc: "/story.svg", text: "Storybook" },
  { imgsrc: "/git.svg", text: "Git" },
];

const ThirdPage = () => {
  return (
    <div className="mx-auto px-20 py-auto pt-24 pb-[250px] md:pb-16 ">
      <div className="flex flex-col gap-[48px] items-center">
        <div className="mx-auto flex flex-col items-center gap-[16px] justify-center">
          <div className="w-[75px] h-[28px] bg-slate-300 rounded-lg flex justify-center">
            Skills
          </div>
          <div>The skills, tools and technologies I am really good at:</div>
        </div>
        <br />
        <div>
          <div className="flex  pl-[50px] md:pl-[0px]  w-[443px] md:w-[1216px] h-[664px] md:h-[248px] pb-[200px] md:pb-[200px] ">
            <div className="flex w-[100%]   gap-x-[60px] md:gap-x-[90px] gap-y-[40px] flex-wrap ">
              {Logos.map((el, i) => {
                return (
                  <div>
                    <div>
                      <ProgramLanguages
                        key={i}
                        imgsrc={el.imgsrc}
                        text={el.text}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ThirdPage;
