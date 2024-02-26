// Save third-page and fourth-page buttons as variables
let thirdButton = document.getElementById('third-page');
let fourthButton = document.getElementById('fourth-page');

let beanButton = document.getElementById('flower-div');
let beanButton1 = document.getElementById('flower-div1');



// Add click event to both elements and set scrollPage function as callback function
thirdButton.addEventListener('click', scrollPage);
fourthButton.addEventListener('click', scrollPage);

beanButton.addEventListener('click', scrollPage);
beanButton1.addEventListener('click', scrollPage);



function scrollPage(elementID){
	// this keyword returns the HTML element that triggered the event (in this case, click event)
	// Check id of this HTML element

	// If id name is 'flower-div'
	if(elementID === 'flower-div'){
		window.scrollTo({
			// Scroll twice the height of window height
  			top: window.innerHeight+2,
  			left: 0,
  			// Setting behavior to 'smooth' will animate the scroll
  			behavior: 'smooth'
		});
	}

	// If id name is 'flower-div1'
	if(elementID === 'flower-div1'){
		window.scrollTo({
			// Scroll twice the height of window height
  			top: window.innerHeight*2 + 2,
  			left: 0,
  			// Setting behavior to 'smooth' will animate the scroll
  			behavior: 'smooth'
		});
	}

	// If id name is 'flower-div2'
	if(elementID === 'flower-div2'){
		window.scrollTo({
			// Scroll twice the height of window height
  			top: window.innerHeight*3 + 2,
  			left: 0,
  			// Setting behavior to 'smooth' will animate the scroll
  			behavior: 'smooth'
		});
	}

	// If id name is 'flower-div3'
	if(elementID === 'flower-div3'){
		window.scrollTo({
			// Scroll twice the height of window height
  			top: 0,
  			left: 0,
  			// Setting behavior to 'smooth' will animate the scroll
  			behavior: 'smooth'
		});
	}

	// If id name is 'third-page'
	if(this.id === 'third-page'){
		window.scrollTo({
			// Scroll twice the height of window height
  			top: window.innerHeight+2,
  			left: 0,
  			// Setting behavior to 'smooth' will animate the scroll
  			behavior: 'smooth'
		});
	}

	// If id name is 'fourth-page'
	if(this.id === 'fourth-page'){
		window.scrollTo({
			// Scroll three times the height of window height
  			top: window.innerHeight * 3,
  			left: 0,
  			behavior: 'smooth'
		});
	}
}

// An array of stories as strings
let stories = [
	'Hi, I\'m Beany! Let me show you my journey from the fields to your cup of coffee :)',
	'Out in the sun, I grow in little cherries. People pick them carefully when they\'re just right.',
	'Then I go into a roaster, and voila! That\'s when I get my yummy smell and taste.',
	'Finally, hot water meets me, and we create the tasty drink you love. Ready to take a sip?'
];

let catDiv = document.getElementById('cat-div');
let catText = document.getElementById('cat-text');
let navButtons = document.getElementsByClassName('nav-btn');

// Add scroll event for the whole HTML document and set changeText function as callback
document.addEventListener('scroll', changeText);

// changeText function runs whenever scroll happens on the web page
function changeText(){
	// Uncomment line below to see scrollY position change
	// console.log(window.scrollY);

	// pos saves current scrollY position
	let pos = window.scrollY;
	// width saves current web page width
	let width = window.innerWidth;
	// height saves current web page height
	let height = window.innerHeight;
	// Calculate which section the user has scrolled to
	// parseInt() function used to ignore decimals
	let sectionNum = parseInt(pos / height);

	// Set the text of cat-text element depending on which section the user has currently scrolled to
	catText.innerHTML = stories[sectionNum];
	// Map vertical scroll position to the horizontal position of the cat
	catDiv.style.left = pos / (height * 4) * width + 'px';

	// Fix color of navigation button
	// Set all button color to white
	for(let i = 0; i < navButtons.length; i++){
		navButtons[i].style.backgroundColor = 'white';
	}

	// Set color of current section button to black
	navButtons[sectionNum].style.backgroundColor = 'black';
}