
const API = "http://localhost:8000/api/producto/"

const getProductos = async () => {
    try {
        const res = await fetch(API);
        const data = await res.json();
        console.log(data);

    } catch (error) {
        console.log(error);
    }
    
}

window.addEventListener("load", async () =>{
    await getProductos();
});

