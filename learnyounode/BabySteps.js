var sum = 0;
var i = 2
while (i < process.argv.length)
    {
        sum  = sum + Number(process.argv[i]);
        i = i + 1;
    }
console.log(sum);


// --> Official Solution <--

var result = 0

for (var i = 2; i < process.argv.length; i++) {
  result += Number(process.argv[i])
}

console.log(result)
