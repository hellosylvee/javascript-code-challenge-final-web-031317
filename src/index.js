$(document).ready(function(){
  $('#submitImage').on('click', function(e){
    e.preventDefault();
    var imageUrl = $('#imgUrlEntered').val()
    var text = $('#textEntered').val()

    // const newImg = new Image(this.image);
    // const newText = new Text(this.text);
    // debugger

    $('#photo-list').append(`<img class="img-size" src='${imageUrl}'>`)
    $('#photo-list').append(`<p>${text}</p>`)
    // $('#photo-list').append( newText.render() )
  })
})
