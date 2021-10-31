// Script to open and close sidebar
function w3_open() {
  document.getElementById("mySidebar").style.display = "block";
  document.getElementById("myOverlay").style.display = "block";
}

function w3_close() {
  document.getElementById("mySidebar").style.display = "none";
  document.getElementById("myOverlay").style.display = "none";
}

// Modal Image Gallery
function onClick(element) {
  document.getElementById("img01").src = element.src;
  document.getElementById("modal01").style.display = "block";
  var captionText = document.getElementById("caption");
  captionText.innerHTML = element.alt;
}

// const prev = document.querySelector(".previous");
// const nex = document.querySelector(".next");
// const portfolio = document.querySelector("#portfolio");

// prev.addEventListener("click", sliderfunction);

// function sliderfunction() {
//   const portfolioChildren =  event.target.parentElement.children[0];
//   const portfolioImg =  portfolioChildren.children[0].src;
//   console.log(portfolioImg);
// }

// 作品集選單開闔
$('#careers').click(function(){
  $(this).parent().find('ul').toggle('slow');
  /* parent父元素-往上  find後代 往下 */         
});
$('#personalJobs').click(function(){
  $(this).parent().find('ul').toggle('slow');         
});