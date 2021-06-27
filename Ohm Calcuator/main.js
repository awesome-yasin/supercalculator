// the function that calculates voltage.
function gir(ohmsc) {
    // variables declared, parseFloat assures that they are interperted
    // as numbers, not chars.
          vv = parseFloat(ohmsc.vv.value);
          aa = parseFloat(ohmsc.aa.value);
          rr = parseFloat(ohmsc.rr.value);
          ww = parseFloat(ohmsc.ww.value);
    // Here the voltage and power are calculated based on the current and
    // resistance.  The Volts and Watts strings are appended to the answers.
          vv = aa * rr;
          if (aa.toPrecision) //if browser supports toPrecision() method
          ohmsc.vv.value = vv.toPrecision(6);
          ohmsc.vv.value = ohmsc.vv.value + " Volts";
          ww = aa * aa * rr;
          if (ww.toPrecision) //if browser supports toPrecision() method
          ohmsc.ww.value = ww.toPrecision(6);
          ohmsc.ww.value = ohmsc.ww.value + " Watts";
           }
    
    // the function that calculates current.
       function ger(ohmsc) {
    // variables declared, parseFloat assures that they are interperted
    // as numbers, not chars.
          vv = parseFloat(ohmsc.vv.value);
          aa = parseFloat(ohmsc.aa.value);
          rr = parseFloat(ohmsc.rr.value);
          ww = parseFloat(ohmsc.ww.value);
    // Here the current and power are calculated based on the voltage and
    // tresistance.  The Amps and Watts strings are appended to the answers.
          aa = vv / rr;
          if (aa.toPrecision) //if browser supports toPrecision() method
          ohmsc.aa.value = aa.toPrecision(6);
          ohmsc.aa.value = ohmsc.aa.value + " Amps";
          ww = aa * aa * rr;
          if (ww.toPrecision) //if browser supports toPrecision() method
          ohmsc.ww.value = ww.toPrecision(6);
          ohmsc.ww.value = ohmsc.ww.value + " Watts";
           }
    // -----------------------------------------------------------------------------
    // the function that calculates resistance.
       function gei(ohmsc) {
    // variables declared, parseFloat assures that they are interperted
    // as numbers, not chars.
          vv = parseFloat(ohmsc.vv.value);
          aa = parseFloat(ohmsc.aa.value);
          rr = parseFloat(ohmsc.rr.value);
          ww = parseFloat(ohmsc.ww.value);
    // Here the resistance and power are calculated based on the voltage and
    // current.  The Ohms and Watts strings are appended to the answers.
    // The 'toPrecision' method limits the 0utput to 6 digits.
          rr = vv / aa;
          if (rr.toPrecision) //if browser supports toPrecision() method
          ohmsc.rr.value = rr.toPrecision(6);
          ohmsc.rr.value = ohmsc.rr.value + " Ohms";
          ww = vv * aa;
          if (ww.toPrecision) //if browser supports toPrecision() method
          ohmsc.ww.value = ww.toPrecision(6);
          ohmsc.ww.value = ohmsc.ww.value + " Watts";
           }
    
    // the function that calculates power.
       function gpwr(ohmsc) {
    // variables declared, parseFloat assures that they are interperted
    // as numbers, not chars.
          vv = parseFloat(ohmsc.vv.value);
          aa = parseFloat(ohmsc.aa.value);
    //      rr = parseFloat(ohmsc.rr.value);
          ww = parseFloat(ohmsc.ww.value);
    // Here the power is calculated based on the voltage and current
    // The Watts string is appended to the answers.
    
          ww = vv * aa;
          if (ww.toPrecision) //if browser supports toPrecision() method
          ohmsc.ww.value = ww.toPrecision(6);
          ohmsc.ww.value = ohmsc.ww.value + " Watts";
           }
    
               // End -->