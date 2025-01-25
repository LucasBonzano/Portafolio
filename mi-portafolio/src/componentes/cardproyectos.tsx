import React from "react";

interface ProjectCardProps {
  title: string;
  image: string;
  codeLink: string;
  deployLink?: string; // Hacerlo opcional
}

const ProjectCard: React.FC<ProjectCardProps> = ({title, image, codeLink, deployLink}) => {
  return (
    <div className="max-w-sm overflow-hidden shadow-lg bg-white hover:shadow-xl transition-shadow duration-300 m-6">
      
      <img src={image} alt={title} className="w-full h-48 object-cover" />
    
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">{title}</h2>
        <div className="flex items-center space-x-4">
          <a
            href={codeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition"
          >
            <img className="w-6 h-6" src="src/assets/github.png" alt="Código en Github" />
          </a>
          {deployLink && (
            <a
              href={deployLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
            >
              Deploy
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
