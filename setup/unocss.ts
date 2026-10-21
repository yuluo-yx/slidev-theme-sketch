import type { UnoSetupReturn } from '@slidev/types'
import { defineUnoSetup } from '@slidev/types'

export default defineUnoSetup((): UnoSetupReturn => {
  return {
    shortcuts: {
      'bg-sketch': 'bg-[#fdfdfd]',
      'border-sketch': 'border-2 border-[#222222]',
      'shadow-sketch': 'shadow-[4px_4px_0px_#222222]',
    },
  }
})
