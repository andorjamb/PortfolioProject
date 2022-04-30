window.onload = initAll;

function initAll() {
  console.log("script is loaded and operational!");

  for (var i = 0; i < document.images.length; i++) {
    if (document.images[i].parentNode.tagName == "A") {
      //this is a link tag - the tag name should be in capitals
      setupRollover(document.images[i]);
    }
  }

  function setupRollover(thisImage) {
    thisImage.outImage = new Image();
    thisImage.outImage.src = thisImage.src;
    thisImage.onmouseout = function () {
      this.src = this.outImage.src;
    };
    thisImage.overImage = new Image();
    thisImage.overImage.src = "./assets/images/" + thisImage.id + "_on.png";
    thisImage.onmouseover = function () {
      this.src = this.overImage.src;
    };
  }
}
