/*
function Bruteforce(e){for(i=0;i<e.length;i++){for(j=0;j<e.length&&e[j]!=e[i];j++)e[j].click(),e[i].click();i%2==0&&console.log(`[/] found ${i/2+1}/${e.length/2} pairs`)}console.log("\n[!] FOUND ALL MATCHING PAIRS!")}function OutputPairs(e){var l=[];for(output=[],i=0;i<e.length;i++){e[i].click();var t=[document.querySelectorAll(".full_tile__text--3TLws")[0].textContent,document.querySelectorAll(".full_tile__text--3TLws")[1].textContent];l.includes(t[0])||l.includes(t[1])||(console.log(`\n---------------\n${t[0]}\n${t[1]}\n---------------\n`),l.push(t[1]),output.push([[t[0]],t[1]]),document.querySelectorAll(".modalizer__modalizer_close--1e5uX")[0].click())}return output}console.log("/script start/");var allBoxes=document.querySelectorAll(".grid_tile__Tile--3PM9R");Bruteforce(allBoxes);var pairs=OutputPairs(allBoxes);console.log("/script end/");
*/

function Bruteforce(allBoxes)
{
	
	for (i = 0; i < allBoxes.length; i++) { 
	    for (j = 0; j < allBoxes.length; j++) {
			if (allBoxes[j] == allBoxes[i])
		    	break

		        allBoxes[j].click()
		        allBoxes[i].click()
		}

		if (i % 2 == 0) { console.log(`[/] found ${(i / 2 + 1)}/${allBoxes.length / 2} pairs`) }
	}
	console.log('\n[!] FOUND ALL MATCHING PAIRS!')
}

function OutputPairs(allBoxes) {
	var matchEquality = []
	output = []
	for (i = 0; i < allBoxes.length; i++) {
		allBoxes[i].click()

		var tempPair = [document.querySelectorAll('.full_tile__text--3TLws')[0].textContent,document.querySelectorAll('.full_tile__text--3TLws')[1].textContent]
	
		if (matchEquality.includes(tempPair[0]) || matchEquality.includes(tempPair[1]))
			continue

		else
			console.log(`\n---------------\n${tempPair[0]}\n${tempPair[1]}\n---------------\n`)
			matchEquality.push(tempPair[1])
			output.push([[tempPair[0]], tempPair[1]])

		document.querySelectorAll('.modalizer__modalizer_close--1e5uX')[0].click()
	}
	return output
}

console.log('/script start/')

var allBoxes = document.querySelectorAll(".grid_tile__Tile--3PM9R")

Bruteforce(allBoxes)
var pairs = OutputPairs(allBoxes)

console.log('/script end/')
