var a=8
var b=4
if(a<b){
    console.log("hello")
    console.log("yes")
}else {
    console.log("no")
}

var a=0
var b=8
var c=4

if (a>=b & a>=c){
    console.log("yes a max",a)
}else if (b>=a &  b>=c){
    console.log("yes b max ",b)
}else{
    console.log("yes c max ",c)
}
if (a>=b & a<=c){
    console.log("yes a sec",a)
}else if(b>=a & b<=c){
    console.log("yes b sec",b)
}else{
    console.log("yes c sec ", c)
}