export function Map() {
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
}

<div className="border-solid border w-[1216px] h-[100px] flex gap-16 flex-wrap">
  {array.map((element) => (
    <Apps image={element.image} name={element.name} />
  ))}
</div>;
