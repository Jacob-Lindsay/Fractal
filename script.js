function toggleMenu() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}

function darkMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}


const productContainers = [...document.querySelectorAll(
    '.product-container')];

const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})

var modal =document.getElementById('myModal');
var images = document.getElementsByClassName('myImages');
var modalImg = document.getElementById("img01");


for (var i = 0; i < images.length; i++) {
    var img = images[i];

    img.onclick = function(evt) {
        modal.style.display = "block";
        modalImg.src = this.src;
    }
}

var span = document.getElementsByClassName("modal-close")[0];

const search = () => {
    const searchBox = document.getElementById("search-box").value.toUpperCase();
    const storeItems = document.getElementById("product-gallery-all")
    const product = document.querySelectorAll(".product");
    const pName = storeItems.getElementsByTagName("h2");

    for(var i = 0; i < pName.length; i++) {
        let match = product[i].getElementsByTagName('h2')[0];
        
        if(match){
           let textvalue = match.textContent || match.innerHTML

           if (textvalue.toUpperCase().indexOf(searchBox) > -1) {
            product[i].style.display = "";
           } else {
            product[i].style.display = "none";
           }
        }
    }
}

span.onclick = function() {
    modal.style.display = "none";
}


window.onload = function() {
    document.getElementById("autoplay").play();
}

