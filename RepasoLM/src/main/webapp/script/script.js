class persona{
	constructor (dni,nombre,apellidos,edad){
		this.dni=dni;
		this.nombre=nombre;
		this.apellidos=apellidos;
		this.edad=edad;
	}
}

function enviarDatos(form){	
	var dni=form.dni.value;
	var nombre= form.nombre.value;
	var apellidos=form.apellidos.value;
	var edad=form.edad.value;
	var p1=new persona(dni,nombre,apellidos,edad);
	localStorage.setItem("p-"+dni,JSON.stringify(p1));
}
function buscar(form){
	var dni=form.dniB.value;
	var valor=localStorage.getItem("p-"+dni);
	var p2= JSON.parse(valor);
	
	if(p2.nombre==p2.apellidos)
		alert("No se encontro a la persona")
	else
		document.writeln("Nombre: "+p2.nombre+" Apellidos: "+p2.apellidos+" Edad: "+p2.edad);
}
function enviarP(){
	location.href ='http://localhost:8080/RepasoLM/presenta.html';
}