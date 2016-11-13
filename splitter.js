
var aliceTotal = 0;
var archanaTotal = 0;
var vinutnaTotal = 0;
var ishaTotal = 0;


// Calculations Stuff
function updateTotals() {
	var number = document.querySelectorAll('input[type="checkbox"]:checked').length;
	var price = document.getElementById("price").value;
	var perPerson = price / number;


	if(document.getElementById("aliceCheck").checked) {
		aliceTotal += perPerson;
		document.getElementById("aliceTotalNum").innerHTML = "$" + aliceTotal.toFixed(2);
	}
	if(document.getElementById("archanaCheck").checked) {
		archanaTotal += perPerson;
		document.getElementById("archanaTotalNum").innerHTML = "$" + archanaTotal.toFixed(2);
	}
	if(document.getElementById("vinutnaCheck").checked) {
		vinutnaTotal += perPerson;
		document.getElementById("vinutnaTotalNum").innerHTML = "$" + vinutnaTotal.toFixed(2);
	}
	if(document.getElementById("ishaCheck").checked) {
		ishaTotal += perPerson;
		document.getElementById("ishaTotalNum").innerHTML = "$" + ishaTotal.toFixed(2);
	}
}








// Grocery List Stuff
// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// Create a new list item when clicking on the "Add" button
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("item").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must name the item!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("item").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
  
  updateTotals();

}
