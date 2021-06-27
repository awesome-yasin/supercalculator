//UTILITY FUNCTIONS
function decnNumber(num){
    var tmp = Math.pow(10,num)*this.valueOf();
    return (Math.round(tmp))/Math.pow(10,num);
 }
 Number.prototype.decn = decnNumber;
 N = 2;	//Sets the number of decimal places in the output
 
 //STRING FUNCTIONS
 function Trim(str){
    return LTrim(RTrim(str));
 }
 function LTrim(str){
    while (str.charAt(0) == " ")        
       str =  str.substring(1);       
    return str;
 }
 function RTrim(str){
    var i=str.length-1;
    while (str.charAt(i) == " "){
       str = str.substring(0,i);
       i = str.length -1;
    }
    return str;
 }
 function countChar(ch,str){
    var cnt = 0;
    for (var idx=0; idx<str.length; idx++)
       if (str.charAt(idx) == ch) cnt += 1;
    return cnt;
 }
 
 //THE SERIES AND PARALLEL FUNCTIONS
 function s(x,y){
    var numArgs = s.arguments.length;
    var sum = 0;
    for (var i = 0; i < numArgs; i++)
             sum += s.arguments[i];
    return sum;
 }
 function p(x,y){
    var numArgs = p.arguments.length;
    var sum = 0;
    for (var i = 0; i < numArgs; i++)
             sum += 1/p.arguments[i];
    return 1/sum;
 }
 //INTERFACE FUNCTIONS
 function checkInput(str){
    str = Trim(str);  
    if (countChar("(", str) != countChar(")",str)) {
       alert("Parentheses not closed");
       return false;
    }
    if (str.charAt(0)=="s") return true;
    if (str.charAt(0)=="p") return true;
    //alert("Begin with s or p");return false;
    return true; //5Oct11 -I deleted preceding line and added this line
 }
 function evaluateX(f){
     if (checkInput(f.inFld.value))
         f.outFld.value=(eval(f.inFld.value)).decn(N);
 }
 function clearOutput(f){
     f.outFld.value = "";
 }