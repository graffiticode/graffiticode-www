import { ANIMATION_PREVIEW } from '@data/contract'

/** Static storyboard. Replace this figure's contents when the animation is ready. */
export function AnimationPreview() {
  return (
    <figure className="animation-preview" aria-labelledby="animation-caption">
      <figcaption id="animation-caption" className="animation-caption">
        {ANIMATION_PREVIEW.label}
      </figcaption>
      <ol className="animation-flow">
        {ANIMATION_PREVIEW.steps.map((step) => (
          <li key={step.title} className="flow-step">
            <div className={`flow-node${step.title === 'Graffiticode' ? ' flow-node-graffiticode' : ''}`}>
              <span className="flow-title">{step.title}</span>
              {step.promise && (
                <span className="flow-detail">
                  <strong>{step.promise}</strong>
                  <span>{step.description}</span>
                </span>
              )}
            </div>
          </li>
        ))}
      </ol>
    </figure>
  )
}
