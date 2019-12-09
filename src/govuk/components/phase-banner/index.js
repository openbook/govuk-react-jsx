import React from 'react'
import { Tag } from '../'

function PhaseBanner(props) {
  const { className, tag, html, text, ...attributes } = props
  return (
    <div className={`govuk-phase-banner ${className}`} {...attributes}>
      <p className="govuk-phase-banner__content">
        <Tag
          {...tag}
          className={`govuk-phase-banner__content__tag ${tag?.className || ''}`}
        />

        <span className="govuk-phase-banner__text">{html || text}</span>
      </p>
    </div>
  )
}

export { PhaseBanner }
