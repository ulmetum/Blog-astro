export class Formatter {
  static formatDate(date: Date) {
    const dateObj = new Date(date)
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'long',
      day: '2-digit'
    }

    return new Intl.DateTimeFormat('es-ES', options).format(dateObj)
  }
}
