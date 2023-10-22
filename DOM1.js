const btnArr = [
    "All", "Breakfast", "Lunch", "Shakes"
];

const menuCard = [

]

const menuBtns = document.querySelector('.btn')

btnArr.forEach((elem)=>{
    menuBtns.innerHTML += `<button type="button" class="btn btn-outline-warning" onclick="${elem}">${elem}</button>`

})



function All(){
    console.log("tukka");
}


