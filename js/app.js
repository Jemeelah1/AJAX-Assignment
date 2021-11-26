async function api () {
try {
const teachers = await fetch("http://localhost:3000/teachers").then((response) => { return response}).catch((e) => console.error('i caught your bug',e));
console.log(teachers);
let api = document.querySelector(".api");
api.innerHTML = `${teachers}`
}catch(e){
    console.error('oops your api is shitty',e);
}
}
api();