let mobBlock = document.getElementsByClassName('mobile_tick')
console.log(mobBlock)

for(let i = 0; i < mobBlock.length; i++) {
	mobBlock[i].onclick = openBlock
}

function openBlock(eventObj){
	if (eventObj.target.style.transform == "rotate(180deg)") {
	eventObj.target.style.transform = "rotate(0deg)"
	eventObj.path[1].nextElementSibling.style.display = "none"
	eventObj.path[1].nextElementSibling.nextElementSibling.style.display = "none"
	} else {
		eventObj.target.style.transform = "rotate(180deg)"
		eventObj.path[1].nextElementSibling.style.display = "block"
		eventObj.path[1].nextElementSibling.nextElementSibling.style.display = "block"
		eventObj.path[5].style.background = "#f3f2da"
		eventObj.path[3].style.background = "#f3f2da"		
		console.log(eventObj.target)
		console.log(eventObj)
	}	
}