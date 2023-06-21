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
    for(let index=1;index<=6;index++){
   
      images[index].addEventListener('dragstart',handleDragStart)
      images[index].addEventListener('dragover',handleDragOver)
      images[index].addEventListener('drop',handleDrop)
    }
}


doDrag())