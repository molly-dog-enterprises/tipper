$(function() {
  drawPictureOne($('.position-1 canvas'), 'One')
  drawPictureOne($('.position-2 canvas'), 'Two')
  drawPictureOne($('.position-3 canvas'), 'Three')

  function drawPictureOne(elem, text) {
    if (!elem[0]) {
      return
    }

    var context = elem[0].getContext('2d');
//    debugger;
    context.fillText('Image ' + text, 150, 80);
  }
});
