import React from 'react'

interface PlaceholderPreviewProps {
  title: string
  subtitle?: string
}

export const PlaceholderPreview: React.FC<PlaceholderPreviewProps> = ({
  title,
  subtitle = 'Website preview coming soon'
}) => {
  return (
    <div className="preview-placeholder">
      <div className="preview-placeholder-title">{title}</div>
      <div className="preview-placeholder-sub">{subtitle}</div>
    </div>
  )
}
