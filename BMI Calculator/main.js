function sum() {            
    var num1 = document.getElementById('number1');
    var num2 = document.getElementById('number2');
    if (num1.value !== '')
    {
        if (num2.value !== '') {
          var  a= parseInt(num1.value,0);
          var b= parseInt(num2.value,0);
           var sum = (a/(b*b))*10000;
            document.getElementById('result').value = sum;
        } 
      }
}
function convert()
  {
    var feet = parseInt(document.cform.feet.value);
    var inches = parseInt(document.cform.inches.value);
    var icm;
    var cm;
    icm=(feet*12)+inches;
    cm=icm*2.54;

     document.getElementById('cm').value = cm;
  }
  function pkconvert()
  {
    var pound = parseInt(document.cform.pound.value);
    var kg=0;
    kg=Math.floor( pound*0.452488688 );                                  
    document.getElementById('kg').value = kg ;
  }

function check()
  {

     var age = document.fform.age.value;
     var bmi = document.fform.bmi.value;
     var sex = parseInt(document.getElementById('male').checked ? 1 : 0);
     var fat;
     
     if(age<=15)
     {
       
        fat=((1.51*bmi)-(0.70*age)-(3.6*sex)+1.4);
       
      }
     else
     {
      
        fat=((1.20*bmi)+(0.23*age)-(10.8*sex)-5.4);
     
     }
     document.getElementById('fat').value = fat;
  }