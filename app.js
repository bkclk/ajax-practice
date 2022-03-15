document.getElementById("ajax").addEventListener("click",addEmployees);


function addEmployees(){
    const xhr=new XMLHttpRequest();
    xhr.open("GET","employees.json",true);
    xhr.onload=function(){
        if(this.status===200){
           
            const employees= JSON .parse(this.responseText);
            
            
            addToUI(employees);
        }

    };
    xhr.send();
}
function addToUI(employees){
    let table=document.getElementById("employees");
    
    employees.forEach(employee => { 
    let tr=document.createElement("tr");
    let tdname=document.createElement("td");
    let tddepart=document.createElement("td");
    let tdsalary=document.createElement("td");  
    tdname.textContent=employee.name;
    tddepart.textContent=employee.department;
    tdsalary.textContent=employee.salary;
    table.appendChild(tr);
    tr.appendChild(tdname);
    tr.appendChild(tddepart);
    tr.appendChild(tdsalary);
    });
}