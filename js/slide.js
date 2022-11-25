function changeslide(type, element){
    let slideshow = document.getElementsByClassName('slide')
    for(i = 0; i < slideshow.length; i++){
        slideshow[i].style.background='grey';
    }
    element.style.background='#88CDF6';
    document.getElementById(type).style.display = "flex";
    switch(type){
        case 'p1' : document.getElementById('p2').style.display = "none";
                    document.getElementById('p3').style.display = "none";
                    break;
        case 'p2' : document.getElementById('p1').style.display = "none";
                    document.getElementById('p3').style.display = "none";
                    break;
        case 'p3' : document.getElementById('p1').style.display = "none";
                    document.getElementById('p2').style.display = "none";
                    break;            
    }
}