import { AnimationPreview } from '@/components/AnimationPreview'
import { Button } from '@/components/Button'
import { CodeBlock } from '@/components/CodeBlock'
import { PromptActions } from '@/components/PromptActions'
import { GET_STARTED, MAKING_EXAMPLES, MCP_ABOUT, MCP_CONNECTION, MCP_ENDPOINT, POSITIONING, START_URL } from '@data/contract'

export default function HomePage() {
  return (
    <>
      <section className="hero" aria-labelledby="hero-heading">
        <div>
          <p className="eyebrow hero-eyebrow">{GET_STARTED.invitation}</p>
          <h1 id="hero-heading" className="hero-heading">
            <span>{POSITIONING.headline}</span>{' '}
            <span className="hero-heading-secondary">{POSITIONING.continuation}</span>{' '}
            <span className="hero-heading-secondary">{POSITIONING.closing}</span>
          </h1>
          <p className="hero-subtext">{POSITIONING.subtext}</p>
          <p className="hero-making">{GET_STARTED.summary}</p>
          <div className="hero-actions">
            <Button href={GET_STARTED.primary.href}>{GET_STARTED.primary.label} <span aria-hidden="true">↓</span></Button>
            <Button href={GET_STARTED.secondary.href} variant="secondary">{GET_STARTED.secondary.label} <span aria-hidden="true">↓</span></Button>
          </div>
        </div>
        <AnimationPreview />
      </section>

      <hr className="section-divider" />

      <section id="make" className="content-section" aria-labelledby="make-heading">
        <div className="section-heading">
          <p className="eyebrow">From an idea to something you can use</p>
          <h2 id="make-heading">{GET_STARTED.examplesHeading}</h2>
          <p>{GET_STARTED.examplesIntro}</p>
        </div>
        <p className="example-help"><a href="#connect">Connect Graffiticode</a> in ChatGPT first.</p>
        <div className="making-grid">
          {MAKING_EXAMPLES.map((example, index) => (
            <article className="making-card" key={example.id}>
              <span className="example-number" aria-hidden="true">0{index + 1}</span>
              <h3>{example.name}</h3>
              <p className="example-outcome">{example.blurb}</p>
              <blockquote>{example.examplePrompt}</blockquote>
              <PromptActions examplePrompt={example.examplePrompt} context={example.name} />
            </article>
          ))}
        </div>
        <div className="making-next">
          <p>Pick a starting point. Make it your own.</p>
          <Button href={START_URL}>Open Graffiticode <span aria-hidden="true">↗</span></Button>
        </div>
      </section>

      <section id="connect" className="content-section connect-section" aria-labelledby="connect-heading">
        <div className="section-heading">
          <p className="eyebrow">Use it with your AI assistant</p>
          <h2 id="connect-heading">{GET_STARTED.connectionHeading}</h2>
          <p>{GET_STARTED.connectionIntro}</p>
        </div>
        <div className="connection-grid">
          <ol className="connection-steps">
            {GET_STARTED.connectionSteps.map((step, index) => (
              <li key={step.title}>
                <span className="step-number" aria-hidden="true">{index + 1}</span>
                <div><h3>{step.title}</h3><p>{step.body}</p></div>
              </li>
            ))}
          </ol>
          <div className="connection-config">
            <CodeBlock code={MCP_ENDPOINT} label="Server URL" language="text" wrap />
            <details className="config-details">
              <summary>JSON configuration (if needed)</summary>
              <p>If your assistant uses an <code>mcpServers</code> configuration, add this entry. Otherwise, paste the server URL into its connector settings.</p>
              <CodeBlock code={JSON.stringify(MCP_CONNECTION.config, null, 2)} label="MCP configuration" />
            </details>
            <p className="connection-docs"><a href={MCP_ABOUT}>Connection help <span aria-hidden="true">↗</span></a></p>
          </div>
        </div>
        <div className="agent-guide">
          <h3>Instructions for your AI assistant</h3>
          <p className="agent-guide-intro">Your assistant handles the tool calls below. You describe what you want, review the result, and ask for changes.</p>
          <ol className="agent-workflow">
            {GET_STARTED.agentSteps.map((step) => (
              <li key={step.tool}>
                <code>{step.tool}</code>
                <p>{step.instruction}</p>
              </li>
            ))}
          </ol>
          <div className="discovery-links">
            <span>Share with your assistant</span>
            <a href="/llms.txt">Agent instructions <span aria-hidden="true">↗</span></a>
            <a href="/.well-known/mcp.json">Connection details <span aria-hidden="true">↗</span></a>
          </div>
        </div>
        <p className="retention-note">{GET_STARTED.retention}</p>
      </section>
    </>
  )
}
