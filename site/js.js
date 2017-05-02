function upDate(img-responsive){
 
    document.getElementById("image").innerHTML = img-responsive.alt;
    document.getElementById("image").style.backgroundImage = "url('" + previewPic.src + "')";
    }


  function unDo(){
  
    document.getElementById("image").innerHTML = "Hover over an image below to display here."
    document.getElementById("image").style.backgroundImage = "";  