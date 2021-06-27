    
 (function(){var a;a=function(){var a,b;b=document.createElement("script");b.src="../passwordmeter/zxcvbn.js";b.type="text/javascript";b.async=!0;a=document.getElementsByTagName("script")[0];return a.parentNode.insertBefore(b,a)};null!=window.attachEvent?window.attachEvent("onload",a):window.addEventListener("load",a,!1)}).call(this);

    function dump(arr,level) {
var dumped_text = "";
if(!level) level = 0;

var level_padding = "";
for(var j=0;j<level+1;j++) level_padding += "    ";

if(typeof(arr) == 'object') { //Array/Hashes/Objects
 for(var item in arr) {
  var value = arr[item];
 
  if(typeof(value) == 'object') { //If it is an array,
   dumped_text += level_padding + "'" + item + "' ...<br>";
   dumped_text += dump(value,level+1);
  } else {
   dumped_text += level_padding + "'" + item + "' => \"" + value + "\"<br>";
  }
 }
} else { //Stings/Chars/Numbers etc.
 dumped_text = "===>"+arr+"<===("+typeof(arr)+")";
}
return dumped_text;
} 
    function showText(divlayer, link){
		if(document.getElementById(divlayer).style.display == "none"){
			document.getElementById(divlayer).style.display = "";
			if(link) document.getElementById(link).innerHTML = "&#x25B2;";
		}else{
			document.getElementById(divlayer).style.display = "none";
			if(link) document.getElementById(link).innerHTML = "&#x25BC;";
		}
	}
    
        
        function toggleShowHide(thisvalue){
            if(thisvalue.checked){
		document.getElementById("lgd_out_pg_pass").type = "text";
            }else{
		document.getElementById("lgd_out_pg_pass").type = "password";
            }
        }

    function generateRandomTip(){

        var tip_number = Math.floor(Math.random()*7);
        switch (tip_number){
            case 0:
                document.getElementById('tip').innerHTML = 'Stronger passwords use different types of characters';
                break;
            case 1:
                document.getElementById('tip').innerHTML = 'Avoid sequences or repeated characters in your passwords';
                break;
            case 2:
                document.getElementById('tip').innerHTML = 'Don’t simply change e’s for 3′s, a’s for 4′s etc. These are well-established password tricks which any hacker will be familiar with';
                break;
            case 3:
                document.getElementById('tip').innerHTML = 'Avoid the use of dictionary words or common names, and avoid using any personal information';
                break;
            case 4:
                document.getElementById('tip').innerHTML = 'When adding a capital or digit to your password, don’t simply put the capital at the start and the digit at the end';
                break;
            case 5:
                document.getElementById('tip').innerHTML = 'It’s often better to have longer passwords than shorter,</br> more complex ones';
                break;
            case 6:
                document.getElementById('tip').innerHTML = 'Try to make your passwords at least 15 characters long';
                break;
        }

    }
       
function toWords(number) {
    
    //is merely seconds, just return rounded numebr
    if(number<120){
         return getNumberWords(number, true)+" seconds";
    }
    var hour = 60*60;
    if(number<hour){
        minutes = number/60;
         return  getNumberWords(minutes, true)+" minutes";
    }
    
    var day = hour * 24;
    if(number<(2*day)){
        hours = number/hour;
         return  getNumberWords(hours)+" hours";
    }
    
    var month = day * 30;
    if(number<month){
        days = number/day;
         return  getNumberWords(days)+" days";
    }
    
    var year = day * 365;
    if(number<year){
        months = number/month;
         return  getNumberWords(months)+" months";
    }
    
    var century = year * 100;
    if(number<century*10){
      years = number/year;
        return  getNumberWords(years)+" years";
    }
    
    if(number<century*100){
     centuries = number/century;
     return  getNumberWords(centuries)+" centuries";
     }
     
      years = number/year;
        return  getNumberWords(years)+" years";
}

function getNumberWords(number, twoDP){
   var numberWords = "";
   
   var trillion = Math.pow(10, 12);
   var billion = Math.pow(10, 9);
   var million = Math.pow(10, 6);
   var thousand = Math.pow(10, 4);
   var hundred = Math.pow(10, 3);
   
   
   while(number/trillion >= 1){
       numberWords = " trillion " + numberWords;
       number = number/trillion;
   }
   
   while(number/billion >= 1){
       numberWords = " billion " + numberWords;
       number = number/billion;
   }
   
   while(number/million >= 1){
       numberWords = " million " + numberWords;
       number = number/million;
   }
   
   while(number/thousand >= 1){
       numberWords = " thousand " + numberWords;
       number = number/thousand;
   }
   
   while(number/hundred >= 1){
       numberWords = " hundred " + numberWords;
       number = number/hundred;
   }
   
   if(twoDP){
       decimalPoint = 100;
   }else{
        decimalPoint = 1;
   }
   number = (Math.round(number*decimalPoint)/decimalPoint)
   
   numberWords = number + numberWords;
       
   return numberWords;
}
        
        function showCharCount(password){
            document.getElementById("character_count").innerHTML = password.length;
        }
        function showHasChars(typeofchar, clear){
            if(document.getElementById(typeofchar+"_count")){
                thiselem = document.getElementById(typeofchar+"_count");
            }else{
                return false;
            }
            
            if(clear){
                thiselem.style.backgroundColor = "red";
            }else{
                thiselem.style.backgroundColor = "green";
            }
        }
        
        function checkThisPassword(password){
            var checked = zxcvbn(password);
            var timetocrack = checked.crack_time;
            var strength = checked.score;
            
            var timeinwords = toWords(timetocrack);
       
            document.getElementById("first_estimate").innerHTML = '<h1>'+timeinwords+'</h1>';
            if(password=="") strength = 5;
                
            displayStrength(strength)
            getCharacterSetOf(password)
            showCharCount(password);
            
            if(strength < 3){
                matchSequence = checked.match_sequence;
                displayWeakExplanation(matchSequence, strength);
            }else{
                document.getElementById("explanation").innerHTML = "";
            }
            if(password!=""){ displayMetaphor(strength); }else{ document.getElementById("metaphor").innerHTML = ""; }
            //displaydiv(dump(checked))
            return true;
        }
        
        function displayMetaphor(strength){
            var metaphor = ""
             switch(strength){
                case 0:
                    metaphor = "  Oh dear, using that password is like leaving your front door wide open.  ";
                break;
                case 1:
                    metaphor = " Oops, using that password is like leaving your key in the lock.  ";
                break;
                case 2:
                    metaphor = " Hmm, using that password is like locking your front door, but leaving the key under the mat.  ";
                break;
                case 3:
                    metaphor = " Good, using that password is like locking your front door and keeping the key in a safety deposit box. ";
                break;
                case 4:
                    metaphor = " Fantastic, using that password makes you as secure as Fort Knox. ";
                break;
                
            }
            document.getElementById("metaphor").innerHTML = '<span style="font-weight:bold">Review:</span> '+metaphor;
        }
        function displayWeakExplanation(matchSequence, strength){
            var strengthtext = false;
            switch(strength){
                case 0:
                    strengthtext = " very weak ";
                break;
                case 1:
                    strengthtext = " weak ";
                break;
                case 2:
                    strengthtext = " of medium strength ";
                break;
                
            }
            var matchSize = matchSequence.length;
            var pattern = false;
            var dictionary = false;
            var word = false;
            var matchType = false;
            var containsWord = "contains";
            var result = new Array();
            
            for(var i=0;i<matchSize;i++){
                pattern = matchSequence[i].pattern;
                thisRes = false;
                switch(pattern){
                    case "dictionary":
                        dictionary = dictionaryType(matchSequence[i])
                        thisType = dictionary["type"];
                        thisWord = dictionary["word"];
                        if(!result[thisType]){ result[thisType] = new Array();}
                        //result[thisType]["count"]++;
                        result[thisType][thisWord] = true;
                    break;
                    case "spatial":
                        if(matchSequence[i]["graph"]!="dvorak"){
                            if(!result["combination of characters that are close together on the keyboard"]){ result["combination of characters that are close together on the keyboard"] = new Array();}
                            thisWord = matchSequence[i]["matched_word"];
                            result["combination of characters that are close together on the keyboard"][thisWord] = true;
                        }
                    break;
                    case "sequence":
                        if(!result["sequence of characters"]){ result["sequence of characters"] = new Array();}
                        thisWord = matchSequence[i]["matched_word"];
                        result["sequence of characters"][thisWord] = true;
                    break;
                }
            }
           //document.getElementById("explanation").innerHTML = dump(result);
           //return;
            var hasWords = false;
            if(matchSize>0){
                if(matchSize===1){
                    explanation = "Your password is "+strengthtext+" because it is ";
                 }else{
                    explanation = "Your password is "+strengthtext+" because it contains ";
                 }
                   matchSize = 0;
                    for(h in result){ matchSize++; }
                    
                 var andString = " ";
                 var commaString = ", ";
                 var thisCount = 0;
                //gathered all information, now to translate into words
                for(matchType in result){
                   thisElem = result[matchType];
                   count = 0;
                    for(h in thisElem){ count++; }
                   thisCount++;
                    if(thisCount>=matchSize&&matchSize!=1){
                        andString = " and ";
                    }
                    
                    if(count>1){
                        explanation += andString + count + " " + matchType + "s";
                        hasWords = true;
                   }else{
                        explanation += andString + " a "+matchType;
                        hasWords = true;
                   }
                        andString = ", ";
                   
                }
                explanation += ".";
            }
           // document.getElementById("explanation").innerHTML = dump(result);
         document.getElementById("explanation").innerHTML = "";
          if(hasWords) document.getElementById("explanation").innerHTML = explanation;
        }
        
        function dictionaryType(pattern){
            var word = pattern["matched_word"];
            var dictionary = pattern["dictionary_name"];
            var type = false;
            
            switch(dictionary){
                case "passwords":
                    type = "common password";
                break;
                case "english":
                    type = "dictionary word";
                break;
                case "male_names":
                    type = "male name";
                break;
                case "female_names":
                    type = "female name";
                break;
                case "surnames":
                    type = "surname";
                break;
            }
            
            var res = new Array();
            res["word"] = word;
            res["type"] = type;
            
            return res;
        }
        
        function displaydiv(text){
            document.getElementById("test").innerHTML = text;
        }
        function displayStrength(c){
    var f = "Very Weak";
    var e = "e40808";
    if (c == 0) {
        f = "Very Weak"
    }
    if (c == 1) {
        f = "Weak";
        e = "e40808"
    }
    if (c == 2) {
        f = "Medium";
        e = "ffd800"
    }
    if (c == 3) {
        f = "Strong";
        e = "2cb117 "
    }
    if (c == 4) {
        f = "Very Strong";
        e = "2cb117"
    }
    if (c == 5) {
        f = "No Password";
        e = "D0D0D0"
    }
    document.getElementById("complexity-span").innerHTML = f;
    document.getElementById("complexity").style.backgroundColor = "#" + e
    }
    
            function getCharacterSetOf(password){
            if (password.search(/[a-z]/) != -1) {
                showHasChars("lower");
            }else{
                showHasChars("lower", true);
            }
            
            if (password.search(/[A-Z]/) != -1) {
                showHasChars("upper");
            }else{
                showHasChars("upper", true);
            }
            
            if (password.search(/[0-9]/) != -1) {
                showHasChars("digits");
            }else{
                showHasChars("digits", true);
            }
            
            if (password.search(/[!"#£$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~]/) != -1) {
                showHasChars("special");
            }else{
                showHasChars("special", true);
            }
        }
     
        function showHasChars(typeofchar, clear){
            if(document.getElementById(typeofchar+"_count")){
                thiselem = document.getElementById(typeofchar+"_count");
            }else{
                return false;
            }
            
            if(clear){
                thiselem.className = "char_type";
            }else{
                if(thiselem.className.indexOf('char_type_valid') == -1) {
                    thiselem.className = thiselem.className + ' char_type_valid';
                }

            }
        }