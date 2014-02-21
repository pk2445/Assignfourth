/**
 * @author Prem Khanal
 */
//This is a handler function.
function addJsonToPage(FEB21C){
//trying to console my data.
console.log(FEB21C);	
	

//I am using this funtion to ask the javascript to find what data is there in fifth row of the catlist series on json file
// and also asking it to take and print it in the webpage.  
var VeryfirstDiv = $("<div>");	
$(VeryfirstDiv).html(FEB21C.catlist[4].type);
$("#bigBag").append(VeryfirstDiv);


//This is same funtion but this time I am asking the javascript to find the data that I have on the sixth row of catlist series 
// on jason file.
var godfirstDiv = $("<div>");	
$(godfirstDiv).html(FEB21C.catlist[5].type);
$("#bigBag").append(godfirstDiv);


var godfirstDiv = $("<div>");	
$(godfirstDiv).html(FEB21C.catlist[0].type);
$("#bigBag").append(godfirstDiv);

}

function economy(){
	
	//This is my first function and this function will add a sentence in the in my webpage.
	
var firstDiv = $("<div>");	
$(firstDiv).html("How the economic indicators in February is a hard question to answer.")
$("#bigBag").append(firstDiv);


// Instead of using the plane javascript, I am using the jQuary because it is short and easy to remember.


firstDiv.innerHTML = "Here is my first div"

//This is my second function that added another sentence in my web page.

var secondDiv = $("<div>");
$(secondDiv).html("Economists say much will depend uopn how the emerging economies, particulalry China and India will do.");
$("#bigBag").append(secondDiv);

//This is my third function, which added the last sentence in the web page. 
	
var thirdDiv = $("<div>");
$(thirdDiv).html("Hopes are high that the EU is planning to take some fiscal measures to boost the economy.");
$("#bigBag").append(thirdDiv);
	

//Here we are gonig to giv three arguements. The first one will ask the computer to get the data that I want. The second
// is the function that passes my data stored in the json file to webpage once it has the access to the data.

$.get("FEB21C.json", addJsonToPage, "json");
	
	
	
	
	
console.log("Weak economic activities in January suggest that unemployment can rise again");	
}





$(document).ready(economy);

console.log("Bad weather blamed for slowing demand")

// I watched the video but I was unable to understand why sequence of the santances are not appearing in the way we have 
//put here.
