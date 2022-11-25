const inputSearch = document.querySelector(".input-search")
const autoBox = document.querySelector(".autobox")
//console.log (inputSearch)
inputSearch.onkeyup = (e)=>{
    //console.log(e.target.value)
    let checkData = e.target.value
    let dataArray = []
    if(checkData){
        dataArray=recomentlist.filter((data)=>{
            return data.toLocaleLowerCase().startsWith(checkData.toLocaleLowerCase())
                
        })
            //console.log(dataArray)
        dataArray=dataArray.map((data)=>{
            return data = '<li>'+data+'</li>'
        })
        //console.log (dataArray)
        autoBox.classList.add('active')
        showAdress (dataArray)
        let liItem = autoBox.querySelectorAll("li")
        for(let i=0; i<liItem.length; i++){
            liItem[i].addEventListener("click", function(){
                inputSearch.value = liItem[i].innerHTML
                autoBox.classList.remove('active')
            })
        }
        //console.log (dataArray)

    }
    else{
        autoBox.classList.remove('active')
    }
}


function showAdress (list){
    let listData
    if(!list.length){
        listData = '<li>'+inputSearch.value+'</li>'
    }
    else{
        listData = list.join('')
    }
    autoBox.innerHTML = listData
}

let recomentlist =[
    "Hà Nội",
    "Đà Lạt",
    "Quảng Ninh",
    "Thành phố Hồ Chí Minh",
    "Đà Nẵng",
    "Phú Quốc",
    "Huế",
    "Quảnh Bình",
    "Cao Bằng",
    "Phú Thọ",
    "Nha Trang",
    "Sapa",
    "Hà Giang",
    "Ninh Bình",
    "Phong Nha - Kẻ Bàng",
    "Mũi Né - Bình Thuận",
    "Cần Thơ",
    "ĐắkNông",
]


// Người
const inputNumber = document.querySelector(".number-people")
const numberBox = document.querySelector(".number-box")
const numberClose = document.querySelector(".number-close")


inputNumber.addEventListener("click", function(){
    numberBox.classList.add("active")
})

numberClose.addEventListener("click", function(){
        numberBox.classList.remove("active")
})



const nguoilonPlus = document.querySelector(".nguoilonPlus")
const nguoilonMinus = document.querySelector(".nguoilonMinus")
let nguoilonvalue = document.querySelector(".nguoilon span")

let i=0

nguoilonPlus.addEventListener("click", function(){
    i = i+1
    nguoilonvalue.innerHTML = i 
    totalNumber()
})
nguoilonMinus.addEventListener("click", function(){
    if(i<=0) {i = 0}
    else {i=i-1}
    nguoilonvalue.innerHTML = i 
    totalNumber()
})

const treemPlus = document.querySelector(".treemPlus")
const treemMinus = document.querySelector(".treemMinus")
let treemvalue = document.querySelector(".treem span")

let o=0

treemPlus.addEventListener("click", function(){
    o = o+1
    treemvalue.innerHTML = o
    totalNumber()
})
treemMinus.addEventListener("click", function(){
    if(o<=0) { o= 0}
    else {o=o-1}
    treemvalue.innerHTML = o 
    totalNumber()
})

const tssPlus = document.querySelector(".tssPlus")
const tssMinus = document.querySelector(".tssMinus")
let tssvalue = document.querySelector(".tss span")

let u=0

tssPlus.addEventListener("click", function(){
    u = u+1
    tssvalue.innerHTML = u
    totalNumber()
})
tssMinus.addEventListener("click", function(){
    if(u<=0) {u = 0}
    else {u=u-1}
    tssvalue.innerHTML = u
    totalNumber()
})


function totalNumber(){
    total = i + o + u
    inputNumber.value = total + " người"
 }
