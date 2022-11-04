import dogsData from "./data.js"
import Dogs from "./Dogs.js"


let currentDogIndex = 0
let newDog = new Dogs(dogsData[currentDogIndex])

const badge = document.getElementById('badge')

document.getElementById("reject-button").addEventListener("click", reject)
document.getElementById("accept-button").addEventListener("click", accept)

function render() {
	document.getElementById("dogs").innerHTML = newDog.getDogsHtml()
}

render()

function getNewDog() {
	currentDogIndex += 1
	if(currentDogIndex == 3) {
		document.getElementById("dogs").innerHTML = `<div class='no-profile-text'>🐶 No more profiles. Try again later.</div>`
	} else {
		newDog = new Dogs(dogsData[currentDogIndex])
		render()
	}
}


function accept() {
	newDog.setMatchStatus(true)
	setTimeout(getNewDog, 1000)
	badge.innerHTML = `
	<div>
	<img class='badge-nope' src="images/badge-like.png">
	</div>
	`
	setTimeout(removeBadge, 1000)
}

function reject() {
	newDog.setMatchStatus(false)
	setTimeout(getNewDog, 1000)
	badge.innerHTML = `
	<div>
	<img class='badge-like' src="images/badge-nope.png">
	</div>
	`
	setTimeout(removeBadge, 1000)
}

function removeBadge() {
	badge.innerHTML = ""
}

