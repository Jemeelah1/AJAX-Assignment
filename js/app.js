const button = document.querySelector('button');
let card = document.createElement('div');
let cardBody = document.createElement('div');
let cardTitle = document.createElement('h5');
let cardText = document.createElement('p');
let cardColumn = document.createElement('div');
let img = document.createElement('img');
let teacher;
async function getData(){
    teacher =  await fetch('http://localhost:3000/teachers').then((response) => { return response.json()}).catch((e) => console.error('i caught your bug',e));
   
}
setTimeout(getData, 1);
function displayData () {
try {
     console.log(teacher[0].name);
    let input = document.querySelector('input').value;
    if(input.value != ""){
        let filtered = teacher.filter((val) => val.name.includes(input));
        console.log(filtered, 'filtered');
        filtered.map((filtTeach) => {
            card.style.width = "18rem";
            card.classList.add("card");
            img.src = filtTeach['image'];
            img.alt = 'teacher';
            img.classList.add('img-fluid');
            cardBody.classList.add('card-body');
            cardTitle.innerHTML = filtTeach['name'];
            cardText.classList.add('card-text');
            cardColumn.classList.add('col-md-4');
            cardBody.appendChild(cardTitle);
            cardBody.appendChild(cardText);
            card.appendChild(img);
            card.appendChild(cardBody);
            cardColumn.appendChild(card);
            console.log(cardColumn);
            return document.querySelector('.over-all').append(cardColumn);
        });
    }
    else{
        return;
    }
}catch(e){
    console.error('oops an error occured',e);
}
}
button.addEventListener('click', displayData);

// on every click return a card 
