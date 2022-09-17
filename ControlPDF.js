function loadImage(url) {
  return new Promise(resolve => {
      const xhr = new XMLHttpRequest();
      xhr.open('GET', url, true);
      xhr.responseType = "blob";
      xhr.onload = function (e) {
          const reader = new FileReader();
          reader.onload = function(event) {
              const res = event.target.result;
              resolve(res);
          }
          const file = this.response;
          reader.readAsDataURL(file);
      }
      xhr.send();
  });
}


window.addEventListener('load', async () => {




  const form = document.querySelector('#formulario');
  form.addEventListener('submit', (e) => {
      e.preventDefault();

      let adquisicion = document.querySelector('input[name="adquisicion"]').value;
      let Dealer = document.getElementById('Dealer').value;
      let nombre = document.getElementById('nombre').value;
      let apodo = document.getElementById('apodo').value;
      let cedula = document.getElementById('cedula').value;
      let nacionalidad = document.getElementById('nacionalidad').value;
      let eCivil = document.getElementById('eCivil').value;
      let edad = document.getElementById('edad').value;
      let gEducacion = document.getElementById('gEducacion').value;
      let ocupacion = document.getElementById('ocupacion').value;
      let dependientes = document.getElementById('dependientes').value;
      let vivienda = document.querySelector('input[name="vivienda"]').value;
      let añoVivienda = document.getElementById('añoVivienda').value;
      let email = document.getElementById('ocupacion').value;
      let direccion = document.getElementById('direccion_secundaria').value;
      let telefono = document.getElementById('tel').value;
      let hijos = document.querySelector('input[name="vivienda"]').value;
      let numeroHijos = document.getElementById('gEducacion').value;
      let discapacidad = document.querySelector('input[name="adquisicion"]').value;

      generatePDF(adquisicion,nombre,apodo,cedula,nacionalidad,añoVivienda,eCivil,edad,ocupacion,gEducacion,dependientes,vivienda,Dealer, email, direccion, telefono, hijos, numeroHijos, discapacidad,);
  })

});

async function generatePDF(adquisicion,nombre,apodo,cedula,añoVivienda,nacionalidad,eCivil,edad,ocupacion,gEducacion,dependientes,vivienda, Dealer, email, direccion, telefono, hijos, numeroHijos, discapacidad, discapacidadDesc) {
  const image = await loadImage("page01.jpg");

  const pdf = new jsPDF('p', 'pt', 'letter');

  pdf.addImage(image, 'PNG', 0, 0, 565, 792);

  pdf.setFontSize(12);
  pdf.text(adquisicion, 200, 150);

  const date = new Date();
  pdf.text(date.getUTCDate().toString(), 235, 150);
  pdf.text((date.getUTCMonth() + 1).toString(), 275, 150);
  pdf.text(date.getUTCFullYear().toString(), 320, 150);

  pdf.setFontSize(10);
  pdf.text(Dealer, 170, 213);
  //datos solicitante
  pdf.text(nombre, 120, 220);
  pdf.text(apodo, 460, 220);
  pdf.text(cedula, 100, 247);
  pdf.text(nacionalidad, 290, 247);
  pdf.text(eCivil, 480, 247);
  pdf.text(edad, 60, 275);
  pdf.text(ocupacion, 145, 275);
  pdf.text(gEducacion, 325, 275);
  pdf.text(dependientes, 524, 275);
  pdf.text(añoVivienda, 120, 220);
  pdf.text(direccion, 170, 400);
  pdf.text(telefono, 170, 456);
  pdf.text(email, 170, 475);

  pdf.setFillColor(0,0,0);

  if (parseInt(vivienda) === 0) {
      pdf.circle(325, 275, 'FD');
  } else {
      pdf.circle(190, 374, 4, 'FD');
      pdf.text(numeroHijos.toString(), 355, 378);
  }

  if (parseInt(discapacidad) === 0) {
      pdf.circle(285, 718, 4, 'FD');
  } else {
      pdf.circle(240, 718, 4, 'FD');
  }



  pdf.save("example.pdf");

}
