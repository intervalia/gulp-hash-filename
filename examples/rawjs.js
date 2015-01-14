function display_overlay(img, content) {

  // change position of overlay div
  // move to upper left hand corner of image

  // only display overlay if more than one comment
  if (parseInt(content) > 0) {
    var position = getElementPosition(img);

    var top_pos = position.top;
    var left_pos = position.left;

    var overlay = document.getElementById('overlay');
    overlay.style.visibility = 'hidden';
    overlay.innerHTML = content;
    overlay.style.left = left_pos + "px";
    overlay.style.top = top_pos + "px";
    overlay.style.visibility = 'visible';
    overlay.style.zIndex = document.getElementById(img).zIndex + 1;
  }

}

function getElementPosition(elemID) {
  var offsetTrail = document.getElementById(elemID);
  var offsetLeft = 0;
  var offsetTop = 0;
  while (offsetTrail) {
    offsetLeft += offsetTrail.offsetLeft;
    offsetTop += offsetTrail.offsetTop;
    offsetTrail = offsetTrail.offsetParent;
  }
  if (navigator.userAgent.indexOf("Mac") != -1 &&
    typeof document.body.leftMargin != "undefined") {
    offsetLeft += document.body.leftMargin;
    offsetTop += document.body.topMargin;
  }
  return {left:offsetLeft, top:offsetTop};
}
