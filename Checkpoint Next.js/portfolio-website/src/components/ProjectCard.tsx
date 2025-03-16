import Image from 'next/image';

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
}

const ProjectCard = ({ title, description, imageUrl }: ProjectCardProps) => {
  return (
    <div className="project-card">
      <Image src={imageUrl} alt={title} width={300} height={200} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default ProjectCard;