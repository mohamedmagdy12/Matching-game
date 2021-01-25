

   var numberOfDisplayedItems;
   var firstDisplayed;
   var bodyOfHTML;
   var shownItems;
   var imageIndex;
   
   function initialMode(){

   numberOfDisplayedItems = 0;
   firstDisplayed = 0;
   bodyOfHTML = "<div class='row'>";
   shownItems = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
   imageIndex = new Array();
   for(var i=1 ; i<=16 ; i++){
      imageIndex[i-1] = i;
   }
   shuffle(imageIndex);
   
    for(var i=1 ; i<=16 ; i++){
    	bodyOfHTML += getImageTag("tmp",imageIndex[i-1]);
    }

   bodyOfHTML += "</div>";
   document.getElementById("main-grid").innerHTML = bodyOfHTML;
  }

  initialMode();


function getImageTag(id , i ){
	var element = "<img id=" + i + " height='170px' class = col-lg-3 src='images/";
    var tail = ".jpg' onclick = 'displayImage(" + i + ");'></img>";

    return element + id + tail;
}


function displayImage(i){
	if(shownItems[i])
		return;

	shownItems[i] = 1;
	var index = i%8;
	if(index == 0)index = 8;

	var target = "images/" + index + ".jpg";
   document.getElementById(i).src = target;

   var millisecondsToWait = 500; 
   setTimeout(function() {
     if(numberOfDisplayedItems %2 == 1 && firstDisplayed%8 != i%8){
         target = "images/tmp.jpg";
         document.getElementById(firstDisplayed).src = target;
         document.getElementById(i).src = target;
         shownItems[i] = 0;
         shownItems[firstDisplayed] = 0;
         numberOfDisplayedItems--;
         return;
   	}
   numberOfDisplayedItems++;
   firstDisplayed = i;
   
   if(numberOfDisplayedItems == 16)
   	initialMode();
  
}, millisecondsToWait);
}


function sleep(seconds) 
{
  var e = new Date().getTime() + (seconds * 1000);
  while (new Date().getTime() <= e) {}
}

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}