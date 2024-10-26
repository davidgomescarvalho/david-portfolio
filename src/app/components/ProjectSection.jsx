"use client";
import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";

const projectsData = [
  {
    id: 1,
    title: "Procrast",
    description: "A Rails app that helps you to manage your tasks.",
    image: "/images/projects/procrast-iphone.jpeg",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/davidgomescarvalho/procrast",
    previewUrl: "https://www.procrast.fr/",
  },
  {
    id: 2,
    title: "Mern Recipe app",
    description: "Create your own recipes and save them.",
    image: "/images/projects/my-recipes.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/davidgomescarvalho/my-recipes",
    previewUrl: "",
  },
  {
    id: 3,
    title: "Airbnb Clone",
    description:
      "Complete clone of airbnb website in Ruby on Rails, still in development.",
    image: "/images/projects/airbnb.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/davidgomescarvalho/airbnb",
    previewUrl: "",
  },
  {
    id: 4,
    title: "Pokédex in Rails",
    description: "A Podédex index built with Ruby on Rails.",
    image: "/images/projects/pokedex.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/davidgomescarvalho/pokedex",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "React Portfolio Website",
    description: "A portfolio website built with React and Tailwind CSS.",
    image: "/images/projects/portfolio.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/davidgomescarvalho/david-portfolio",
    previewUrl: "https://david-portfolio-sooty.vercel.app/",
  },
  {
    id: 6,
    title: "Netflix Clone Front",
    description: "A clone of the Netflix front page built with React.",
    image: "/images/projects/netflix.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/davidgomescarvalho/netflix-david",
    previewUrl: "https://netflix-david.vercel.app/",
  },
  {
    id: 7,
    title: "Tic-Tac-Toe Game",
    description: "A simple tic-tac-toe game built with React.",
    image: "/images/projects/tic-game.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/davidgomescarvalho/tic-tact-toe-react",
    previewUrl: "https://tic-tact-toe-react.vercel.app/",
  },
  {
    id: 8,
    title: "Garden App in Rails",
    description: "Create your own garden and add pics of your plants.",
    image: "/images/projects/garden.png",
    tag: ["All", "Web"],
    gitUrl: "",
    previewUrl: "https://my-garden-app-749281f9658b.herokuapp.com/",
  },
  /*   {
    id: 9,
    title: "Airbnb Clone",
    description:
      "Complete clone of airbnb website in Ruby on Rails, still in development.",
    image: "/images/projects/airbnb.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/davidgomescarvalho/airbnb",
    previewUrl: "",
  }, */
];
const ProjectSection = () => {
  const [tag, setTag] = useState("All");

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  return (
    <>
      <h2
        className="text-center text-4xl font-bold text-white mt-4 mb-8"
        id="projects"
      >
        My Projects
      </h2>
      <div className="text-white flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <div className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.image}
            tag={project}
            gitUrl={project.gitUrl}
            previewUrl={project.previewUrl}
          />
        ))}
      </div>
    </>
  );
};

export default ProjectSection;
