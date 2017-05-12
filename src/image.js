class Image {
  constuctor(image) {
    this.image = image;
  }

  render(){
    return `<img class="img-size" src='${this.image}'>`
  }
}
