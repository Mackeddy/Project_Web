const search = () =>{
    const searchbox = document.getElementById("search-item").value.toUpperCase();
    const touritems = document.getElementById("list_tour")
    const tour = document.querySelectorAll(".in4_tour")
    const tname = document.getElementsByTagName("h1")

    for(var i = 0; i < tname.length; i++){
        let match = tour[i].getElementsByTagName('h1')[0];

        if(match){
            let textvalue = match.textContent || match.innerHTML

            if(textvalue.toUpperCase().indexOf(searchbox) > -1){
                tour[i].style.display = "";
            }else{
                tour[i].style.display = "none";
            }
        }
    }
}