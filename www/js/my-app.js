  
// If we need to use custom DOM library, let's save it to $$ variable:
var $$ = Dom7;

var app = new Framework7({
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
    ;
    $$('#j1-2').on('click', function(){
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

    };
})