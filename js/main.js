/**
 * B1: Hiển thị danh sách kính
 * _Glasses
 * _GlassesList
 * B2: Xây dựng chức năng thử kính
 * B3: Xây dụng chức năng so sánh
 * 
 */

 let dataGlasses = [
    {id:"G1",src:"./img/g1.jpg",virtualImg:"./img/v1.png",brand:"Armani Exchange",name:"Bamboo wood",color:"Brown",price:150,description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis ea voluptates officiis? "},
    {id:"G2",src:"./img/g2.jpg",virtualImg:"./img/v2.png",brand:"Arnette",name:"American flag",color:"American flag",price:150,description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. In assumenda earum eaque doloremque, tempore distinctio."},
    {id:"G3",src:"./img/g3.jpg",virtualImg:"./img/v3.png",brand:"Burberry",name:"Belt of Hippolyte",color:"Blue",price:100,description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit."},
    {id:"G4",src:"./img/g4.jpg",virtualImg:"./img/v4.png",brand:"Coarch",name:"Cretan Bull",color:"Red",price:100,description:"In assumenda earum eaque doloremque, tempore distinctio."},
    {id:"G5",src:"./img/g5.jpg",virtualImg:"./img/v5.png",brand:"D&G",name:"JOYRIDE",color:"Gold",price:180,description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error odio minima sit labore optio officia?"},
    {id:"G6",src:"./img/g6.jpg",virtualImg:"./img/v6.png",brand:"Polo",name:"NATTY ICE",color:"Blue, White",price:120,description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit."},
    {id:"G7",src:"./img/g7.jpg",virtualImg:"./img/v7.png",brand:"Ralph",name:"TORTOISE",color:"Black, Yellow",price:120,description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim sint nobis incidunt non voluptate quibusdam."},
    {id:"G8",src:"./img/g8.jpg",virtualImg:"./img/v8.png",brand:"Polo",name:"NATTY ICE",color:"Red, Black",price:120,description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, unde enim."},
    {id:"G9",src:"./img/g9.jpg",virtualImg:"./img/v9.png",brand:"Coarch",name:"MIDNIGHT VIXEN REMIX",color:"Blue, Black",price:120,description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit consequatur soluta ad aut laborum amet."}
];
// import các lớp đối tượng vài main
import { Glasses } from "./_glasses.js";
import {GlassesList} from "./_glassesList.js";

let glassesList = new GlassesList();

// Hàm rút gọn cú pháp lấy elementbyID
const getELE = (id) => {
    return document.getElementById(id);
}

// Hàm hiển thị danh sách kính
const showGlassesList = () =>{
    let divGlassesList = getELE("vglassesList");

    // Tạo đối tượng kính và thêm kính vào ds kính
    // duyệt mảng data
    dataGlasses.map((item,index)=>{
        let gl = new Glasses(item.id,item.src,item.virtualImg,item.brand,item.name,item.color,item.price,item.description);
        // console.log(gl);
        glassesList.addGlasses(gl);
        divGlassesList.innerHTML = glassesList.renderGlasses();
    });

}

// Gọi Hàm
showGlassesList();

const tryOnGlasses = (e)=>{
    let gID = e.target.getAttribute("data-id");
    let gObject = {};
    // value là một đối tượng kính trong danh sách kính
    for(let value of glassesList.gList){
        if(value.id == gID){
            gObject = value;
        }
    }
    // duyệt xong sẽ có đc gObject
    // Gọi hàm
    showInfo(gObject);
}

window.tryOnGlasses = tryOnGlasses;

const showInfo = (gObject) =>{
    let divAvatar = getELE("avatar");
    let divInfo = getELE("glassesInfo");

    divAvatar.innerHTML = `
        <img id="glasses" src="${gObject.virtualImg}">
    `;

    let status = "";
    if(gObject.status){
        status = "Stocking";
    }else{
        status = "Sold Out";
    }
    divInfo.innerHTML =`
        <h5>${gObject.name} - ${gObject.brand} - ${gObject.color}</h5>
        <p class="cart-text">
            <span class="btn btn-danger btn-sm mr-2">$${gObject.price}</span>
            <span class="text-success">${status}</span>
        </p>
        <p class="cart-text">
            ${gObject.desc}
        </p>
    `;
    divInfo.style.display = "block";
}

/***
 * Before: gỡ kính ra
 * After: gắn kính vào mẫu
 */

const removeGlasses = (isDisplay) =>{
    let glasses = getELE("glasses");
    if(glasses != null) {
        if(isDisplay){
            // glasses.style.display = "block";
            glasses.style.opacity = 1;
        }else{
            // glasses.style.display = "none";
            glasses.style.opacity = 0;
        }
    }
    
}

window.removeGlasses = removeGlasses;