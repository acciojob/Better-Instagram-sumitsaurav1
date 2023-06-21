//your code here
let images = document.querySelectorAll(".image");

// console.log(images)

let selectedDiv=null;

function handleDragStart(){
  selectedDiv=this;
  this.classList.add("selected");
}

function handleDragOver(event){
    event.preventDefault();
    // console.log(event);
}

function handleDrop(e) {
  if (selectedDiv !== this) {
    let temp = window.getComputedStyle(selectedDiv).backgroundImage;
    selectedDiv.style.backgroundImage = window.getComputedStyle(this).backgroundImage;
    this.style.backgroundImage = temp;
  }
  selectedDiv.classList.remove('selected');
  selectedDiv = null;
}



function doDrag(){
    for(let i=1;i<=images.length;i++){
   
      images[i].addEventListener('dragstart',handleDragStart)
      images[i].addEventListener('dragover',handleDragOver)
      images[i].addEventListener('drop',handleDrop)
    }
}


doDrag())