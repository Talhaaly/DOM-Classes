const btnArr = [
    "All", "Breakfast", "Lunch", "Shakes"
];

const menuCard = [
{
    title: "d",
    title: "s",
    title: "c",
    title: "d",
    title: "e"
},
{
    title: "d",
    title: "s",
    title: "c",
    title: "d",
    title: "e"
},
{
    title: "d",
    title: "s",
    title: "c",
    title: "d",
    title: "e"
},
{
    title: "d",
    title: "s",
    title: "c",
    title: "d",
    title: "e"
},
{
    title: "d",
    title: "s",
    title: "c",
    title: "d",
    title: "e"
},
{
    title: "Cake",
    price: "500",
    desc: "mujhy khila do",
    src: "d",
    category: "shake"
}
]

const menuBtns = document.querySelector('.btn')
const mainMenu = document.querySelector('.menu')

btnArr.forEach((elem)=>{
    menuBtns.innerHTML += `<button type="button" class="btn btn-outline-warning" onclick="${elem}()">${elem}</button>`

})

// function printData(){
//     menuCard.forEach(()=>{
//         mainMenu.innerHTML += ``
//     })
// }



function All(){
    console.log("All tukka");
}
function Breakfast(){
    console.log("Breakfast tukka");
}
function Lunch(){
    console.log(" Lunch tukka");
}
function Shakes(){
    console.log("Shakes tukka");
}


