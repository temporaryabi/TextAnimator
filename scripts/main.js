
function myClick() {
  setTimeout(
    function() {
      window.location.reload();
    }, 75);
}





var color1 = false; //blue
var color2 = false; //orange
var color3 = false; //green
var color4 = false; //red
var color5 = false; //purple
var squares = false; //square
var circles = false; //circle
var typeBubbles = false; //bounceBubbles
var typeName = false; //bounceName
var text2animate = "";


var letterColor1 = [196, 77, 55]; //blue
var letterColor2 = [40, 100, 60]; //orange
var letterColor3 = [75, 100, 40]; //green
var letterColor4 = [0, 100, 63];  //red
var letterColor5 = [280, 50, 60]; //purple
var colorSet = [];

function runAnimation() {
    
    if(color1 && color2 && color3 && color4 && color5) {
        colorSet = [letterColor1, letterColor2, letterColor3, letterColor4, letterColor5];
    }else if(color1 && color2 && color3 && color4) {
        colorSet = [letterColor1, letterColor2, letterColor3, letterColor4];   
    }else if(color1 && color2 && color3 && color5) {
        colorSet = [letterColor1, letterColor2, letterColor3, letterColor5];
    }else if(color1 && color2 && color4 && color5) {
        colorSet = [letterColor1, letterColor2, letterColor4, letterColor5];   
    }else if(color1 && color3 && color4 && color5) {
        colorSet = [letterColor1, letterColor3, letterColor4, letterColor5];
    }else if(color2 && color3 && color4 && color5) {
        colorSet = [letterColor2, letterColor3, letterColor4, letterColor5];   
    }else if(color1 && color2 && color3) {
        colorSet = [letterColor1, letterColor2, letterColor3];
    }else if(color1 && color2 && color4) {
        colorSet = [letterColor1, letterColor2, letterColor4];
    }else if(color1 && color3 && color4) {
        colorSet = [letterColor1, letterColor3, letterColor4];
    }else if(color2 && color3 && color4) {
        colorSet = [letterColor2, letterColor3, letterColor4];
    }else if(color1 && color2 && color5) {
        colorSet = [letterColor1, letterColor2, letterColor5];
    }else if(color1 && color3 && color5) {
        colorSet = [letterColor1, letterColor3, letterColor5];
    }else if(color2 && color3 && color5) {
        colorSet = [letterColor2, letterColor3, letterColor5];
    }else if(color1 && color4 && color5) {
        colorSet = [letterColor1, letterColor4, letterColor5];
    }else if(color2 && color4 && color5) {
        colorSet = [letterColor2, letterColor4, letterColor5];
    }else if(color3 && color4 && color5) {
        colorSet = [letterColor3, letterColor4, letterColor5];
    }else if(color1 && color2) {
        colorSet = [letterColor1, letterColor2];
    }else if(color1 && color3) {
        colorSet = [letterColor1, letterColor3];
    }else if(color1 && color4) {
        colorSet = [letterColor1, letterColor4];
    }else if(color1 && color5) {
        colorSet = [letterColor1, letterColor5];
    }else if(color2 && color3) {
        colorSet = [letterColor2, letterColor3];
    }else if(color2 && color4) {
        colorSet = [letterColor2, letterColor4];
    }else if(color2 && color5) {
        colorSet = [letterColor2, letterColor5];
    }else if(color3 && color4) {
        colorSet = [letterColor3, letterColor4];
    }else if(color3 && color5) {
        colorSet = [letterColor3, letterColor5];
    }else if(color4 && color5) {
        colorSet = [letterColor4, letterColor5];
    }else if(color1) {
        colorSet = [letterColor1];
    }else if(color2) {
        colorSet = [letterColor2];
    }else if(color3) {
        colorSet = [letterColor3];   
    }else if(color4) {
        colorSet = [letterColor4];
    }else if(color5) {
        colorSet = [letterColor5];
    }else{
        colorSet = [letterColor1, letterColor2, letterColor3, letterColor4, letterColor5];
    }

    if(squares){
       bubbleShape = 'square';  
    }else{
        bubbleShape = 'circle';
    }
    
    if(typeName){
        bounceName();    
    }else{
        bounceBubbles();    
    }
    
    drawName(text2animate, colorSet);
    
}

function animate() {

    color1 = false;
    color2 = false;
    color3 = false;
    color4 = false;
    color5 = false;
    squares = false;
    circles = false;
    typeBubbles = false;
    typeName = false;
    
    if(document.getElementById('blue').checked){ 
        color1 = true;
    }
    if(document.getElementById('orange').checked){
        color2 = true;
    }
    if(document.getElementById('red').checked){ 
        color4 = true;
    }
    if(document.getElementById('green').checked){ 
        color3 = true;
    }
    if(document.getElementById('purple').checked){ 
        color5 = true;
    }
    if(document.getElementById('square').checked){
        squares = true;
    }
    if(document.getElementById('circle').checked){
        circles = true;   
    }
    if(document.getElementById('radioBubble').checked){
        typeBubbles = true;
    }
    if(document.getElementById('radioName').checked){
        typeName = true;
    }
    
    var textBox = $('#myTextName');
    
    if(textBox.val == null){
        text2animate = "Enter Some Text";   
    }else{
        text2animate = textBox.val();
    }
    
    runAnimation();
    
}

var MyLovelyCanvas = $('#myCanvas');
var HTMLform = $('.form-container');
var HTMLanimation = $('.animationCanvas');

var hiding = function() {
    HTMLform.show();
    HTMLanimation.hide();
    MyLovelyCanvas.hide();

};
                     
$(document).ready(hiding);

$('.formSubmit').click(function() {   
    animate();
    HTMLform.slideToggle();
    HTMLanimation.slideToggle();
    MyLovelyCanvas.slideToggle();
});

$('.animationDone').click(function() {   
    HTMLform.slideToggle();
    HTMLanimation.slideToggle();
    MyLovelyCanvas.slideToggle();
    myClick();
});