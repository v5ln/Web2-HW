var students = [];
var counter = 0;
function GetTheData(){
    let nameInputEl = document.getElementById('name').value;
    let idInputEl = document.getElementById('idNumber').value;
    let gdpaInputEl = document.getElementById('gdpa').value;
    // Validation for input
    inputValidation(nameInputEl, idInputEl, gdpaInputEl);
};


function inputValidation(name, id, gdpa) {
    // check for the value of each element

    if (id == '') {
        alert('Please insert the student id number');
        return;
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

    // Show success message
    //showMessage('success');
}

function showMessage(event){
    if (event == 'success') {
        alert('Studnet added!')
    }else{
        alert('Faild to add student')
    }
}

function Delete(){
    var to_delete = document.getElementById("Del").value;
    for (var i=0; i<students.length; i++){
        if (students[i].id == to_delete){
            students.splice(i,1);
            console.log('students array: ', students);
        }
    }
}


function insertStudent(name, id, gdpa) {
    let student = {
        id: id,
        name: name,
        gdpa: gdpa,
    };

    var new_row = $("<tr>");
    var new_col = "";

    new_col += "<td><p class='addedName'></p></td>";
    new_col += "<td><p class='addedID'></p></td>";
    new_col += "<td><p class='addedGDPA'></p></td>";
    //new_col += '<td><input type="button" class="ibtnDel btn btn-md btn-danger "  value="Delete"></td>';


    new_row.append(new_col);
    $("table.order-list").append(new_row);
    document.getElementsByClassName("addedName")[counter].innerHTML = name;
    document.getElementsByClassName("addedID")[counter].innerHTML = id;
    document.getElementsByClassName("addedGDPA")[counter].innerHTML = gdpa;
    students.push(student);
    console.log('students array: ', students);
    counter++;
}




$(document).ready(function () {


    $("#addrow").on("click", function () {
        var newRow = $("<tr>");
        var cols = "";

        cols += '<td><input type="text" class="form-control" name="name' + counter + '"/></td>';
        cols += '<td><input type="text" class="form-control" name="mail' + counter + '"/></td>';
        cols += '<td><input type="text" class="form-control" name="phone' + counter + '"/></td>';

        //cols += '<td><input type="button" class="ibtnDel btn btn-md btn-danger "  value="Delete"></td>';
        newRow.append(cols);
        $("table.order-list").append(newRow);
        counter++;
    });



    //$("table.order-list").on("click", ".ibtnDel", function (event) {
    //    $(this).closest("tr").remove();
    //    counter -= 1
    //});


});
