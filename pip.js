function isPrime(n){
	if (n<2) return false;
	for(var i=2;i<n;i++){
		if(n%i==0){
			return true; 
		}
	}	
		return false;
}

for(var i=0;i<20;i++){
	if(isPrime(i)) console.log(i);
}
 
var el = ar;

var ar = [1,4,53,23,9,0,];

function max(ar){
var el=ar[0];
var size = ar.length;
 for(var i=0;i<size;i++){
 if(el<ar[i])
 el = ar[i];
  }
return el;
}


console.log(max(ar));


var el = ar;

var ar = [1,4,53,23,9,0,];

function maax(ar){
var el=ar[0];
var size = ar.length;
 for(var i=0;i<size;i++){
 if(el>ar[i])
 el = ar[i];
  }
return el;
}


console.log(maax(ar));


var Numbers = [1,4,53,23,9,0,];

function Numb(Numbers){
    var n = Numbers.length;
    for (var i = 0; i < n-1; i++)
     { for (var j = 0; j < n-1-i; j++)
        { if (Numbers[j+1] < Numbers[j])
           { var t = Numbers[j+1]; Numbers[j+1] = Numbers[j]; Numbers[j] = t; }
        }
     return el;}                     
}

console.log(Numb(Numbers));