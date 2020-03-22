  
// If we need to use custom DOM library, let's save it to $$ variable:
var $$ = Dom7;

var app = new Framework7({
      actions: {
    convertToPopover: false,
    grid: true,
  },
    // App root element
    root: '#app',
    // App Name
    name: 'My App',
    // App id
    id: 'com.myapp.test',
    // Enable swipe panel
    panel: {
      swipe: 'left',
    },
    // Add default routes
    routes: [
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
    ]
    // ... other parameters
  });




var mainView = app.views.create('.view-main');
var uno = app.actions.create({
  buttons: [
    {
      text: 'uno',
      bold: true,
      onClick: function(){
        app.dialog.alert('holaaaa111');
       
      }
      
    },
    {
      text: 'dos',
      bold: true,
      onClick: function(){
        app.dialog.alert('holaaaa111');
        
      }

    },
    ]
  });

    /*{
      text: '3'
    },
    {
      text: '4'
    },
    {
      text: '5'
    },
    {
      text: 'tachar'
    },
    {
      text: 'Cancel',
      color: 'red'
    },
  ]

var dos = app.actions.create({
  buttons: [
    {
      text: '1'
      
    },
    {
      text: '2'
    },
    {
      text: '3'
    },
    {
      text: '4'
    },
    {
      text: '5'
    },
    {
      text: 'tachar'
    },
    {
      text: 'Cancel',
      color: 'red'
    },
  ]
});
var tres = app.actions.create({
  buttons: [
    {
      text: '1'
      
    },
    {
      text: '2'
    },
    {
      text: '3'
    },
    {
      text: '4'
    },
    {
      text: '5'
    },
    {
      text: 'tachar'
    },
    {
      text: 'Cancel',
      color: 'red'
    },
  ]
});
var cuatro = app.actions.create({
  buttons: [
    {
      text: '1'
      
    },
    {
      text: '2'
    },
    {
      text: '3'
    },
    {
      text: '4'
    },
    {
      text: '5'
    },
    {
      text: 'tachar'
    },
    {
      text: 'Cancel',
      color: 'red'
    },
  ]
});
var cinco = app.actions.create({
  buttons: [
    {
      text: '1'
      
    },
    {
      text: '2'
    },
    {
      text: '3'
    },
    {
      text: '4'
    },
    {
      text: '5'
    },
    {
      text: 'tachar'
    },
    {
      text: 'Cancel',
      color: 'red'
    },
  ]
});
var seis = app.actions.create({
  buttons: [
    {
      text: '1'
      
    },
    {
      text: '2'
    },
    {
      text: '3'
    },
    {
      text: '4'
    },
    {
      text: '5'
    },
    {
      text: 'tachar'
    },
    {
      text: 'Cancel',
      color: 'red'
    },
  ]
});
var escalera = app.actions.create({
  buttons:[
    {
      text: 'Servido'
     
    },
    {
      text: 'No Servido'
     
    },
    {
      text: 'tachar'
      
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
      text: 'Servido'
     
    },
    {
      text: 'No Servido'
     
    },
    {
      text: 'tachar'
      
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
      text: 'Servido'
     
    },
    {
      text: 'No Servido'
     
    },
    {
      text: 'tachar'
      
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
      text: 'Servido'
     
    },
    {
      text: 'No Servido'
     
    },
    {
      text: 'tachar'
      
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
      text: 'Servido'
     
    },
    {
      text: 'No Servido'
     
    },
    {
      text: 'tachar'
      
    },
    {
      text: 'Cancel',
      color: 'red'
    },
  ]
});*/

var j1="",j2="";
var totalf=0;
// Handle Cordova Device Ready Event
$$(document).on('deviceready', function() {
    console.log("Device is ready!");

   // $$('#ayudar').on('click',function(){
      //  $$('#ayudar').attr('href','/ayuda/');

   // }

    

    $$('#iniciar').on('click', function(){
            if ($$('#j1').val()=="" || $$('#j2').val()=="") {
                alert('complete todos los campos');
                }else  {
            
               $$('#iniciar').attr('href','/anotador/');
            j1=$$('#j1').val();
            j2=$$('#j2').val();
               
        

            }

            
    });


});

// Option 1. Using one 'page:init' handler for all pages
$$(document).on('page:init', function (e) {
    // Do something here when page loaded and initialized
    console.log(e);
})

// Option 2. Using live 'page:init' event handlers for each page
$$(document).on('page:init', '.page[data-name="anotador"]', function (e) {
    // Do something here when page with data-name="about" attribute loaded and initialized
    
console.log(e);
    alert('El juego comienza')
    $$('#jj1').text(j1);
    $$('#jj2').text(j2);
    

    $$('#btn2j1').on('click', function () {
    uno.open();
});





   /* $$('#j1-2').on('click', function(){
        multiplicar(1,2);
    });
    function multiplicar(n,a){
        totalf=$$('#j'+n+'-'+a).val();
        console.log(totalf);
        totalf=totalf*a;
        $$('#j'+n+'-'+a).val(totalf);
        console.log(totalf);
        //for (var i = 1; i <= 6 ; i++) {
          //  $$('')
        //}

    };*/
})