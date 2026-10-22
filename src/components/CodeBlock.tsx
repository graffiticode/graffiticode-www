import clsx from 'clsx'
import { CopyButton } from '@/components/CopyButton'

export function CodeBlock({
  code,
  language = 'json',
  label,
  className,
  wrap = false,
}: {
  code: string
  language?: string
  label?: string
  className?: string
  wrap?: boolean
}) {
  return (
    <div className={clsx('code-block', className)}>
      <div className="code-block-header">
        <span>{label ?? language}</span>
        <CopyButton text={code} label="Copy" context={label ?? language} />
      </div>
      <pre className={wrap ? 'code-wrap' : undefined}>
        <code>{code}</code>
      </pre>
    </div>
  )
}
