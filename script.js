// document.getElementById()
// create an array with restaurant names
// iterate through the restaurant list using a for loop
// see if the restaurant item contains the searchQuery by using 
// if it does, then set the items display property to block
// else then set the item's display property to none

/*
* for future consideration, add an input so people can add their own restaurants
*/
  let fastFoodR = document.getElementsByClassName("fast-foodN")


let clearButton = document.getElementById(clear)
function clearFilters() {
   let fastFoodR = document.getElementsByClassName("fast-foodN")
  for (let counter=0; counter < fastFoodR.length; counter++){
    fastFoodR[counter].style.display= "block"
  }
}


document.getElementById('searchInput').addEventListener('keyup', function(event) {
  searchText(event)
})

document.getElementById("pizza").addEventListener("click", function(event){
  emojiFilter(event)
})

document.getElementById("sandwich").addEventListener("click", function(event){
  emojiFilter(event)
})

document.getElementById("hamburger").addEventListener("click", function(event){
  emojiFilter(event)
})

document.getElementById("icecream").addEventListener("click", function(event){
  emojiFilter(event)
})

document.getElementById("taco").addEventListener("click", function(event){
  emojiFilter(event)
})

document.getElementById("chicken").addEventListener("click", function(event){
  emojiFilter(event)
})

document.getElementById("hotdog").addEventListener("click", function(event){
  emojiFilter(event)
})

function searchText(event) {
  let searchQuery = event.target.value.toLowerCase()
  let fastFoodR = document.getElementsByClassName("fast-foodN")

  for (let counter=0; counter < fastFoodR.length; counter++) {
    const currentName = fastFoodR[counter].textContent.toLowerCase()
    if (currentName.includes(searchQuery)) {
      fastFoodR[counter].style.display = "block"
    } else {
      fastFoodR[counter].style.display = "none"
    }
  }
}

function emojiFilter(event) {
  let emojiQuery = event.target.textContent
  let fastFoodR = document.getElementsByClassName("fast-foodN")

  for (let counter=0; counter < fastFoodR.length; counter++) {
    const currentName = fastFoodR[counter].textContent.toLowerCase()
    if (currentName.includes(emojiQuery)) {
      fastFoodR[counter].style.display = "block"
    } else {
      fastFoodR[counter].style.display = "none"
    }
  }
}

