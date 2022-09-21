
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


      //Segunda Pagina
      let nombre2 = document.getElementById('nombre').value;
      let Nombre_fam = document.getElementById('Nombre_fam').value;
      let Parentesco_fam = document.getElementById('Parentesco_fam').value;
      let Direcion_fam = document.getElementById('Direcion_fam').value;
      let tel_fam = document.getElementById('tel_fam').value;
      let Nombre_fam2 = document.getElementById('Nombre_fam2').value;
      let parentesco_fam2 = document.getElementById('parentesco_fam2').value;
      let Direcion_fam2 = document.getElementById('Direcion_fam2').value;
      let tel_fam2 = document.getElementById('tel_fam2').value;
      let Nombre_fam3 = document.getElementById('Nombre_fam3').value;
      let parentesco_fam3 = document.getElementById('parentesco_fam3').value;
      let Direcion_fam3 = document.getElementById('Direcion_fam3').value;
      let tel_fam3 = document.getElementById('tel_fam3').value;
    //tabla 2 
    let Nombre_apellido_Prestamo = document.getElementById('Nombre_apellido_Prestamo').value;
    let Fecha = document.getElementById('Fecha').value;
    let Monto_prestado = document.getElementById('Monto_prestado').value;
    let pago_mensual = document.getElementById('pago_mensual').value;
    let fecha_Vencimiento = document.getElementById('fecha_Vencimiento2').value;
    let Nombre_apellido_Prestamo2 = document.getElementById('Nombre_apellido_Prestamo2').value;
    let Fecha2 = document.getElementById('Fecha2').value;
    let Monto_prestado2 = document.getElementById('Monto_prestado2').value;
    let pago_mensual2 = document.getElementById('pago_mensual2').value;
    let fecha_Vencimiento2 = document.getElementById('fecha_Vencimiento2').value;
    let Nombre_apellido_Prestamo3 = document.getElementById('Nombre_apellido_Prestamo3').value;
    let Fecha3 = document.getElementById('Fecha3').value;
    let Monto_prestado3 = document.getElementById('Monto_prestado3').value;
    let pago_mensual3 = document.getElementById('pago_mensual3').value;
    let fecha_Vencimiento3 = document.getElementById('fecha_Vencimiento3').value;
    //tabla 3
    let Tipo_Cuenta = document.getElementById('Tipo_Cuenta').value;
    let No_Cuentas = document.getElementById('No_Cuentas').value;
    let Banco = document.getElementById('Banco').value;
    let Tipo_Cuenta2 = document.getElementById('Tipo_Cuenta2').value;
    let No_Cuentas2 = document.getElementById('No_Cuentas2').value;
    let Banco2 = document.getElementById('Banco2').value;
    let Tipo_Cuenta3 = document.getElementById('Tipo_Cuenta3').value;
    let No_Cuentas3 = document.getElementById('No_Cuentas3').value;
    let Banco3 = document.getElementById('Banco3').value;

    //datos del garante
    let nombreGarante = document.getElementById('GaranteNom').value;
    let GaranteApodo = document.getElementById('GaranteApodo').value;
    let CedulaGarante = document.getElementById('CedulaGarante').value;
    let GaranteNacionalidad = document.getElementById('GaranteNacionalidad').value;
    let eCivil_garante = document.getElementById('eCivil_garante').value;
    let edadGarante = document.getElementById('edadGarante').value;
    let OcupacionGarante = document.getElementById('OcupacionGarante').value;
    let gEducacionGarante = document.getElementById('gEducacionGarante').value;
    let dependientes_Garante = document.getElementById('dependientes_Garante').value;
    let sueldoMenGarante = document.getElementById('sueldoMenGarante').value;
    let otrosIngre_garante = document.getElementById('otrosIngre_garante').value;
    let viviendaGarante = document.querySelector('input[name="viviendaGarante"]:checked').value;
    let PagoMenGarante = document.getElementById('PagoMenGarante').value;
    let añoViviendaGarante = document.getElementById('añoViviendaGarante').value;
    let direccionGarante = document.getElementById('direccionGarante').value;
    let sectorGarante = document.getElementById('sectorGarante').value;
    let telGarante = document.getElementById('telGarante').value;
    let celularGarante = document.getElementById('celularGarante').value;
    let propio_alquiladoGarante = document.querySelector('input[name="propio_alquiladoGarante"]:checked').value;
    let marcaGarante = document.getElementById('marcaGarante').value;
    let modeloGarante = document.getElementById('modeloGarante').value;
    let año_carroGarante = document.getElementById('año_carroGarante').value;
    let Nombre_famgarante = document.getElementById('Nombre_famgarante').value;
    let Parentesco_famgarante = document.getElementById('Parentesco_famgarante').value;
    let Direcion_famgarante = document.getElementById('Direcion_famgarante').value;
    let tel_famgarante = document.getElementById('tel_famgarante').value;

    let Nombre_fam2garante = document.getElementById('Nombre_fam2garante').value;
    let Parentesco_fam2garante = document.getElementById('parentesco_fam2garante').value;
    let Direcion_fam2garante = document.getElementById('Direcion_fam2garante').value;
    let tel_fam2garante = document.getElementById('tel_fam2garante').value;

    let Nombre_fam3garante = document.getElementById('Nombre_fam3garante').value;
    let Parentesco_fam3garante = document.getElementById('parentesco_fam3garante').value;
    let Direcion_fam3garante = document.getElementById('Direcion_fam3garante').value;
    let tel_fam3garante = document.getElementById('tel_fam3garante').value;

    //Pagina #03
    let nombre3 = document.getElementById('nombre').value;
    
    let Nombre_apellido_PrestamoGarante = document.getElementById('Nombre_apellido_PrestamoGarante').value;
    let FechaPrestamoGarante = document.getElementById('FechaPrestamoGarante').value;
    let Monto_prestadoGarante = document.getElementById('Monto_prestadoGarante').value;
    let pago_mensualPrestamoGarante = document.getElementById('pago_mensualPrestamoGarante').value;
    let fecha_VencimientoPrestamoGarante = document.getElementById('fecha_VencimientoPrestamoGarante').value;

    let Nombre_apellido_PrestamoGarante2 = document.getElementById('Nombre_apellido_PrestamoGarante2').value;
    let FechaPrestamoGarante2 = document.getElementById('FechaPrestamoGarante2').value;
    let Monto_prestadoGarante2 = document.getElementById('Monto_prestadoGarante2').value;
    let pago_mensualPrestamoGarante2 = document.getElementById('pago_mensualPrestamoGarante2').value;
    let fecha_VencimientoPrestamoGarante2 = document.getElementById('fecha_VencimientoPrestamoGarante2').value;
    
    let Nombre_apellido_PrestamoGarante3 = document.getElementById('Nombre_apellido_PrestamoGarante3').value;
    let FechaPrestamoGarante3 = document.getElementById('FechaPrestamoGarante3').value;
    let Monto_prestadoGarante3 = document.getElementById('Monto_prestadoGarante3').value;
    let pago_mensualPrestamoGarante3 = document.getElementById('pago_mensualPrestamoGarante3').value;
    let fecha_VencimientoPrestamoGarante3 = document.getElementById('fecha_VencimientoPrestamoGarante3').value;



      generatePDF(nombre,apodo,cedula,nacionalidad,eCivil,edad,gEducacion,ocupacion,dependientes,vivienda,añoVivienda,direccion,sector,tel_recidencia,Celular,propio_alquilado,marca,modelo,año_carro,empreza_nombre,codigo_empleado,direccion_tuE,tel,email,tiemp_empreza,empreza_contrato,direccion_e,cargo,saldo_mensual,tel_empreza,EMAIL,nombre_apellido_cony,cédula_cony,nombre_emp_cony,sul_men_cony,Dirección_cony,cargo_cony,tiemp_serv_cony,tel_cony,email_cony,
        nombre2,Nombre_fam,Parentesco_fam,Direcion_fam,tel_fam,Nombre_fam2,parentesco_fam2,Direcion_fam2,tel_fam2,Nombre_fam3,parentesco_fam3,Direcion_fam3,tel_fam3
        ,Nombre_apellido_Prestamo,Nombre_apellido_Prestamo2,Nombre_apellido_Prestamo3,Fecha,Fecha2,Fecha3,Monto_prestado,Monto_prestado2,Monto_prestado3,pago_mensual,pago_mensual2,pago_mensual3,fecha_Vencimiento,fecha_Vencimiento2,fecha_Vencimiento3,
        Tipo_Cuenta,Tipo_Cuenta2,Tipo_Cuenta3,No_Cuentas,Banco,No_Cuentas2,Banco2,Banco3,No_Cuentas3,
        nombreGarante,GaranteApodo,CedulaGarante,GaranteNacionalidad,eCivil_garante,edadGarante,OcupacionGarante,gEducacionGarante,dependientes_Garante,sueldoMenGarante,otrosIngre_garante,viviendaGarante,PagoMenGarante,añoViviendaGarante,direccionGarante,sectorGarante,telGarante,celularGarante,propio_alquiladoGarante,marcaGarante,modeloGarante,año_carroGarante,Nombre_famgarante,Parentesco_famgarante,Direcion_famgarante,tel_famgarante,Nombre_fam2garante,Parentesco_fam2garante,Direcion_fam2garante,tel_fam2garante,Nombre_fam3garante,Parentesco_fam3garante,Direcion_fam3garante,tel_fam3garante,
        nombre3,Nombre_apellido_PrestamoGarante,FechaPrestamoGarante,Monto_prestadoGarante,pago_mensualPrestamoGarante,fecha_VencimientoPrestamoGarante,Nombre_apellido_PrestamoGarante2,Nombre_apellido_PrestamoGarante3,FechaPrestamoGarante2,Monto_prestadoGarante2,pago_mensualPrestamoGarante2,fecha_VencimientoPrestamoGarante2,FechaPrestamoGarante3,Monto_prestadoGarante3,pago_mensualPrestamoGarante3,fecha_VencimientoPrestamoGarante3);
  })

});

async function generatePDF(nombre,apodo,cedula,nacionalidad,eCivil,edad,gEducacion,ocupacion,dependientes,vivienda,añoVivienda,direccion,sector,tel_recidencia,Celular,propio_alquilado,marca,modelo,año_carro,empreza_nombre,codigo_empleado,direccion_tuE,tel,email,tiemp_empreza,empreza_contrato,direccion_e,cargo,saldo_mensual,tel_empreza,EMAIL,nombre_apellido_cony,cédula_cony,nombre_emp_cony,sul_men_cony,Dirección_cony,cargo_cony,tiemp_serv_cony,tel_cony,email_cony,
    nombre2,Nombre_fam,Parentesco_fam,Direcion_fam,tel_fam,Nombre_fam2,parentesco_fam2,Direcion_fam2,tel_fam2,Nombre_fam3,parentesco_fam3,Direcion_fam3,tel_fam3
    ,Nombre_apellido_Prestamo,Nombre_apellido_Prestamo2,Nombre_apellido_Prestamo3,Fecha,Fecha2,Fecha3,Monto_prestado,Monto_prestado2,Monto_prestado3,pago_mensual,pago_mensual2,pago_mensual3,fecha_Vencimiento,fecha_Vencimiento2,fecha_Vencimiento3,
    Tipo_Cuenta,Tipo_Cuenta2,Tipo_Cuenta3,No_Cuentas,Banco,No_Cuentas2,Banco2,Banco3,No_Cuentas3,
    nombreGarante,GaranteApodo,CedulaGarante,GaranteNacionalidad,eCivil_garante,edadGarante,OcupacionGarante,gEducacionGarante,dependientes_Garante,sueldoMenGarante,otrosIngre_garante,viviendaGarante,PagoMenGarante,añoViviendaGarante,direccionGarante,sectorGarante,telGarante,celularGarante,propio_alquiladoGarante,marcaGarante,modeloGarante,año_carroGarante,Nombre_famgarante,Parentesco_famgarante,Direcion_famgarante,tel_famgarante,Nombre_fam2garante,Parentesco_fam2garante,Direcion_fam2garante,tel_fam2garante,Nombre_fam3garante,Parentesco_fam3garante,Direcion_fam3garante,tel_fam3garante,
    nombre3,Nombre_apellido_PrestamoGarante,FechaPrestamoGarante,Monto_prestadoGarante,pago_mensualPrestamoGarante,fecha_VencimientoPrestamoGarante,Nombre_apellido_PrestamoGarante2,Nombre_apellido_PrestamoGarante3,FechaPrestamoGarante2,Monto_prestadoGarante2,pago_mensualPrestamoGarante2,fecha_VencimientoPrestamoGarante2,FechaPrestamoGarante3,Monto_prestadoGarante3,pago_mensualPrestamoGarante3,fecha_VencimientoPrestamoGarante3) {
  const image = await loadImage("page01.jpg");

  const pdf = new jsPDF('p', 'pt', 'letter');

  pdf.addImage(image, 'PNG', 0, 0, 565, 792);



  pdf.setFontSize(12);

  const date = new Date();
  pdf.text(date.getUTCDate().toString(), 70, 136);
  pdf.text((date.getUTCMonth() + 1).toString(), 95, 136);
  pdf.text(date.getUTCFullYear().toString(), 115, 136);

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

  
  //Nueva pagina #Page020
  pdf.addPage('letter','p');
  const imh2 =await loadImage("page02.jpg")
  pdf.addImage(imh2, 'PNG', 0, 0, 565, 792);

    pdf.setFontSize(12);
    pdf.text(nombre2, 360, 30);//
    //tabla 1 pagina 2
    pdf.text(Nombre_fam, 30, 90);//
    pdf.text(Parentesco_fam, 161, 90);//
    pdf.text(Direcion_fam, 287, 90);//
    pdf.text(tel_fam, 417, 90);//

    pdf.text(Nombre_fam2, 30, 115);//
    pdf.text(parentesco_fam2, 161, 115);//
    pdf.text(Direcion_fam2, 287, 115);//
    pdf.text(tel_fam2, 417, 115);//

      pdf.text(Nombre_fam3, 30, 138);//
      pdf.text(parentesco_fam3, 161, 138);//
      pdf.text(Direcion_fam3, 287, 138);//
      pdf.text(tel_fam3, 417, 138);//
      //tabla 2 pagina 2 
      pdf.text(Nombre_apellido_Prestamo, 30, 210);//
      pdf.text(Fecha, 150, 210);//
      pdf.text(Monto_prestado, 240, 210);//
     pdf.text(pago_mensual, 360, 210);//
      pdf.text(fecha_Vencimiento, 470, 210);//

 
      pdf.text(Nombre_apellido_Prestamo2, 30, 234);//
      pdf.text(Fecha2, 150, 234);//
      pdf.text(Monto_prestado2, 240, 234);//
      pdf.text(pago_mensual2, 360, 234);//
      pdf.text(fecha_Vencimiento2, 470, 234);//


      pdf.text(Nombre_apellido_Prestamo3, 30, 257);//
      pdf.text(Fecha3, 150, 257);//
     pdf.text(Monto_prestado3, 240, 257);//
     pdf.text(pago_mensual3, 360, 257);//
      pdf.text(fecha_Vencimiento3, 470, 257);//

      //tabla numero 2 pagina 2
      pdf.text(Tipo_Cuenta, 30, 325);//
      pdf.text(Tipo_Cuenta2, 30, 350);//
     pdf.text(Tipo_Cuenta3, 30, 375);//

     pdf.text(Banco, 423, 325);//
     pdf.text(Banco2, 423, 350);//
      pdf.text(Banco3, 423, 375);//

    
      pdf.text(No_Cuentas, 170, 325);//
      pdf.text(No_Cuentas2, 170, 350);//
      pdf.text(No_Cuentas3, 170, 375);//

      //datos del garante
      pdf.text(nombreGarante, 120, 437);//
      pdf.text(GaranteApodo, 464, 437);//
      pdf.text(CedulaGarante, 90, 465);//
      pdf.text(GaranteNacionalidad, 300, 465);//
      pdf.text(eCivil_garante, 483, 465);//
      pdf.text(edadGarante, 63, 493);//
      pdf.text(OcupacionGarante, 150, 493);//
      pdf.text(gEducacionGarante, 431, 493);//
      pdf.text(dependientes_Garante, 140, 520);//
      pdf.text(sueldoMenGarante, 292, 520);//
      pdf.text(otrosIngre_garante, 431, 520);//
      pdf.text(PagoMenGarante, 292, 550);//
      pdf.text(añoViviendaGarante, 490, 550);//
      pdf.text(direccionGarante, 82, 578);//
      pdf.text(sectorGarante, 75, 605);//
      pdf.text(telGarante, 278, 605);//
      pdf.text(celularGarante, 410, 605);//
      pdf.text(marcaGarante, 210, 635);//
      pdf.text(modeloGarante, 345, 635);//
      pdf.text(año_carroGarante, 502, 635);//
      
      
    if(parseInt(viviendaGarante)==1){
      pdf.circle(112,548,4,'FD');
    }else{
      pdf.circle(185,548,4,'FD');
    }
    if(parseInt(propio_alquiladoGarante)==1){
      pdf.circle(112,630,4,'FD');
    }
    else{
      pdf.circle(142,630,4,'FD');
    }
      pdf.text(Nombre_famgarante, 30, 710);//
      pdf.text(Parentesco_famgarante, 161, 710);//
      pdf.text(Direcion_famgarante, 287, 710);//
      pdf.text(tel_famgarante, 417, 710);//

      pdf.text(Nombre_fam2garante, 30, 730);//
      pdf.text(Parentesco_fam2garante, 161, 730);//
      pdf.text(Direcion_fam2garante, 287, 730);//
      pdf.text(tel_fam2garante, 417, 730);//

      pdf.text(Nombre_fam3garante, 30, 760);//
      pdf.text(Parentesco_fam3garante, 161, 760);//
      pdf.text(Direcion_fam3garante, 287, 760);//
      pdf.text(tel_fam3garante, 417, 760);//


      
  //Nueva pagina #Page020
  pdf.addPage('letter','p');
  const img3 =await loadImage("page03.jpg")
  pdf.addImage(img3, 'PNG', 0, 0, 565, 792);
  pdf.setFontSize(12);

  pdf.text(nombre3, 360, 30);//

  pdf.text(Nombre_apellido_PrestamoGarante, 30, 90);//
  pdf.text(FechaPrestamoGarante, 148, 90);//
  pdf.text(Monto_prestadoGarante, 244, 90);//
  pdf.text(pago_mensualPrestamoGarante, 362, 90);
  pdf.text(fecha_VencimientoPrestamoGarante,470 , 90);//

  pdf.text(Nombre_apellido_PrestamoGarante2, 30, 115);//
  pdf.text(FechaPrestamoGarante2, 148, 115);//
  pdf.text(Monto_prestadoGarante2, 244, 115);//
  pdf.text(pago_mensualPrestamoGarante2, 362, 115);
  pdf.text(fecha_VencimientoPrestamoGarante2,470 , 115);//


  pdf.text(Nombre_apellido_PrestamoGarante3, 30, 138);//
  pdf.text(FechaPrestamoGarante3, 148, 138);//
  pdf.text(Monto_prestadoGarante3, 244, 138);//
  pdf.text(pago_mensualPrestamoGarante3, 362, 138);
  pdf.text(fecha_VencimientoPrestamoGarante3,470 , 138);//


  pdf.save("example.pdf");

}
