import { ANIMATION_PREVIEW } from '@data/contract'

/** Static storyboard. Replace this figure's contents when the animation is ready. */
export function AnimationPreview() {
  return (
    <figure className="animation-preview" aria-label={ANIMATION_PREVIEW.label}>
      <ol className="animation-flow">
        <li className="flow-step">
          <div className="flow-node">
            <span className="flow-title">{ANIMATION_PREVIEW.agent}</span>
          </div>
        </li>
        <li className="flow-step">
          <div className="flow-platform" role="group" aria-labelledby="platform-label">
            <p id="platform-label" className="flow-platform-label">{ANIMATION_PREVIEW.platform}</p>
            <ul className="flow-functions">
              {ANIMATION_PREVIEW.functions.map((fn) => (
                <li key={fn.title} className="flow-node">
                  <span className="flow-title">{fn.title}</span>
                  <span className="flow-detail">
                    <strong>{fn.promise}</strong>
                    <span>{fn.description}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </li>
        <li className="flow-step">
          <div className="flow-node">
            <span className="flow-title">{ANIMATION_PREVIEW.api}</span>
          </div>
        </li>
      </ol>
    </figure>
  )
}
