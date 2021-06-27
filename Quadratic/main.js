
function miroir(){
	mi1=document.form1.a.value;
	mi2=document.form1.b.value;
	mi3=document.form1.c.value;
	if (mi1==1){
		document.form1.aff1.value="";
	}
	else{
		document.form1.aff1.value=mi1;
	}
	if (mi2==1){
		document.form1.aff2.value="";
	}
	else{
		document.form1.aff2.value=mi2;
	}
	if (mi3==""){
		document.form1.aff3.value="+ "+0;
	}
	else if (mi3>0){
		document.form1.aff3.value="+ "+mi3;
	}
	else{
		document.form1.aff3.value= mi3;
	}
}
function values(){
	a=document.form1.a.value;
	b=document.form1.b.value;
	c=document.form1.c.value;
	if ((a=="")&&(c!="")){
		a=1;
	}
	else if((b=="")&&(c!="")){
		b=1;
	}
}
function delta(){
	r1="calculating the discriminant:\n";
	var f1="Discriminant (Δ) = b^2 - 4ac\n"
	d=(b*b)-4*a*c;
	var f2="Discriminant (Δ) = ";
	r2=document.form1.result.value=r1+f1+f2+d;
		
	}
function condition(d){
	if ((d < 0)&&(a!=0)){
		var f3="\nThe equation has no roots ( in R) , so the expression is the ";
		f3+="sign of a. As a result:\n";
		f3+="for a > 0, the set of solutions of the inequality is R and\n";
		f3+="for a < 0 the set of solutions of the inequality is Ø";
		document.form1.result.value=r2+f3;
		}
	else if ((d == 0)&&(a!=0)){
		var f4="\nThe equation has a double root\n";
		f4+="x1=x2=-b/2a \n";
		var x=-b/(2*a);
		document.form1.result.value=r2+f4+"\nx1 = x2 = "+x;
		}
	else if (a!=0){
		f5="\n\nThe equation has two roots\n";
		f5+="Calculatins x1 and x2: \n";
		f5+="x1=(-b-√Δ)/2a  and  x2=(-b+√Δ)/2a \n";
		x1=(Math.round(((-b-(Math.sqrt(d)))/(2*a))*100))/100;
		x2=(Math.round(((-b+(Math.sqrt(d)))/(2*a))*100))/100;
		f5+="x1 = "+x1;
		f5+="\nx2 = "+x2;
		S="\nThe whole solution is: \nS={"+x1+";"+x2+"}";
		document.form1.result.value=r2+f5+S;
	}  
	else if((a==0)&&(b==0)){
		f6="Error !!! A and B can not both be zero";
		document.form1.result.value=f6;
	}
	else{
		f7="A is zero , therefore : ";
		f7+="x = -c/b \n";
		x=-c/b;
		document.form1.result.value=f7+"x = "+x;
	}
	}
function main(){
	values();
	if (c!=""){
		if((isNaN(a)==true)||(isNaN(b)==true)||(isNaN(c)==true)){
			alert("Error! Enter only numbers in the case");
		}
		else{
			delta();
			condition(d);
		}		
	}
	else{
		alert("Please, Enter a third value. C cannot be nul")
	}
	}
