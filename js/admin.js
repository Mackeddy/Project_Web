function renderCustomer(){
    let ListCustomer = localStorage.getItem("Customer") ? JSON.parse(localStorage.getItem("Customer")) : []
    let customer = `<tr>
        <th>ID</th>
        <th>Full name</th>
        <th>Email</th>
        <th>SĐT</th>
        <th>Ngày</th>
        <th>Số người</th>
        <th>Địa điểm</th>
        <th id="action">Action</th>
    </tr>`
    ListCustomer.map((value, index) => {
    customer +=  `<tr>
        <td>${index + 1}</td>
        <td>${value.name}</td>
        <td>${value.email}</td>
        <td>${value.sdt}</td>
        <td>${value.date}</td>
        <td>${value.people}</td>
        <td>${value.diadiem}</td>
        <td id="action">
            <button id="edit" onclick="editCustomer(${index})">Sửa</button>
            <button onclick="deleteCustomer(${index})">Xóa</button>
        </td>
    </tr>`
    })
    document.getElementById("tabledata").innerHTML = customer
}

function editCustomer(index){
    let ListCustomer = localStorage.getItem("Customer") ? JSON.parse(localStorage.getItem("Customer")) : []
    document.getElementById("fullname").value = ListCustomer[index].name
    document.getElementById("email").value = ListCustomer[index].email
    document.getElementById("sdt").value = ListCustomer[index].sdt
    document.getElementById("date").value = ListCustomer[index].date
    document.getElementById("people").value = ListCustomer[index].people
    document.getElementById("diadiem").value = ListCustomer[index].diadiem
    document.getElementById("index").value = index
}

function changeCustomer(){
    let ListCustomer = localStorage.getItem("Customer") ? JSON.parse(localStorage.getItem("Customer")) : []
    let index = document.getElementById("index").value
    ListCustomer[index]={
        name: document.getElementById("fullname").value,
        email: document.getElementById("email").value,
        sdt: document.getElementById("sdt").value,
        date: document.getElementById("date").value,
        people: document.getElementById("people").value,
        diadiem: document.getElementById("diadiem").value
    }
    localStorage.setItem("Customer", JSON.stringify(ListCustomer))
    renderCustomer()
}

function deleteCustomer(index){
    let ListCustomer = localStorage.getItem("Customer") ? JSON.parse(localStorage.getItem("Customer")) : []
    if(confirm("Xác nhận xóa")){
        ListCustomer.splice(index, 1)
    }
    localStorage.setItem("Customer", JSON.stringify(ListCustomer))
    renderCustomer()
    
}
    
