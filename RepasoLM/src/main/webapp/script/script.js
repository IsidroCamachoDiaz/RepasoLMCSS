function enviarDatos(form){
	var dni=form.dni.value;
	var nombre= form.nombre.value;
	var apellidos=form.apellidos.value;
	var edad=form.edad.value;
	localStorage.setItem("dni-"+dni,dni);
	localStorage.setItem("nombre-"+dni,nombre);
	localStorage.setItem("apellidos-"+dni,apellidos);
	localStorage.setItem("edad-"+dni,edad);
}
function buscar(form){
	var dni=form.dniB.value;
	var nombre= localStorage.getItem("nombre-"+dni);
	var apellidos=localStorage.getItem("apellidos-"+dni);
	var edad=localStorage.getItem("edad-"+dni);
	if(nombre==apellidos)
		alert("No se encontro a la persona")
	else
		document.writeln("Nombre: "+nombre+" Apellidos: "+apellidos+" Edad: "+edad);
}
function enviarP(){
	location.href ='http://localhost:8080/RepasoLM/presenta.html';
}