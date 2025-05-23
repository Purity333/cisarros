function galeriaLogin(swLogin){
    let url_gal = url_host + '/ventas/backend/productos/'
    // Si es con Login llama a otra url
    if (swLogin)
        url_gal = url_host + '/ventas/backend/productos_login/'
    $.ajax({
        type: "GET",      // GET, PUT, POST, DELETE
        async: false,      // Sincrónico
        url: url_gal ,  // Url de la API
        cache: false,
        dataType: "json",             // Formato de envio
        beforeSend: function (xhr) {
            // Si es con Login rescata el token del LocalStorage
            // y Lo Envía
            if (swLogin){
                url_token_access = localStorage.getItem("url_token_access");
                xhr.setRequestHeader('Authorization','Bearer '+url_token_access );
            }
            // Método de ejecuta antes de enviar
            console.log('... cargando...');
        }
        , error: function (data) {
            alert("Error " +   JSON.stringify(data))
            console.log('Tenemos problemas Houston ' +  JSON.stringify(data));
        },
        success: function (data) {
            //alert("Success" + data)
            if (!data.OK){
                alert(data.msg)
                return
            }
            renderizaHtml(data)
        }
    });
}

function renderizaHtml(data){
var strProd= ""
for(var x=0;x<data.registro.length;x++){
   let reg = data.registro[x]
   let unProd = `
   <div class="col-sm-6 col-lg-4">
   <div class="card card-sm">
     <a href="#" class="d-block">
       <img src="/static/tabler/img/photos/${reg.imagen}" 
                  class="card-img-top"></a>
     <div class="card-body">
       <div class="d-flex align-items-center">
         <span class="avatar me-3 rounded" 
             style="background-image: url(/static/tabler/img/avatars/000m.jpg)"></span>
         <div>
           <div>${reg.nombre}</div>
           <div class="text-secondary">${reg.desc_corta}</div>
         </div>
         <div class="ms-auto">
           <a href="#" class="text-secondary">
             <!-- Download SVG icon from http://tabler-icons.io/i/eye -->
             <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" /><path d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6" /></svg>
             ${reg.cant_favoritos}
           </a>
           <a href="#" class="ms-3 text-secondary">
             <!-- Download SVG icon from http://tabler-icons.io/i/heart -->
             <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" /></svg>
             ${reg.cant_vistos}
           </a>
         </div>
       </div>
     </div>
   </div>
 </div>
          ` 
          strProd+=     unProd  
          // strProd+=     unProd 
}
//alert(strProd)  
console.log("strProd:=>" +strProd)
document.getElementById("objDiv").innerHTML=strProd
}