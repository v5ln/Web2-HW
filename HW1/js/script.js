var students = [];
function GetTheData(){
    let nameInputEl = document.getElementById('name').value;
    let idInputEl = document.getElementById('idNumber').value;
    let gdpaInputEl = document.getElementById('gdpa').value;
    // Validation for input
    inputValidation(nameInputEl, idInputEl, gdpaInputEl);
}


function inputValidation(name, id, gdpa) {
    // check for the value of each element

    if (id == '') {
        alert('Please insert the student id number');
        return;
    }

    for (var i=0; i<students.length; i++){
        if (students[i].id == id){
            alert('student id is already exist');
            return;
        }
    }

    if (name == '') {
        alert('Please insert the student name');
        return;
    }

    if (gdpa == '') {
        alert('Please insert the student gdpa');
        return;
    }

    // insert student
    insertStudent(name, id, gdpa);

}


function Delete(){
    var to_delete = document.getElementById("Del-Upd").value;
    for (var i=0; i<students.length; i++){
        if (students[i].id == to_delete){
            students.splice(i,1);
            console.log('students array: ', students);
        }
    }
    table();
}


function insertStudent(name, id, gdpa) {
    let student = {
        id: id,
        name: name,
        gdpa: gdpa,
    };
    students.push(student);
    console.log('students array: ', students);
    table();
}

function table(){
    var html = '<table class=" table order-list">';
    html += '<tr>\n' +
        '            <td>ID</td>\n' +
        '            <td>Name</td>\n' +
        '            <td>GDPA</td>\n' +
        '        </tr>'
    for (var i=0; i< students.length; i++){
        html += '<tr>';
        html += '<td>' + students[i].id + '</td>';
        html += '<td>' + students[i].name + '</td>';
        html += '<td>' + students[i].gdpa + '</td>';
        html += '</tr>';
    }
    html += '</table>';
    document.getElementById('table').innerHTML = html;
}
