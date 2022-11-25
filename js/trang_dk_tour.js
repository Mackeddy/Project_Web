
function tinh_tong(){
    n= document.getElementById('people').value;
   let a=document.getElementById('hiphai').innerHTML;
   a=a.replace(/,/g,"");
   let sum=n*a;
    document.getElementById('tinh_tong').innerHTML=sum.toLocaleString();
}
function savetour()
        {
            let diadiem = document.getElementById('diadiem').value;
            let dk_tour={};
            let kiem_tra_loi=false;
            //ten
            let ten=document.getElementById('fullname').value;
            if(ten.length==0)
            {
                document.getElementById('error_fullname').innerHTML="Tên không được để trống.";
                kiem_tra_loi=true;
            }else{
                //regex chép của người khác
                let regex_ten=/^[A-ZÀ|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ|È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ|Ì|Í|Ị|Ỉ|Ĩ|Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ|Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ|Ỳ|Ý|Ỵ|Ỷ|Ỹ|Đ][a-zà|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ|è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ|ì|í|ị|ỉ|ĩ|ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ|ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ|ỳ|ý|ỵ|ỷ|ỹ]*(?:[ ][A-ZÀ|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ|È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ|Ì|Í|Ị|Ỉ|Ĩ|Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ|Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ|Ỳ|Ý|Ỵ|Ỷ|Ỹ|Đ][a-zà|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ|è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ|ì|í|ị|ỉ|ĩ|ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ|ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ|ỳ|ý|ỵ|ỷ|ỹ]*)+$/;
          
                if(!regex_ten.test(ten)){
                    document.getElementById('error_fullname').innerHTML='Tên không hợp lệ.';
                    kiem_tra_loi=true;
                }
                else{
                    document.getElementById('error_fullname').innerHTML=''; 
                }
            }
            //email
            let email=document.getElementById('email').value;
            if(email.length==0){
                document.getElementById('error_email').innerHTML='Email không được để trống.';
                kiem_tra_loi=true;
            }else{
                let regex_email=/^[a-z][a-z0-9_\.]{5,32}@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){1,2}$/
                if(!regex_email.test(email)){
                    document.getElementById('error_email').innerHTML='Email không hợp lệ.';
                    kiem_tra_loi=true;
                }else{
                    document.getElementById('error_email').innerHTML='';
                }
            }
            //sdt
            let sdt=document.getElementById('sdt').value;
            if(sdt.length==0){
                document.getElementById('error_sdt').innerHTML="Số điện thoại không được để trống.";
                kiem_tra_loi=true;
            }else{
                let regex_sdt=/^(0?)(3[2-9]|5[6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])[0-9]{7}$/;
                if(!regex_sdt.test(sdt)){
                    document.getElementById('error_sdt').innerHTML="Số điện thoại không đúng.";
                    kiem_tra_loi=true;
                }else{
                    document.getElementById('error_sdt').innerHTML='';
                }
            }
            //place
            let pl=document.getElementById('place').value;
            if(pl.length==0){
                document.getElementById('error_place').innerHTML="Địa chỉ không được để trống.";
                kiem_tra_loi=true;
            }else{
                document.getElementById('error_place').innerHTML='';
            }
            //date
            let date=document.getElementById('date').value;
            if(date.length==0){
                document.getElementById('error_date').innerHTML="Ngày không được để trống.";
                kiem_tra_loi=true;
            }else{
                document.getElementById('error_date').innerHTML='';
            }
              //số người
            let people=document.getElementById('people').value;
            if(people.length==0){
                document.getElementById('error_people').innerHTML="Số người không được để trống.";
                kiem_tra_loi=true;
            }else{
                document.getElementById('error_people').innerHTML='';
            }

            if(kiem_tra_loi){
                return false;
            }
            else{
                //kiểm tra xem trong mảng có dữ liệu chưa
                //nếu có thì giải mã dữ liệu cũ để thêm cái mới vào
                //nếu ko thì tạo mảng rỗng để thêm vào
                let ListCustomer = localStorage.getItem("Customer") ? JSON.parse(localStorage.getItem("Customer")) : []
                ListCustomer.push({
                    name: ten,
                    email: email,
                    sdt: sdt,
                    date: date,
                    people: people,
                    diadiem: diadiem
                })
                localStorage.setItem("Customer", JSON.stringify(ListCustomer))
                renderCustomer();
            }
/*         //xóa các tt sau khi lưu
          let inputs=document.querySelectorAll('input');
          inputs.forEach(input => input.value='');
          document.getElementById('tinh_tong').innerHTML=''; */
        }