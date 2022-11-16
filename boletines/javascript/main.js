

// DOM
/*
let links = document.querySelectorAll("a");

links.forEach(function(link){
	console.log(link);
});
*/

/*
let celdas = document.querySelectorAll("td");

celdas.forEach(function(td){
	td.addEventListener('click', function(){
		console.log(this);
	});
});
*/

//Obtener los elementos de la clase .close
let links = document.querySelectorAll(".close");

//Recorrerlos
links.forEach(function(link){
	//Añadir un evento click a cada uno de ellos
	link.addEventListener('click', function(ev){
		ev.preventDefault();

		//Quitarles las clases de animación que ya tiene.
		let content  = document.querySelector(".content");

		//Añadirle clases para animar su salida.
		content.classList.remove("animate__fadeInDownBig");
		content.classList.remove("animate__animated");

		content.classList.add("animate__fadeOutUpBig");
		content.classList.add("animate__animated");

		setTimeout(function(){
			location.href = "/boletines";
		}, 600);
		
	});
});


/*
let iconos = document.querySelectorAll("i");
iconos.forEach(function(icono){
	icono.classList.remove("fa-star");
	icono.classList.add("fa-star");
});
*/