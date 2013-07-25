$(document).ready(function(){

  var pageWidth = $(document).width(),
      pageHeight = $(document).height(),
      centerWidth = pageWidth/2,
      centerHeight = pageHeight/2,
      bottomSide = pageHeight/5 * 4,
      cursorX = 0,
      cursorY = 0,
      verticalShadowPosition = 2,
      horizontalShadowPosition = 5,
      shadowSize = 10,
      shadowColor = "#000",
      defautBottomPosition = -40;

  $(document).mousemove(function(e){
    cursorX = e.pageX;
    cursorY = e.pageY;
    horizontalShadowPosition = ( centerWidth - cursorX ) / 60;
    verticalShadowPosition = ( centerHeight - cursorY ) / 60;

    $('.text').css("text-shadow", horizontalShadowPosition + "px "
      + verticalShadowPosition + "px " + shadowSize + "px "+ shadowColor);

    if(cursorY > bottomSide) {
      $('#coming-soon').css("bottom", (defautBottomPosition - defautBottomPosition + 5) +"px");
    } else {
      $('#coming-soon').css("bottom", defautBottomPosition + "px");

    }
    // text-shadow: 5px 2px 5px #000;
    // first number: left(negative)-right(postive)
    // second number: top(negative)-bottom(positive)
    // third number: size
    // and color : )
  });
});

