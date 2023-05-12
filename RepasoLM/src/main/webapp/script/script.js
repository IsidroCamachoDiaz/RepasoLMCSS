function enviarDatos(form){
	var nombre= form.nombre.value;
	var apellidos=form.apellidos.value;
	var edad=form.edad.value;
	localStorage.setItem("nombre-"+nombre,nombre);
	localStorage.setItem("apellidos-"+nombre,apellidos);
	localStorage.setItem("edad-"+nombre,edad);
	location.href ='http://localhost:8080/RepasoLM/presenta.html';
	document.writeln("Nombre: "+nombre+" Apellidos: "+apellidos+" Edad: "+edad);
}