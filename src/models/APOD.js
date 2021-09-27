export class APOD {
  constructor(data) {
    this.date = data.date
    this.explanation = data.explanation
    this.img = data.hdurl
    this.altImg = data.url
    this.title = data.title
  }
}
