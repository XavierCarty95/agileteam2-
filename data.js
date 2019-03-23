// document.getElementById('button').addEventListener('click', loadEmployees);
        
//         // Load Employees
//         function loadEmployees() {
//             console.log("hello you have successfully logged in"  );
//             var xhr = new XMLHttpRequest();
//             xhr.open('GET', 'https://cors.io/?https://xaviercarty201810-xaviercarty.c9users.io/api/employees', true);
            
//             xhr.onload = function() {
//                 if (this.status == 200) {
//                     var employees = JSON.parse(this.responseText);
//                     console.log("hello you have successfully logged in"  );
            
//                     var output = "";
//                     for (var i in employees){
//                         output += 
//                             '<div class="user">' +
//                             '<ul>' +
//                             '<li>ID: '+ employees[i].name +'</li>' +
//                             '<li>Login: '+ employees[i].id +'</li>' +
//                             '<li>Login: '+ employees[i].timeIn+'</li>' +
//                             '<li>Login: '+ employees[i].timeOut +'</li>' +
//                             '</ul>' +
//                             '</div>';
//                     }
//                     document.getElementById('users').innerHTML = output;
//                 }    
//             };
//         xhr.send();        
//         }   
        