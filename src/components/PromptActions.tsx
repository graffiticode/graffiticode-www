import { getChatGPTPromptLink } from '@data/contract'
import { Button } from '@/components/Button'
import { CopyButton } from '@/components/CopyButton'

export function PromptActions({ examplePrompt, context }: { examplePrompt: string; context: string }) {
  const { prompt, href } = getChatGPTPromptLink(examplePrompt)

  return (
    <div className="example-actions">
      <Button href={href} variant="secondary" className="prompt-link" external>
        Try in ChatGPT.com <span aria-hidden="true">↗</span>
      </Button>
      <CopyButton text={prompt} label="Copy prompt" context={context} />
    </div>
  )
}
