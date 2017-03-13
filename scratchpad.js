/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */

document.title = "JavaScript";

var fibSlider = function(me) {
	var form = me.parentNode;
	var button = form.querySelector('button');
	button.textContent = 'Fib(' + me.value + ')';
}
var fibButton = function(me){
    var form = me.parentNode;
    var slider = form.querySelector("input");
    var number = slider.value;
    fibTree(number, form.parentNode);
}
var pellSlider = function(me) {
	var form = me.parentNode;
	var button = form.querySelector('button');
	button.textContent = 'Pell(' + me.value + ')';
}
var tribSlider = function(me) {
	var form = me.parentNode;
	var button = form.querySelector('button');
	button.textContent = 'Trib(' + me.value + ')';
}
function fib(n){
  n = parseInt(n);
  var div = document.createElement("div");
  div.setAttribute("class", "twotree");
  var value;
  if(n < 2){
    if(n === 0){
      value = 0;
    }
    if(n === 1){
      value = 1;
    }
    var poop = document.createElement("p");
    poop.textContent = "Fib(" + n + ") = " + value;
    div.appendChild(poop);
  }
  else{
    var left = fib(n - 1);
    var cals = left.html.getAttribute("class");
    left.html.setAttribute("class", cals + " twoleft");
    
    var right = fib(n - 2);
    cals = right.html.getAttribute("class");
    right.html.setAttribute("class", cals + " tworight");
    
    value = right.value + left.value;
    
    var poop = document.createElement("p");
    poop.textContent = "Fib(" + n + ") = " + value;
    div.appendChild(poop);
    
    div.appendChild(left.html);
    div.appendChild(right.html);
  }
  return {'value': value, 'html': div};
}
function fibTree(n , node){
    var tree = node.querySelector("div.twotree");
    if(tree){
        node.removeChild(tree);
    }
    var display = fib(n);
    node.appendChild(display.html);
    node.setAttribute("id", "hello")
}

function trib(n){
    n = parseInt(n);
    var value;
    var div = document.createElement("div");
    div.setAttribute("class", "twotree");
    if(n < 3){
        if(n === 2){
            value = 1;
        }
        if(n === 1){
            value = 0;
        }
        if(n === 0){
            value = 0;
        }
        var par = document.createElement("p");
        par.textContent = "Trib(" + n + ") = " + value;
        div.appendChild(par);
    }
    else{
        var left = trib(n - 1);
        var cals = left.html.getAttribute("class");
        left.html.setAttribute("class", cals + " threeleft");
        
        var mid = trib(n - 2);
        cals = mid.html.getAttribute("class");
        mid.html.setAttribute("class", cals + " threecenter");
        
        var right = trib(n - 3);
        cals = right.html.getAttribute("class");
        right.html.setAttribute("class", cals + " threeright");
        
        value = left.value + right.value + mid.value;
        var par = document.createElement("p");
        par.textContent = "Trib(" + n + ") = " + value;
        div.appendChild(par);
        
        div.appendChild(left.html);
        div.appendChild(mid.html);
        div.appendChild(right.html);
        
    }
    return {'value': value, 'html': div};
}
function tribTree(n, node){
    var display = trib(n);
    node.appendChild(display.html);
    node.setAttribute("id", "threetree");
    
}
function pell(n){
    n = parseInt(n);
    var value;
    var div = document.createElement("div");
    div.setAttribute("class", "twotree");
    if(n < 2){
        if(n === 1){
            value = 1;
        }
        if(n === 0){
            value = 0;
        }
        var para = document.createElement("p");
        para.textContent = "Pell(" + n + ") = " + value;
        div.appendChild(para);
    }
    else{
        var left = pell(n-1);
        var cals = left.html.getAttribute("class");
        left.html.setAttribute("class", cals + " twoleft");
        
        var right = pell(n-2);
        cals = right.html.getAttribute("class");
        right.html.setAttribute("class", cals + " tworight");
        
        value = 2*left.value + right.value;
        
        var para = document.createElement("p");
        para.textContent = "Pell(" + n + ") = " + value;
        div.appendChild(para);
        
        div.appendChild(left.html);
        div.appendChild(right.html);
    }
    return {'value': value, 'html': div};
}
function pellTree(n, node){
    var display = pell(n);
    node.appendChild(display.html);
    node.setAttribute("id", "twotree");
}

var divMaker = function(id, n) {
	return function() {
		var div = document.createElement('div');
		div.setAttribute('class', 'maindiv' + n);
		div.setAttribute('id', id);
		document.body.appendChild(div);
	}
}

var fibDiv = divMaker("twotree", 1);
var pellDiv = divMaker("twotree", 2);
var tribDiv = divMaker("threetree", 3);
fibDiv();
pellDiv();
tribDiv();
fibTree(11, document.querySelector(".maindiv1"));
pellTree(11, document.querySelector(".maindiv2"));
tribTree(11, document.querySelector(".maindiv3"));
