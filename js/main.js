$(document).ready(function () {


    //Slider 
    if(window.location.href.indexOf('index') > -1){
        $('.galeria').bxSlider({
          mode: 'fade',
          captions: false,
          slideWidth: 1200,
          responsive: true,
          pager: true
        });
  

    
      var posts = [
          {
              title : "Articulo: 1",
              date : "Publicado el dia " + moment().date()+ " de "+moment().format("MMMM" )+" del "+moment().format("YYYY" ),
              content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, quas. Iusto aliquid fuga autem, vel itaque perferendis fugiat officia harum commodi dolorem veniam adipisci, provident illum corporis voluptates id nobis. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus totam ratione magnam suscipit aliquam! Neque suscipit accusantium et ratione sed amet quo totam vero. Minima dolores aperiam ipsa commodi quia!"
          },
          {
            title : "Articulo: 2",
            date : "Publicado el dia " + moment().date()+ " de "+moment().format("MMMM" )+" del "+moment().format("YYYY" ),
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, quas. Iusto aliquid fuga autem, vel itaque perferendis fugiat officia harum commodi dolorem veniam adipisci, provident illum corporis voluptates id nobis. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus totam ratione magnam suscipit aliquam! Neque suscipit accusantium et ratione sed amet quo totam vero. Minima dolores aperiam ipsa commodi quia!"
        },
        {
            title : "Articulo: 3",
            date : "Publicado el dia " + moment().date()+ " de "+moment().format("MMMM" )+" del "+moment().format("YYYY" ),
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, quas. Iusto aliquid fuga autem, vel itaque perferendis fugiat officia harum commodi dolorem veniam adipisci, provident illum corporis voluptates id nobis. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus totam ratione magnam suscipit aliquam! Neque suscipit accusantium et ratione sed amet quo totam vero. Minima dolores aperiam ipsa commodi quia!"
        },
        {
            title : "Articulo: 4",
            date : "Publicado el dia " + moment().date()+ " de "+moment().format("MMMM" )+" del "+moment().format("YYYY" ),
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, quas. Iusto aliquid fuga autem, vel itaque perferendis fugiat officia harum commodi dolorem veniam adipisci, provident illum corporis voluptates id nobis. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus totam ratione magnam suscipit aliquam! Neque suscipit accusantium et ratione sed amet quo totam vero. Minima dolores aperiam ipsa commodi quia!"
        },
        {
            title : "Articulo: 5",
            date : "Publicado el dia " + moment().date()+ " de "+moment().format("MMMM" )+" del "+moment().format("YYYY" ),
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, quas. Iusto aliquid fuga autem, vel itaque perferendis fugiat officia harum commodi dolorem veniam adipisci, provident illum corporis voluptates id nobis. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus totam ratione magnam suscipit aliquam! Neque suscipit accusantium et ratione sed amet quo totam vero. Minima dolores aperiam ipsa commodi quia!"
        },
          
      ];

    posts.forEach((item,index) => {
        var post = `    
     <article class="post">
<h2>${item.title}</h2>
    <span class="date">${item.date}</span>
<p>${item.content} </p>
<a href="#" class="button-more">Leer más</a>
</article>
`;
        $("#post").append(post);
    });


}

    //Selector de tema
    var theme = $("#theme");
    $("#to-green").click(function () {
        theme.attr("href","css/green.css");
    })
    $("#to-red").click(function () {
        theme.attr("href","css/red.css");
    })
    $("#to-blue").click(function () {
        theme.attr("href","css/blue.css");
    })



//scroll ariiba

$(".subir").click(function (e) {
    e.preventDefault();
    $("html, body").animate({
        scrollTop: 0
    }, 1200);
    return false;
});

$("#login form").submit(function () {
   var form_name = $("#form_name").val();
localStorage.setItem("form_name", form_name);


    
});

var form_name = localStorage.getItem("form_name");

if(form_name != null && form_name != "undefined"){
    var about_parrafo =$("#about p");
    about_parrafo.html("<br><strong>Bienvenido "+ form_name+"</strong>");
    about_parrafo.append("<br><br><a href='#' id = 'logout'> Cerrar sesión</a>");
    $("#login form").hide();

    $("#logout").click(function () {
        localStorage.clear();
        location.reload();
        });
    }


    if(window.location.href.indexOf("about") > -1){
		$("#acordeon").accordion();
	}

    if(window.location.href.indexOf("reloj") > -1){
        setInterval(function () {
            var reloj = moment().format("hh:mm:ss");
            $("#reloj").html(reloj);
        },1000);


        
    }

    //Validacion de formularios
    if(window.location.href.indexOf("contact") > -1){
        
        $( "#datepicker" ).datepicker();
        $.validate({
            lang: 'es',
            errorMessagePosition: "top",
            scrollToTopOnError:true
          });
    }


});


