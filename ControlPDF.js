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

      let nombre = document.getElementById('nombre').value;
      let apodo = document.getElementById('apodo').value;
      let cedula = document.getElementById('cedula').value;
      let nacionalidad = document.getElementById('nacionalidad').value;
      let eCivil = document.getElementById('eCivil').value;
      let edad = document.getElementById('edad').value;
      let gEducacion = document.getElementById('gEducacion').value;
      let ocupacion = document.getElementById('ocupacion').value;
      let dependientes = document.getElementById('dependientes').value;
      let vivienda = document.querySelector('input[name="vivienda"]:checked').value;
      let añoVivienda = document.getElementById('añoVivienda').value;
      let direccion = document.getElementById('direccion').value;
      let sector = document.getElementById('sector').value;
      let tel_recidencia = document.getElementById('tel_recidencia').value;
      let Celular = document.getElementById('Celular').value;
      let propio_alquilado = document.querySelector('input[name="propio_alquilado"]:checked').value;
      let marca = document.getElementById('marca').value;
      let modelo = document.getElementById('modelo').value;
      let año_carro = document.getElementById('año_carro').value;
      let empreza_nombre = document.getElementById('empreza_nombre').value;
      let codigo_empleado = document.getElementById('codigo_empleado').value;
      let direccion_tuE = document.getElementById('direccion_tuE').value;
      let tel = document.getElementById('tel').value;
      let email = document.getElementById('email').value;
      let tiemp_empreza = document.getElementById('tiemp_empreza').value;
      let empreza_contrato = document.getElementById('empreza_contrato').value;
      let direccion_e = document.getElementById('direccion_e').value;
      let cargo = document.getElementById('cargo').value;
      let saldo_mensual = document.getElementById('saldo_mensual').value;
      let tel_empreza = document.getElementById('tel_empreza').value;
      let EMAIL = document.getElementById('EMAIL').value;
      let nombre_apellido_cony = document.getElementById('nombre_apellido_cony').value;
      let cédula_cony = document.getElementById('cédula_cony').value;
      let nombre_emp_cony = document.getElementById('nombre_emp_cony').value;
      let sul_men_cony = document.getElementById('sul_men_cony').value;
      let Dirección_cony = document.getElementById('Dirección_cony').value;
      let cargo_cony = document.getElementById('cargo_cony').value;
      let tiemp_serv_cony = document.getElementById('tiemp_serv_cony').value;
      let tel_cony = document.getElementById('tel_cony').value;
      let email_cony = document.getElementById('email_cony').value;


      generatePDF(nombre,apodo,cedula,nacionalidad,eCivil,edad,gEducacion,ocupacion,dependientes,vivienda,añoVivienda,direccion,sector,tel_recidencia,Celular,propio_alquilado,marca,modelo,año_carro,empreza_nombre,codigo_empleado,direccion_tuE,tel,email,tiemp_empreza,empreza_contrato,direccion_e,cargo,saldo_mensual,tel_empreza,EMAIL,nombre_apellido_cony,cédula_cony,nombre_emp_cony,sul_men_cony,Dirección_cony,cargo_cony,tiemp_serv_cony,tel_cony,email_cony);
  })

});

async function generatePDF(nombre,apodo,cedula,nacionalidad,eCivil,edad,gEducacion,ocupacion,dependientes,vivienda,añoVivienda,direccion,sector,tel_recidencia,Celular,propio_alquilado,marca,modelo,año_carro,empreza_nombre,codigo_empleado,direccion_tuE,tel,email,tiemp_empreza,empreza_contrato,direccion_e,cargo,saldo_mensual,tel_empreza,EMAIL,nombre_apellido_cony,cédula_cony,nombre_emp_cony,sul_men_cony,Dirección_cony,cargo_cony,tiemp_serv_cony,tel_cony,email_cony) {
  const image = await loadImage("page01.jpg");

  const pdf = new jsPDF('p', 'pt', 'letter');

  pdf.addImage(image, 'PNG', 0, 0, 565, 792);

  pdf.setFontSize(12);

  const date = new Date();
  pdf.text(date.getUTCDate().toString(), 235, 150);
  pdf.text((date.getUTCMonth() + 1).toString(), 275, 150);
  pdf.text(date.getUTCFullYear().toString(), 320, 150);

  pdf.setFontSize(10);
  //datos solicitante
  pdf.text(nombre, 120, 220);//
  pdf.text(apodo, 460, 220);//
  pdf.text(cedula, 100, 247);//
  pdf.text(nacionalidad, 300, 247);//
  pdf.text(eCivil, 481, 247);//
  pdf.text(edad, 65, 275);//
  pdf.text(gEducacion, 320, 275);//
  pdf.text(ocupacion, 150, 275);//
  pdf.text(dependientes, 523, 275);//
  pdf.text(añoVivienda, 490, 305);//
  pdf.text(direccion, 75, 332);//
  pdf.text(sector, 75, 360);//
  pdf.text(tel_recidencia, 285, 360);//
  pdf.text(Celular, 410, 360);//
  pdf.text(marca, 220, 387);//
  pdf.text(modelo, 355, 384);//
  pdf.text(año_carro, 502, 389);//
  pdf.text(empreza_nombre, 234, 417);//
  pdf.text(codigo_empleado, 495, 417);//
  pdf.text(direccion_tuE,79 ,445);//
  pdf.text(tel,65 ,473);//
  pdf.text(email,210 ,473);//
  pdf.text(tiemp_empreza,502 ,473);//
  pdf.text(empreza_contrato,210 ,502);//
  pdf.text(direccion_e,77 ,529);//
  pdf.text(cargo,77 ,557);//
  pdf.text(saldo_mensual,480 ,557);//
  pdf.text(tel_empreza,77 ,585);//
  pdf.text(EMAIL,320 ,585);//
//datos del conyugue
pdf.text(nombre_apellido_cony,153 ,614);//
pdf.text(cédula_cony,423 ,614);//
pdf.text(nombre_emp_cony,185 ,641);//
pdf.text(sul_men_cony,467 ,642);//
pdf.text(Dirección_cony,77 ,669);//
pdf.text(cargo_cony,70 ,698);//
pdf.text(tiemp_serv_cony,467 ,698);//
pdf.text(tel_cony,61 ,727);//
pdf.text(email_cony,320 ,727);//



  pdf.setFillColor(0,0,0);

    if(parseInt(vivienda)==1){
        pdf.circle(112,300,4,'FD');

    }else{
        pdf.circle(185,300,4,'FD');
    }
    if(parseInt(propio_alquilado)==1){
        pdf.circle(112,385,4,'FD');

    }else{
        pdf.circle(141,385,4,'FD');
    }

  pdf.save("example.pdf");

}
