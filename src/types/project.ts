export interface Project {
  id: string
  name: string
  category: string
  description: string
  url: string
  previewType: 'slideshow' | 'image' | 'placeholder'
  previewImage?: string
  slideshowImages?: string[]
  meta?: string
  buttonText: string
  placeholderSubtitle?: string
}

export interface NavLink {
  label: string
  href: string
  isExternal?: boolean
}

export interface ProcessStage {
  number: string
  title: string
  description: string
}

export interface ApproachStep {
  number: string
  title: string
  description: string
  highlighted?: boolean
}
