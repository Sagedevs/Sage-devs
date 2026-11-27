import { track } from '@vercel/analytics';

// Never include form values, chat content, email addresses, or other personal data.
export function recordConversion(name: string, properties?: Record<string, string>) {
  try { track(name, properties); } catch { /* Analytics must never interrupt an inquiry. */ }
}
