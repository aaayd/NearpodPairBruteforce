/* How to use
var allBoxes=document.querySelectorAll(".grid_tile__Tile--3PM9R"),matchEquality=[];for(console.log("/script start/"),i=0;i<allBoxes.length;i++){for(j=0;j<allBoxes.length&&allBoxes[j]!=allBoxes[i];j++)allBoxes[j].click(),allBoxes[i].click();i%2==0&&console.log("[/] found "+i/2+"/"+allBoxes.length/2+" pairs")}for(console.log("[!] FOUND ALL MATCHING PAIRS!"),console.log("\n\nPairs\n-----------------------"),i=0;i<allBoxes.length;i++){allBoxes[i].click();var matches=document.querySelectorAll(".full_tile__text--3TLws");matchEquality.includes(matches[0].textContent)||console.log(matches[0].textContent+" | "+matches[1].textContent),matchEquality.push(matches[1].textContent),document.querySelectorAll(".modalizer__modalizer_close--1e5uX")[0].click()}console.log("-----------------------\n/script end/");

copy entire line above and paste into chrome console
*/

var allBoxes = document.querySelectorAll(".grid_tile__Tile--3PM9R")
var matchEquality = []

console.log('/script start/')
for (i = 0; i < allBoxes.length; i++) { 
    for (j = 0; j < allBoxes.length; j++) {
		if (allBoxes[j] == allBoxes[i])
	    	break

	        allBoxes[j].click()
	        allBoxes[i].click()
	}

	if (i % 2 == 0)
		console.log('[/] found ' + (i / 2 + 1) + '/' + allBoxes.length / 2 + ' pairs')
}

console.log("[!] FOUND ALL MATCHING PAIRS!")
console.log ("\n\nPairs\n-----------------------")

for (i = 0; i < allBoxes.length; i++) {
	allBoxes[i].click()

	var matches = document.querySelectorAll(".full_tile__text--3TLws")
	if (!matchEquality.includes(matches[0].textContent))
		console.log(matches[0].textContent + ' | ' + matches[1].textContent)
		matchEquality.push(matches[1].textContent)

		document.querySelectorAll(".modalizer__modalizer_close--1e5uX")[0].click()
}
console.log('-----------------------\n/script end/')
