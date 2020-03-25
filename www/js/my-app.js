var $$ = Dom7;

var app = new Framework7({
  root: '#app', // App root element

  id: 'io.framework7.myapp', // App bundle ID
  name: 'Anotador Generala', // App name
  theme: 'auto', // Automatic theme detection
  // App root data
  // App root methods
  methods: {
    helloWorld: function () {
      app.dialog.alert('Hello World!');
    },
  },
  // App routes
  routes: [
  {
    path:'/about/',
    url:'about.html'
  },
      {
        path: '/anotador/',
        url: 'anotador.html',
      },
      {
        path:'/errordecampo/',
        url:'errordecampo.html'
      },
      {
        path:'/select/',
        url:'select.html'
      },
      {
        path:'/ayuda/',
        url:'ayuda.html'
      },
    ],


  // Cordova Statusbar settings
  statusbar: {
    iosOverlaysWebView: true,
    androidOverlaysWebView: false,
  },
  

});


var mainView = app.views.create('.view-main');

var id="";
var j1="",j2="";
var totalf=0;
var array1=[];
var array2=[];
var idtotal="";


// Handle Cordova Device Ready Event
$$(document).on('deviceready', function() {
     $$('#iniciar').on('click', function(){
            if ($$('#j1').val()=="" || $$('#j2').val()=="") {
                 app.dialog.alert('complete todos los campos');
                }else  {
            
               $$('#iniciar').attr('href','/about/');
            j1=$$('#j1').val();
            j2=$$('#j2').val();
               
        

            }
          });

    console.log("Device is ready!");

// Option 1. Using one 'page:init' handler for all pages
$$(document).on('page:init', function (e) {
    // Do something here when page loaded and initialized
    console.log(e);
})

// Option 2. Using live 'page:init' event handlers for each page
$$(document).on('page:init', '.page[data-name="about"]', function (e) {
    // Do something here when page with data-name="about" attribute loaded and initialized
    $$('#jj1').text(j1);
    $$('#jj2').text(j2);
    function sumatotal(a){
      totalf = a.reduce((a, b) => a + b, 0);
      console.log(totalf);
      //totalff+=$$(a).text();
      $$(idtotal).text(totalf);
      
    }
    function multiplicar(n,m){
      var final=0;
        final=n*m;
      return final;
    }
    var uno = app.actions.create({
  buttons: [
    {
      text: '1',
      bold: true,
      onClick: function(){
        if (id=='#btn1j1') {
        array1[1]=multiplicar(1,1);
        $$(id).text(array1[1]);
        console.log(array1);
        sumatotal(array1);
      }else if (id=='#btn1j2'){
          array2[1]=multiplicar(1,1);
        $$(id).text(array2[1]);
        sumatotal(array2);
        console.log(array2);
        }
        
      }
      
    },
    {
      text: '2',
      bold: true,
      onClick: function(){
       if (id=='#btn1j1') {
        array1[1]=multiplicar(1,2);
        $$(id).text(array1[1]);
        sumatotal(array1);
        console.log(array1);
      }else if (id=='#btn1j2'){
          array2[1]=multiplicar(1,2);
        $$(id).text(array2[1]);
        sumatotal(array2);
        console.log(array2);
        }
        
      }
      
    },
    {
      text: '3',
      bold: true,
      onClick: function(){
        if (id=='#btn1j1') {
        array1[1]=multiplicar(1,3);
        $$(id).text(array1[1]);
        sumatotal(array1);
        console.log(array1);
      }else if (id=='#btn1j2'){
          array2[1]=multiplicar(1,3);
        $$(id).text(array2[1]);
        sumatotal(array2);
        console.log(array2);
        }
        
      }
      
    },
    {
      text: '4',
      bold: true,
      onClick: function(){
        if (id=='#btn1j1') {
        array1[1]=multiplicar(1,4);
        $$(id).text(array1[1]);
        sumatotal(array1);
        console.log(array1);
      }else if (id=='#btn1j2'){
          array2[1]=multiplicar(1,4);
        $$(id).text(array2[1]);
        sumatotal(array2);
        console.log(array2);
        }
      }
      
    },
    {
      text: '5',
      bold: true,
      onClick: function(){
        if (id=='#btn1j1') {
        array1[1]=multiplicar(1,5);
        $$(id).text(array1[1]);
        sumatotal(array1);
        console.log(array1);
      }else if (id=='#btn1j2'){
          array2[1]=multiplicar(1,5);
        $$(id).text(array2[1]);
        sumatotal(array2);
        console.log(array2);
        }
      }
      
    },
    {
      text: 'tachar',
      bold: true,
      onClick: function(){
       if (id=='#btn1j1') {
        array1[1]=0;
        $$(id).text('x');
        sumatotal(array1);
        console.log(array1);
      }else if (id=='#btn1j2'){
          array2[1]=0;
        $$(id).text('x');
        sumatotal(array2);
        console.log(array2);
        }
      }
      
    },
    {
      text: 'Cancelar',
      color: 'red'
    },
    ]
  });

var dos = app.actions.create({
  buttons: [
    {
      text: '1',
      bold: true,
      onClick: function(){
        if (id=='#btn2j1') {
        array1[2]=multiplicar(2,1);
        $$(id).text(array1[2]);
        console.log(array1);
        sumatotal(array1);
      }else if (id=='#btn2j2'){
          array2[2]=multiplicar(2,1);
        $$(id).text(array2[2]);
        sumatotal(array2);
        console.log(array2);
        }
      }
      
    },
    {
      text: '2',
      bold: true,
      onClick: function(){
        if (id=='#btn2j1') {
        array1[2]=multiplicar(2,2);
        $$(id).text(array1[2]);
        sumatotal(array1);
        console.log(array1);
      }else if (id=='#btn2j2'){
          array2[2]=multiplicar(2,2);
        $$(id).text(array2[2]);
        sumatotal(array2);
        console.log(array2);
        }
        
      }
      
    },
    {
      text: '3',
      bold: true,
      onClick: function(){
        if (id=='#btn2j1') {
        array1[2]=multiplicar(2,3);
        $$(id).text(array1[2]);
        sumatotal(array1);
        console.log(array1);
      }else if (id=='#btn2j2'){
          array2[2]=multiplicar(2,3);
        $$(id).text(array2[2]);
        sumatotal(array2);
        console.log(array2);
        }
        
      }
      
    },
    {
      text: '4',
      bold: true,
      onClick: function(){
        if (id=='#btn2j1') {
        array1[2]=multiplicar(2,4);
        $$(id).text(array1[2]);
        sumatotal(array1);
        console.log(array1);
      }else if (id=='#btn2j2'){
          array2[2]=multiplicar(2,4);
        $$(id).text(array2[2]);
        sumatotal(array1);
        console.log(array2);
        }
        
      }
      
    },
    {
      text: '5',
      bold: true,
      onClick: function(){
       if (id=='#btn2j1') {
        array1[2]=multiplicar(2,5);
        $$(id).text(array1[2]);
       sumatotal(array1);
        console.log(array1);
      }else if (id=='#btn2j2'){
          array2[2]=multiplicar(2,5);
        $$(id).text(array2[2]);
        sumatotal(array2);
        console.log(array2);
        }
        
      }
      
    },
    {
      text: 'tachar',
      bold: true,
      onClick: function(){
        if (id=='#btn2j1') {
        array1[2]=0;
        $$(id).text('x');
        sumatotal(array1);
        console.log(array1);
      }else if (id=='#btn2j2'){
          array2[2]=0;
        $$(id).text('x');
        sumatotal(array2);
        console.log(array2);
        }
      }
      
    },
    {
      text: 'Cancelar',
      color: 'red'
    },
    ]
});
var tres = app.actions.create({
  buttons: [
    {
      text: '1',
      bold: true,
      onClick: function(){
        if (id=='#btn3j1') {
        array1[3]=multiplicar(3,1);
        $$(id).text(array1[3]);
        sumatotal(array1);
        console.log(array1);
      }else if (id=='#btn3j2'){
          array2[3]=multiplicar(3,1);
        $$(id).text(array2[3]);
        sumatotal(array2);
        console.log(array2);
        }
      }
      
    },
    {
      text: '2',
      bold: true,
      onClick: function(){
          if (id=='#btn3j1') {
        array1[3]=multiplicar(3,2);
        $$(id).text(array1[3]);
        sumatotal(array1);
        console.log(array1);
      }else if (id=='#btn3j2'){
          array2[3]=multiplicar(3,2);
        $$(id).text(array2[3]);
        sumatotal(array2);
        console.log(array2);
        }
        
      }
      
    },
    {
      text: '3',
      bold: true,
      onClick: function(){
         if (id=='#btn3j1') {
        array1[3]=multiplicar(3,3);
        $$(id).text(array1[3]);
        sumatotal(array1);
        console.log(array1);
      }else if (id=='#btn3j2'){
          array2[3]=multiplicar(3,3);
        $$(id).text(array2[3]);
        sumatotal(array2);
        console.log(array2);
        }
        
      }
      
    },
    {
      text: '4',
      bold: true,
      onClick: function(){
         if (id=='#btn3j1') {
        array1[3]=multiplicar(3,4);
        $$(id).text(array1[3]);
        sumatotal(array1);
        console.log(array1);
      }else if (id=='#btn3j2'){
          array2[3]=multiplicar(3,4);
        $$(id).text(array2[3]);
        sumatotal(array2);
        console.log(array2);
        }
        
      }
      
    },
    {
      text: '5',
      bold: true,
      onClick: function(){
         if (id=='#btn3j1') {
        array1[3]=multiplicar(3,5);
        $$(id).text(array1[3]);
        sumatotal(array1);
        console.log(array1);
      }else if (id=='#btn3j2'){
          array2[3]=multiplicar(3,5);
        $$(id).text(array2[3]);
        sumatotal(array2);
        console.log(array2);
        }
        
      }
      
    },
    {
      text: 'tachar',
      bold: true,
      onClick: function(){
         if (id=='#btn3j1') {
        array1[3]=0;
        $$(id).text('x');
        sumatotal(array1);
        console.log(array1);
      }else if (id=='#btn3j2'){
          array2[3]=0;
        $$(id).text('x');
        sumatotal(array2);
        console.log(array2);
        }
      }
      
    },
    {
      text: 'Cancelar',
      color: 'red'
    },
    ]
});
var cuatro = app.actions.create({
  buttons: [
    {
      text: '1',
      bold: true,
      onClick: function(){
         if (id=='#btn4j1') {
        array1[4]=multiplicar(4,1);
        $$(id).text(array1[4]);
        sumatotal(array1);
        console.log(array1);
      }else if (id=='#btn4j2'){
          array2[4]=multiplicar(4,1);
        $$(id).text(array2[4]);
        sumatotal(array2);
        console.log(array2);
        }
      }
      
    },
    {
      text: '2',
      bold: true,
      onClick: function(){
       if (id=='#btn4j1') {
        array1[4]=multiplicar(4,2);
        $$(id).text(array1[4]);
        sumatotal(array1);
        console.log(array1);
      }else if (id=='#btn4j2'){
          array2[4]=multiplicar(4,2);
        $$(id).text(array2[4]);
        sumatotal(array2);
        console.log(array2);
        }
        
      }
      
    },
    {
      text: '3',
      bold: true,
      onClick: function(){
        if (id=='#btn4j1') {
        array1[4]=multiplicar(4,3);
        $$(id).text(array1[4]);
        sumatotal(array1);
        console.log(array1);
      }else if (id=='#btn4j2'){
          array2[4]=multiplicar(4,3);
        $$(id).text(array2[4]);
        sumatotal(array2);
        console.log(array2);
        }
        
      }
      
    },
    {
      text: '4',
      bold: true,
      onClick: function(){
       if (id=='#btn4j1') {
        array1[4]=multiplicar(4,4);
        $$(id).text(multiplicar(4,4));
        sumatotal(array1);
        console.log(array1);
      }else if (id=='#btn4j2'){
          array2[4]=multiplicar(4,4);
        $$(id).text(array2[4]);
        sumatotal(array2);
        console.log(array2);
        }
        
      }
      
    },
    {
      text: '5',
      bold: true,
      onClick: function(){
      if (id=='#btn4j1') {
        array1[4]=multiplicar(4,5);
        $$(id).text(array1[4]);
        sumatotal(array1);
        console.log(array1);
      }else if (id=='#btn4j2'){
          array2[4]=multiplicar(4,5);
        $$(id).text(array2[4]);
        sumatotal(array2);
        console.log(array2);
        }
        
      }
      
    },
    {
      text: 'tachar',
      bold: true,
      onClick: function(){
        if (id=='#btn4j1') {
        array1[4]=0;
        $$(id).text('x');
        sumatotal(array1);
        console.log(array);
      }else if (id=='#btn4j2'){
          array2[4]=0;
        $$(id).text('x');
        sumatotal(array2);
        console.log(array2);
        }
      }
      
    },
    {
      text: 'Cancelar',
      color: 'red'
    },
    ]
});
var cinco = app.actions.create({
  buttons: [
    {
      text: '1',
      bold: true,
      onClick: function(){
      if (id=='#btn5j1') {
        array1[5]=multiplicar(5,1);
        $$(id).text(array1[5]);
        sumatotal(array1);
        console.log(array1);
      }else if (id=='#btn5j2'){
          array2[5]=multiplicar(5,1);
        $$(id).text(array2[5]);
        sumatotal(array2);
        console.log(array2);
        }
      }
      
    },
    {
      text: '2',
      bold: true,
      onClick: function(){
       if (id=='#btn5j1') {
        array1[5]=multiplicar(5,2);
        $$(id).text(array1[5]);
        sumatotal(array1);
        console.log(array1);
      }else if (id=='#btn5j2'){
          array2[5]=multiplicar(5,2);
        $$(id).text(array2[5]);
        sumatotal(array2);
        console.log(array2);
        }
        
      }
      
    },
    {
      text: '3',
      bold: true,
      onClick: function(){
        if (id=='#btn5j1') {
        array1[5]=multiplicar(5,3);
        $$(id).text(array1[5]);
        sumatotal(array1);
        console.log(array1);
      }else if (id=='#btn5j2'){
          array2[5]=multiplicar(5,3);
        $$(id).text(array2[5]);
        sumatotal(array2);
        console.log(array2);
        }
          
      }
      
    },
    {
      text: '4',
      bold: true,
      onClick: function(){
        if (id=='#btn5j1') {
        array1[5]=multiplicar(5,4);
        $$(id).text(array1[5]);
        sumatotal(array1);
        console.log(array1);
      }else if (id=='#btn5j2'){
          array2[5]=multiplicar(5,4);
        $$(id).text(array2[5]);
        sumatotal(array2);
        console.log(array2);
        }
        
      }
      
    },
    {
      text: '5',
      bold: true,
      onClick: function(){
       if (id=='#btn5j1') {
        array1[5]=multiplicar(5,5);
        $$(id).text(array1[5]);
        sumatotal(array1);
        console.log(array1);
      }else if (id=='#btn5j2'){
          array2[5]=multiplicar(5,5);
        $$(id).text(array2[5]);
        sumatotal(array2);
        console.log(array2);
        }
        
      }
      
    },
    {
      text: 'tachar',
      bold: true,
      onClick: function(){
        if (id=='#btn5j1') {
        array1[5]=0;
        $$(id).text(array1[5]);
        sumatotal(array1);
        console.log(array1);
      }else if (id=='#btn5j2'){
          array2[5]=0;
        $$(id).text('x');
        sumatotal(array2);
        console.log(array2);
        }
      }
      
    },
    {
      text: 'Cancelar',
      color: 'red'
    },
    ]
});
var seis = app.actions.create({
  buttons: [
    {
      text: '1',
      bold: true,
      onClick: function(){
        if (id=='#btn6j1') {
        array1[6]=multiplicar(6,1);
        $$(id).text(array1[6]);
        sumatotal(array1);
        console.log(array1);
      }else if (id=='#btn6j2'){
          array2[6]=multiplicar(6,1);
        $$(id).text(array2[6]);
        sumatotal(array2);
        console.log(array2);
        }
      }
      
    },
    {
      text: '2',
      bold: true,
      onClick: function(){
        if (id=='#btn6j1') {
        array1[6]=multiplicar(6,2);
        $$(id).text(array1[6]);
        sumatotal(array1);
        console.log(array1);
      }else if (id=='#btn6j2'){
          array2[6]=multiplicar(6,2);
        $$(id).text(array2[6]);
        sumatotal(array2);
        console.log(array2);
        }
      }
      
    },
    {
      text: '3',
      bold: true,
      onClick: function(){
      if (id=='#btn6j1') {
        array1[6]=multiplicar(6,3);
        $$(id).text(array1[6]);
        sumatotal(array1);
        console.log(array1);
      }else if (id=='#btn6j2'){
          array2[6]=multiplicar(6,3);
        $$(id).text(array2[6]);
        sumatotal(array2);
        console.log(array2);
        }
        
      }
      
    },
    {
      text: '4',
      bold: true,
      onClick: function(){
       if (id=='#btn6j1') {
        array1[6]=multiplicar(6,4);
        $$(id).text(array1[6]);
        sumatotal(array1);
        console.log(array1);
      }else if (id=='#btn6j2'){
          array2[6]=multiplicar(6,4);
        $$(id).text(array2[6]);
        sumatotal(array2);
        console.log(array2);
        }
        
      }
      
    },
    {
      text: '5',
      bold: true,
      onClick: function(){
      if (id=='#btn6j1') {
        array1[6]=multiplicar(6,5);
        $$(id).text(array1[6]);
        sumatotal(array1);
        console.log(array1);
      }else if (id=='#btn6j2'){
          array2[6]=multiplicar(6,5);
        $$(id).text(array2[6]);
        sumatotal(array2);
        console.log(array2);
        }
          
      }
      
    },
    {
      text: 'tachar',
      bold: true,
      onClick: function(){
        if (id=='#btn6j1') {
        array1[6]=0;
        $$(id).text('x');
        sumatotal(array1);
        console.log(array1);
      }else if (id=='#btn6j2'){
          array2[6]=0;
        $$(id).text('x');
        sumatotal(array2);
        console.log(array2);
        }
      }
      
    },
    {
      text: 'Cancelar',
      color: 'red'
    },
    ]
});
var escalera = app.actions.create({
  buttons:[
    {
      text: 'Servido',
    bold: true,
      onClick: function(){
        if (id=='#btn7j1') {
        array1[7]=25;
        $$(id).text(array1[7]);
        sumatotal(array1);
        console.log(array1);
      }else if (id=='#btn7j2'){
          array2[7]=25;
        $$(id).text(array2[7]);
        sumatotal(array2);
        console.log(array2);
        }
      }
    },
    {
      text: 'No Servido',
     bold: true,
      onClick: function(){
         if (id=='#btn7j1') {
        array1[7]=20;
        $$(id).text(array1[7]);
        sumatotal(array1);
        console.log(array1);
      }else if (id=='#btn7j2'){
          array2[7]=20;
        $$(id).text(array2[7]);
        sumatotal(array2);
        console.log(array2);
        }
      }
    },
    {
      text: 'tachar',
      onClick: function(){
         if (id=='#btn7j1') {
        array1[7]=0;
        $$(id).text('x');
        sumatotal(array1);
        console.log(array1);
      }else if (id=='#btn7j2'){
          array2[7]=0;
        $$(id).text('x');
        sumatotal(array2);
        console.log(array2);
        }
      }
      
    },
    {
      text: 'Cancel',
      color: 'red'
    },
  ]
});
var full = app.actions.create({
  buttons:[
    {
      text: 'Servido',
      bold: true,
      onClick: function(){
        if (id=='#btn8j1') {
        array1[8]=35;
        $$(id).text(array1[8]);
        sumatotal(array1);
        console.log(array1);
      }else if (id=='#btn8j2'){
          array2[8]=35;
        $$(id).text(array2[8]);
        sumatotal(array2);
        console.log(array2);
        }
      }
     
    },
    {
      text: 'No Servido',
      bold: true,
      onClick: function(){
       if (id=='#btn8j1') {
        array1[8]=30;
        $$(id).text(array1[8]);
        sumatotal(array1);
        console.log(array1);
      }else if (id=='#btn8j2'){
          array2[8]=30;
        $$(id).text(array2[8]);
        sumatotal(array2);
        console.log(array2);
        }
      }
     
    },
    {
      text: 'tachar',
      onClick: function(){
       if (id=='#btn8j1') {
        array1[8]=0;
        $$(id).text('x');
        sumatotal(array1);
        console.log(array1);
      }else if (id=='#btn8j2'){
          array2[8]=0;
        $$(id).text('x');
        sumatotal(array2);
        console.log(array2);
        }
      }
      
    },
    {
      text: 'Cancel',
      color: 'red'
    },
  ]
});
var poker = app.actions.create({
  buttons:[
    {
      text: 'Servido',
      bold: true,
      onClick: function(){
        if (id=='#btn9j1') {
        array1[9]=45;
        $$(id).text(array1[9]);
        sumatotal(array1);
        console.log(array1);
      }else if (id=='#btn9j2'){
          array2[9]=45;
        $$(id).text(array2[9]);
        sumatotal(array2);
        console.log(array2);
        }
      }
     
    },
    {
      text: 'No Servido',
      bold: true,
      onClick: function(){
        if (id=='#btn9j1') {
        array1[9]=40;
        $$(id).text(array1[9]);
        sumatotal(array1);
        console.log(array1);
      }else if (id=='#btn9j2'){
          array2[9]=40;
        $$(id).text(array2[9]);
        sumatotal(array2);
        console.log(array2);
        }
      }
     
    },
    {
      text: 'tachar',
      onClick: function(){
         if (id=='#btn9j1') {
        array1[9]=0;
        $$(id).text('x');
        sumatotal(array1);
        console.log(array1);
      }else if (id=='#btn9j2'){
          array2[9]=0;
        $$(id).text('x');
        sumatotal(array2);
        console.log(array2);
        }
      }
      
    },
    {
      text: 'Cancel',
      color: 'red'
    },
  ]
});
var generala = app.actions.create({
  buttons:[
    {
      text: 'Servido',
      bold: true,
      onClick: function(){
       if (id=='#btn10j1') {
        array1[10]=55;
        $$(id).text(array1[10]);
        sumatotal(array1);
        console.log(array1);
      }else if (id=='#btn10j2'){
          array2[10]=55;
        $$(id).text(array2[10]);
        sumatotal(array2);
        console.log(array2);
        }
      }
     
    },
    {
      text: 'No Servido',
      bold: true,
      onClick: function(){
        if (id=='#btn10j1') {
        array1[10]=50;
        $$(id).text(array1[10]);
        sumatotal(array1);
        console.log(array1);
      }else if (id=='#btn10j2'){
          array2[10]=50;
        $$(id).text(array2[10]);
        sumatotal(array2);
        console.log(array2);
        }
     
    }
  },
    {
      text: 'tachar',
      onClick: function(){
        if (id=='#btn10j1') {
        array1[10]=0;
        $$(id).text('x');
        sumatotal(array1);
        console.log(array1);
      }else if (id=='#btn10j2'){
          array2[10]=0;
        $$(id).text('x');
        sumatotal(array2);
        console.log(array2);
        }
      }
      
    },
    {
      text: 'Cancel',
      color: 'red'
    },
  ]
});
var dgenerala = app.actions.create({
  buttons:[
    {
      text: 'Servido',
      bold: true,
      onClick: function(){
     if (id=='#btn11j1') {
        array1[11]=65;
        $$(id).text(array1[11]);
        sumatotal(array1);
        console.log(array1);
      }else if (id=='#btn11j2'){
          array2[11]=65;
        $$(id).text(array2[11]);
        sumatotal(array2);
        console.log(array2);
        }
      }
     
    },
    {
      text: 'No Servido',
      bold: true,
      onClick: function(){
       if (id=='#btn11j1') {
        array1[11]=60;
        $$(id).text(array1[11]);
        sumatotal(array1);
        console.log(array1);
      }else if (id=='#btn11j2'){
          array2[11]=60;
        $$(id).text(array2[11]);
        sumatotal(array2);
        console.log(array2);
        }
      }
     
    },
    {
      text: 'tachar',
      onClick: function(){
       if (id=='#btn11j1') {
        array1[11]=0;
        $$(id).text('x');
        sumatotal(array1);
        console.log(array1);
      }else if (id=='#btn11j2'){
          array2[11]=0;
        $$(id).text('x');
        sumatotal(array1);
        console.log(array2);
        }
      }
      
    },
    {
      text: 'Cancel',
      color: 'red'
    },
  ]
});
    $$('#btn1j1').on('click', function () {
    id="#btn1j1";
    idtotal="#btn12j1";
    uno.open();
  
    
   

});
    $$('#btn1j2').on('click', function () {
    id="#btn1j2";
    idtotal="#btn12j2";
    uno.open();
});
$$('#btn2j1').on('click', function () {
    id="#btn2j1";
     idtotal="#btn12j1";
    dos.open();
  
});
$$('#btn2j2').on('click', function () {
    id="#btn2j2";
     idtotal="#btn12j2";
    dos.open();
});
$$('#btn3j1').on('click', function () {
    id="#btn3j1";
      idtotal="#btn12j1";
    tres.open();
});
$$('#btn3j2').on('click', function () {
    id="#btn3j2";
     idtotal="#btn12j2";
    tres.open();
});
$$('#btn4j1').on('click', function () {
    id="#btn4j1";
      idtotal="#btn12j1";
    cuatro.open();
});
$$('#btn4j2').on('click', function () {
    id="#btn4j2";
     idtotal="#btn12j2";
    cuatro.open();
});
$$('#btn5j1').on('click', function () {
    id="#btn5j1";
      idtotal="#btn12j1";
    cinco.open();
});
$$('#btn5j2').on('click', function () {
    id="#btn5j2";
     idtotal="#btn12j2";
    cinco.open();
});
$$('#btn6j1').on('click', function () {
    id="#btn6j1";
      idtotal="#btn12j1";
    seis.open();
});
$$('#btn6j2').on('click', function () {
    id="#btn6j2";
     idtotal="#btn12j2";
    seis.open();
});
$$('#btn7j1').on('click', function () {
    id="#btn7j1";
      idtotal="#btn12j1";
    escalera.open();
});
$$('#btn7j2').on('click', function () {
    id="#btn7j2";
     idtotal="#btn12j2";
    escalera.open();
});
$$('#btn8j1').on('click', function () {
    id="#btn8j1";
      idtotal="#btn12j1";
    full.open();
});
$$('#btn8j2').on('click', function () {
    id="#btn8j2";
     idtotal="#btn12j2";
    full.open();
});
$$('#btn9j1').on('click', function () {
    id="#btn9j1";
      idtotal="#btn12j1";
    poker.open();
});
$$('#btn9j2').on('click', function () {
    id="#btn9j2";
     idtotal="#btn12j2";
    poker.open();
});
$$('#btn10j1').on('click', function () {
    id="#btn10j1";
      idtotal="#btn12j1";
    generala.open();
});
$$('#btn10j2').on('click', function () {
    id="#btn10j2";
     idtotal="#btn12j2";
    generala.open();
});
$$('#btn11j1').on('click', function () {
    id="#btn11j1";
      idtotal="#btn12j1";
    dgenerala.open();
});
$$('#btn11j2').on('click', function () {
    id="#btn11j2";
      idtotal="#btn12j2";
    dgenerala.open();
    
});
$$('#terminar').on('click',function(){
    var cont1=0;
    var cont2=0;
    for (var i = 0; i < array1.length; i++) {
      console.log(i);
      cont1++;
    };
    for (var i = 0; i < array2.length; i++) {
      cont2++;
    };
    if (cont1==12 && cont2==12) {
      var a= $$('#btn12j1').text();
      var b= $$('#btn12j2').text();
      app.dialog.alert('el juego termino los puntajes son.'+ "<br>" +' juagor 1: '+a+"<br>"+'juagor 2: '+b);
    }else if (cont1<12 && cont2<12){
       app.dialog.alert('por favor complete todo los campos')
    }

});
$$('#limpiar').on('click', function(){
    for (var i = 1; i <=12; i++) {
      $$('#btn'+i+'j1').text('-');
      $$('#btn'+i+'j2').text('-');
    };
    for (var i = 0; i < array1.length; i++) {
      array1[i]=0;
    }
    for (var i = 0; i < array2.length; i++) {
      array2[i]=0;
    }

    console.log(array1);
    console.log(array2);

});
$$('#volver').on('click', function(){
    for (var i = 1; i <=12; i++) {
      $$('#btn'+i+'j1').text('-');
      $$('#btn'+i+'j2').text('-');
    };
    for (var i = 0; i < array1.length; i++) {
      array1[i]=0;
    }
    for (var i = 0; i < array2.length; i++) {
      array2[i]=0;
    }
    j1="";
    j2="";
    $$('#j1').val()='';
    $$('#j2').val()='';
    $$('#jj1').text(j1);
    $$('#jj2').text(j2);

});


});

})