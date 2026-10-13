import React from 'react'
import { Project } from '../../types/project'
import { PalluvoSlideshow } from './PalluvoSlideshow'
import { PlaceholderPreview } from './PlaceholderPreview'

interface ProjectCardProps {
  project: Project
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className="project-card"
    >
      <div className="project-preview-wrapper">
        {project.previewType === 'slideshow' ? (
          <PalluvoSlideshow images={project.slideshowImages} />
        ) : project.previewType === 'placeholder' ? (
          <PlaceholderPreview
            title={project.name}
            subtitle={project.placeholderSubtitle}
          />
        ) : (
          <img
            src={project.previewImage}
            alt={`${project.name} preview`}
            className="project-preview-image"
          />
        )}
      </div>

      <div className="project-category typo-eyebrow">
        {project.category}
      </div>

      <h3 className="project-title typo-card-title">
        {project.name}
      </h3>

      <p className="project-desc">
        {project.description}
      </p>

      {project.meta && (
        <div className="project-meta">
          {project.meta}
        </div>
      )}

      <div className="project-link-cta">
        {project.buttonText}
      </div>
    </a>
  )
}
