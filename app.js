async function login(){

const rollNumber=
document.getElementById("roll").value;

const password=
document.getElementById("password").value;

const response=
await fetch(
"http://localhost:5000/login",
{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({
rollNumber,
password
})
}
);

const data=
await response.json();

if(data.success){

localStorage.setItem(
"student",
JSON.stringify(data.student)
);

window.location="dashboard.html";

}else{
alert("Invalid Login");
}
}