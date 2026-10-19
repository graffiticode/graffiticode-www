import { AnimationPreview } from '@/components/AnimationPreview'
import { POSITIONING } from '@data/contract'

export default function HomePage() {
  return (
    <section className="hero" aria-labelledby="hero-heading">
      <h1 id="hero-heading" className="hero-heading">
        <span>{POSITIONING.headline}</span>{' '}
        <span className="hero-heading-secondary">{POSITIONING.continuation}</span>{' '}
        <span className="hero-heading-secondary">{POSITIONING.closing}</span>
      </h1>
      <AnimationPreview />
    </section>
  )
}
