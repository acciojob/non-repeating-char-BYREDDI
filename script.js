function firstNonRepeatedChar(str) {
 // Write your code here
	str.sort((a,b)=>a-b);
	console.log(str);
	for(let i=0;i<str.length-2;i++)
		{
			let j=i+1,k=i+2;
		}
}
//const input = prompt("Enter a string");
//alert(firstNonRepeatedChar(input)); 
