let textvalue=document.getElementById("inputdata");
let guessstatus=document.getElementById("status");
let randomnum=Math.ceil(Math.random()*100);
console.log(randomnum)
function checkit(){
	let valuesnum=parseInt(textvalue.value)
	if (randomnum>valuesnum){
		guessstatus.textContent="TOO Low! Try again";
		guessstatus.style.color="white";
	}
	else if (randomnum<valuesnum){
		guessstatus.textContent="TOO high! Try again";
		guessstatus.style.color="white";
	}
	else{
		guessstatus.textContent="Congratulation u win";
		guessstatus.style.color="white";
	}
}