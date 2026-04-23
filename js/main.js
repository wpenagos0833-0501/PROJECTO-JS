$(document).ready(function(){

   if(window.location.href.indexOf('index')> -1){
    //slider
    $('.galeria').bxSlider({
      mode: 'fade',
      captions: true,
      slideWidth: 1400,
      responsive: true,

    });
    }

    //posts stilos jons
     if(window.location.href.indexOf('index')> -1){
var posts = [
                {
                    title: 'prueba de titulo 1',
                    date: moment().format("MMMM Do YYYY"),
                    content: `
                                                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu nulla malesuada,
                                                  porttitor nisl at, gravida tellus. Integer tincidunt diam sit amet velit malesuada venenatis.
                                                  Donec non erat ut lectus pretium viverra condimentum in ante. Nullam vel varius elit, id iaculis
                                                `
                },
                {
                    title: 'prueba de titulo 2',
                    date: moment().format("MMMM D YYYY"),
                    content: `
                                                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu nulla malesuada,
                                                  porttitor nisl at, gravida tellus. Integer tincidunt diam sit amet velit malesuada venenatis.
                                                  Donec non erat ut lectus pretium viverra condimentum in ante. Nullam vel varius elit, id iaculis
                                                  nisi..`
                },
                {
                    title: 'prueba de titulo 3',
                    date: moment().format("dddd D [de] MMMM"),
                    content:
                                                  ` Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu nulla malesuada,
                                                  porttitor nisl at, gravida tellus. Integer tincidunt diam sit amet velit malesuada venenatis.
                                                  Donec non erat ut lectus pretium viverra condimentum in ante. Nullam vel varius elit, id iaculis
                                                  nisi. Nulla ac luctus purus, quis placerat nunc. In vel arcu a ante feugiat iaculis ac id
                                                  libero. .`
                },
                {
                    title: 'prueba de titulo 4',
                    date: moment().format("L"),
                    content: `
                                                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu nulla malesuada,
                                                  porttitor nisl at, gravida tellus. Integer tincidunt diam sit amet velit malesuada venenatis.
                                                  Donec non erat ut lectus pretium viverra condimentum in ante. Nullam vel varius elit, id iaculis
                                                  nisi. Nulla ac luctus purus, quis placerat nunc. In vel arcu a ante feugiat iaculis ac id
                                                  libero. Morbi dui nisl, blandit eget quam vitae, aliquam rhoncus purus. Ut at sollicitudin
                                                  libero, ac placerat metus. Praesent lacinia mattis vulputate. Curabitur sapien risus, blandit
                                                  aliquet nibh sed, hendrerit imperdiet enim. Suspendisse risus ex, suscipit sed dui at,
                                                  condimentum sodales orci. Maecenas eu tristique sapien. Quisque at cursus ligula. Etiam rhoncus
                                                  ac nulla vel mollis. Quisque rutrum ante massa, in vestibulum eros mattis ac. Donec at ornare
                                                  nisl, in aliquam velit.`
                }

            ];

posts.forEach((item, index) => {
var post =`
    <article class="post">
         <h2>${item.title}</h2>
          <span class="date">${item.date}</span>
                    <p>
                        ${item.content}
                    </p>
                    <a href="#" class="button-more">leer más</a>

                </article>

    `;

    // Ahora inyectamos ese HTML en el contenedor de tu página
    $("#posts").append(post);

});


}

// --- SELECTOR DE TEMA (Cambio de colores) ---

// Primero guardamos el elemento que tiene el ID "theme" en una variable
// Solo necesitas declararla UNA VEZ al principio.
var theme = $("#theme");

// Al hacer clic en el botón azul
$("#to-green").click(function(){
    theme.attr("href", "css/green.css"); // Cambia el archivo CSS al azul
});

// Al hacer clic en el botón verde
$("#to-red").click(function(){
    theme.attr("href", "css/red.css"); // Cambia el archivo CSS al verde
});

// Al hacer clic en el botón rojo
$("#to-blue").click(function(){
    theme.attr("href", "css/blue.css");   // Cambia el archivo CSS al rojo
});
// --- FUNCIÓN PARA SUBIR SUAVEMENTE ---
$('.subir').click(function(e){
    e.preventDefault(); // Evita que la página salte de golpe al inicio

    $('html, body').animate({
        scrollTop: 0 // Lleva el scroll hasta la posición 0 (arriba del todo)
    }, 500); // El número 500 es la velocidad en milisegundos (medio segundo)

    return false;
});

$("#login form").submit(function(e){
    e.preventDefault(); // Evita que la página se recargue al dar clic en Entrar

    // 2. Agregamos el '#' para buscar el ID "name"
    var name = $("#name").val();

    // Guardamos el nombre en la memoria
    localStorage.setItem("name", name);

    // Recargamos para que aparezca el saludo de una vez
    location.reload();
});

// 3. Recuperamos el nombre de la memoria
var name = localStorage.getItem("name");

// Verificamos si existe alguien identificado
if(name != null && name != "undefined"){
    var about_p = $("#about p");

    // Mostramos el nombre y un enlace para cerrar sesión
    about_p.html("<br><strong>Bienvenido, " + name + "</strong>");
    about_p.append("<br><a href='#' id='logout'>Cerrar sesión</a>");

    // Escondemos el formulario de login
    $("#login").hide();
}

// --- FUNCIÓN PARA CERRAR SESIÓN TOTAL ---
$("#logout").click(function(e){
    e.preventDefault(); // Evitamos que el enlace haga cosas raras

    localStorage.removeItem("name"); // Borra específicamente el nombre
    localStorage.clear();            // Limpia todo lo demás por seguridad

    // Refrescamos la página para que el formulario aparezca vacío
    location.reload();
});

// acordeon
if(window.location.href.indexOf('about')> -1){
    $("#acordeon").accordion();
}

//reloj
if(window.location.href.indexOf('reloj') > -1){

    // 1. Primero definimos qué es la función
    var cargarReloj = function() {
        var hora = moment().format("hh:mm:ss");
        $('#reloj').html(hora);
    };

    // 2. La ejecutamos de inmediato para que no se demore
    cargarReloj();

    // 3. La programamos para que se repita (Sin paréntesis dentro del setInterval)
    setInterval(cargarReloj, 1000);

    }

// Validación
	if(window.location.href.indexOf('contact') > -1){

		$("form input[name='date']").datepicker({
			dateFormat: 'dd-mm-yy'
		});

		$.validate({
		    lang: 'es',
		    errorMessagePosition: 'top',
		    scrollToTopOnError: true
		});

	}




});<!-- Cierre del documento  -->





