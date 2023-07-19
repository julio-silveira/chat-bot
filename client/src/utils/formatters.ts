export const toHour = (date: Date) => date.toLocaleTimeString(
  navigator.language,
  { hour: '2-digit', minute: '2-digit', second: '2-digit'}
)

export const parseSecret = (text: string, isSecret: boolean) => isSecret ? '*'.repeat(text.length) : text
