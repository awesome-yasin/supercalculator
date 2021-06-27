const colors = [
    "#CCCCFF",
    "#DFFF00",
    "#f7347a",
    "#0e2f44",
    "#6897bb",
    "#696969",
    "#cbcba9",
    "#5ac18e",
    "#FFBF00",
    "#800000",
    "#800080",
    "#0000FF",
    "#000080",
    "#008080",
    "#6495ED",
    "#40E0D0",
    "#DE3163",
    "#FF7F50",
    "#800080"
  ];
  
  const crypto = [
    
    "tether",
    "bitcoin-cash",
    "litecoin",
    "chainlink",
    "cardano",
    "polkadot",
    "binance-coin",
    "stellar",
    "usd-coin",
    "bitcoin-sv",
    "eos",
    "monero",
    "wrapped-bitcoin",
    "tron",
    "nem",
    
    
   
  ];
  
  for (color in colors) {
    const div = document.createElement("div");
    const el = document.createElement("crypto-converter-widget");
    div.className = "column is-4";
    el.setAttribute("background-color", colors[color]);
    el.setAttribute("live", true);
    el.setAttribute("shadow", true);
    el.setAttribute("symbol", true);
    el.setAttribute("crypto", crypto[color]);
  
    div.appendChild(el);
    document.getElementById("main").appendChild(div);
  }
  