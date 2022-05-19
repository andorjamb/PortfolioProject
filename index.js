window.onload = initAll;

function initAll() {
  console.log("script is loaded and operational!");
  //for all images on the page that are also links:
  for (var i = 0; i < document.images.length; i++) {
    if (document.images[i].parentNode.tagName == "A") {
      //this is a link tag - the tag name should be in capitals
      setupRollover(document.images[i]);
    }
  }
  //this function's code is from the Negrino/Smith textbook
  function setupRollover(thisImage) {
    thisImage.outImage = new Image();
    thisImage.outImage.src = thisImage.src;
    thisImage.onmouseout = function () {
      this.src = this.outImage.src;
    };
    thisImage.overImage = new Image();
    //note to self: you need to upload a suitable image for this function
    thisImage.overImage.src = "./assets/images/" + thisImage.id + "_on.png";
    //the file's name needs to be exactly the same as the id
    thisImage.onmouseover = function () {
      this.src = this.overImage.src;
    };
    //this function simply swaps the source of the displayed image on mouse over
  }
  //function hideElement(thisImage) {

  //}
}
