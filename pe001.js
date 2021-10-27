let zbroj = 0;
for (let N = 1; N < 1000; N ++) {
    if (N%3===0 || N%5===0) zbroj += N;
}
console.log(zbroj);