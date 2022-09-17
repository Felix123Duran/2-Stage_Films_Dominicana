function loadImage(url){
  return new Promise(resolve=>{

    const xhr = new XMLHttpRequest();
    xhr.open('GET',URL,true)
    xhr.responseType ='blob';
    xhr.onload=function(e){
      const reader = new FileReader();
      reader.onload=function(event){
        const res = event.target.result;
        resolve(res);
      }
      const file =this.response;
      reader.readAsDataURL(file);
    }
    xhr.send();

  });
}

window.addEventListener('load',async()=> {

  const formu = document.querySelector('#formulario');
  formu,addEventListener('submit',(e)=>{
    e.preventDefault();
    generadorPDF();
  } )
});

async function generadorPDF(){
  const img = await loadImage("Page01.jpg");
  //console.log("Page01.jpg");
  //const img = new Image();
  //img.src = path.resolve('Page01.jpg');
  const pdf = new jsPDF('p','pt','letter');
  pdf.addImage(img,'JPG',0,0,565,792);

  pdf.save('Autos.pdf');
}