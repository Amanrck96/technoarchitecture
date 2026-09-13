import slugify from 'slugify'

export function createSlug(text: string): string {
  return slugify(text, { lower: true, strict: true })
}

export function formatYear(year: number): string {
  return year.toString()
}

export function formatDate(date: Date | string): string {
  return new Date(date).toLocaleDateString('en-IN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ')
}
