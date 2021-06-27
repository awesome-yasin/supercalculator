//for help: https://www.desmos.com/api/v0.6/docs/index.html#document-expressions
//begin a graph item
//change below ID to match the div in the html file Id, change latex, change math bounds, change axis info
var elt = document.getElementById('u1s2p3a');

var calculator = Desmos.Calculator(elt, {
  zoomButtons: false,
  expressions: true,
  settingsMenu: false,
  expressionsCollapsed: true
});
calculator.setExpressions([
  //don't change the id, but change the latex formula
  {
    id: 'graph',
    latex: 'y=x^2'
  }, {
    id: 'graph2',
    latex: 'y=2x'
  }, {
    type: 'table',
    columns: [{
      latex: 'x',
      values: ['2', '1']
    }, {
      latex: 'y',
      values: ['4', '5'],
      dragMode: Desmos.DragModes.XY
    }]
  }
]);
calculator.setMathBounds({
  //change below to change graph bounds
  left: -1,
  right: 4,
  bottom: -1,
  top: 10
});
calculator.setGraphSettings({
  //change values below to set axis scale or labels - set to 0 for auto
  xAxisLabel: '', //set this to 2 single quotes for nothing ''
  yAxisLabel: '',
  xAxisStep: 1, // x axis count step
  yAxisStep: 1
}); //end the graph item























//begin a graph item
//change below ID to match the div in the html file Id, change latex, change math bounds, change axis info
var elt = document.getElementById('123');

var calculator = Desmos.Calculator(elt, {
  zoomButtons: true,
  expressions: true,
  settingsMenu: true
});
calculator.setExpressions([
  //don't change the id, but change the latex formula
  {
    id: 'graph',
    latex: ''
  }
]);
calculator.setMathBounds({
  //change below to change graph bounds
  left: -20,
  right: 20,
  bottom: -20,
  top: 20
});
calculator.setGraphSettings({
  //change values below to set axis scale or labels - set to 0 for auto
  xAxisLabel: '', //set this to 2 single quotes for nothing ''
  yAxisLabel: '',
  xAxisStep: 5, // x axis count step
  yAxisStep: 5
}); //end the graph item






//bell
var elt = document.getElementById('bell');

var calculator123 = Desmos.Calculator(elt, {
  zoomButtons: true,
  expressions: true,
  settingsMenu: true
});
calculator123.setExpressions([
  //don't change the id, but change the latex formula
  {
    id: 'graph1',
    latex: 'f(x)=e^{(-{(x-a)^2}/{b})}',
  },
   {
    id: 'slider1',
    latex: 'a=0',
    sliderBounds: {
      min: 0,
      max: 0,
      step: 1
    }
  }, {
       id: 'slider2',
    latex: 'b=1',
    sliderBounds: {
      min: .01,
      max: 10,
      step: .01
    }
  }, {
    id: 'graph4',
    latex: '0<y\\le f\\left(x\\right)\\left\\{x_1<x<x_2\\right\\}',
    color: '#8064A2'
  }, {
    id: 'slider3',
    latex: 'x_1=-1',
    sliderBounds: {
      min: -6.5,
      max: 6.5,
      step: .01
    }
  }, {
    id: 'slider4',
    latex: 'x_2=1',
    sliderBounds: {
      min: -6.5,
      max: 6.5,
      step: .01
    }
  }

]);
calculator123.setMathBounds({
  //change below to change graph bounds
  left: -3,
  right: 3,
  bottom: -.2,
  top: 1.2
});
calculator123.setGraphSettings({
  //change values below to set axis scale or labels - set to 0 for auto
  xAxisLabel: '', //set this to 2 single quotes for nothing ''
  yAxisLabel: '',
  xAxisStep: '', // x axis count step
  yAxisStep: ''
}); //end the graph itemsssdf

function getstate123() {
  var state123 = calculator123.getState();
  console.log(state123);
  //window.alert(state123);
}