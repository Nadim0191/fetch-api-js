
function userInfo(params) {
    fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => response.json())
.then(json =>{
    let userInfo = ""
    for (let js of json){
       
           userInfo += 
           `<tr>
           <td>${js.id}</td>
           <td>${js.name}</td>
           <td>${js.username}</td>
           <td>${js.email}</td>
        
           </tr>`
    }
    document.querySelector('#fetchTable tbody').innerHTML =userInfo
})
}


