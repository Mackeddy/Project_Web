var pass,user;
var us=new Array("pd","dha","td","hgb","hvn","nta");
var pw=new Array("003", "045", "114", "065","358","063");
function onload() { 
    pass = document.getElementById('pass');
    user = document.getElementById('user');
}
function check(){
    var i;
    for(i=0; i<=5; i++){
        if(user.value==us[i]){
            if(pass.value == pw[i]){
            alert("Đăng nhập thành công!");
            window.location.href="./wc_travel.html";
            exit();
            } else alert("Đăng nhập thất bại!");
                exit();
        }
    }
}
