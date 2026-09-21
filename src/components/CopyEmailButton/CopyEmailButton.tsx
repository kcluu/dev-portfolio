import { useState } from 'react'

import './CopyEmailButton.css'

interface CopyEmailButtonProps {
  email: string
}

export const CopyEmailButton = ({ email }: CopyEmailButtonProps) => {
  const [copied, setCopied] = useState(false)

  const handleClick = async () => {
    try {
      await navigator.clipboard.writeText(email)

      setCopied(true)
      setTimeout(() => setCopied(false), 1600)
    } catch {
      // clipboard access can fail (permissions, insecure context, etc.)
      // the email is already visible above, so this is a quiet no-op
    }
  }

  return (
    <button className="copy-email" onClick={handleClick}>
      {copied ? 'copied ✓' : 'copy email address'}
    </button>
  )
}
