document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("Formulario para participar CON CSS y js.html").addEventListener('submit', validarFormulario); 
});

function validarFormulario(evento) {
  evento.preventDefault();
  var Nombre = document.getElementById('name').value;
  if(usuario.length == 0) {
    alert('No has escrito tus nombres');
    return;
  }
  var 'Primer Apellido' = document.getElementById('surname').value;
  if (clave.length < 6) {
    alert('No has escrito tu primer apellido');
    return;
  }
  var 'Segundo Apellido' = document.getElementById('second_surname').value;
  if (clave.length < 6) {
    alert('No has escrito tu segundo apellido');
    return;
  }
  var Edad = document.getElementById('age').value;
    if (clave.length < 6) {
      alert('No has escrito tu edad');
      return;
    }

  this.submit();
}