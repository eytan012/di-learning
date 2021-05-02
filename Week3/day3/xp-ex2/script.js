//Create a function called getBold_items()
// that takes no parameter. This function should
// collect all the bold items inside the paragraph.
function getBold_items(){
    let boldItem = document.querySelectorAll('p strong')
    return boldItem
}
getBold_items()

// Create a function called highlight()
// that changes the color of all the bold text to blue.
function highlight(boldItems){
   for (let i=0;i<boldItems.length;i++){
       boldItems[i].style.color = "blue"
   }
}


// Create a function called return_normal()
// that changes the color of all the bold text back to black.
function return_normal(boldItems){
    for (let i=0;i<boldItems.length;i++){
        boldItems[i].style.color = "black"
    }
}



// Call the function highlight()
// onmouseover (ie. when the mouse pointer is moved onto the paragraph),
// and the function return_normal()
// onmouseout (ie. when the mouse pointer is moved out of the paragraph).
// Look at this example
