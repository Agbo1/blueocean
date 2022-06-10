function count() {
    let number = 20
    for (let i = 0; 1 < number; i++)
        console.log(`$["number one"]`);
}

let studentModel = [{
    "name": "",
    "password": "",
    "email": "",
    "gender": "",
    "status": "",
    "phone": "",
    "address": "",
    "zipcode": "",
    "date": "",
    "program": "",
    "duration": "",
    "policy": "",
}]

// console.log(studentModel);

function validateMyForm() {
    studentModel.name = document.getElementById(`fullname`).value;
    studentModel.password = document.getElementById(`password`).value;
    studentModel.email = document.getElementById(`email`).value;
    studentModel.gender = document.getElementById(`gender`).value;
    studentModel.status = document.getElementById(`status`).value;
    studentModel.phone = document.getElementById(`phone`).value;
    studentModel.address = document.getElementById(`address`).value;
    studentModel.zipcode = document.getElementById(`zipcode`).value;
    studentModel.date = document.getElementById(`date`).value;
    studentModel.program = document.getElementById(`program`).value;
    studentModel.duration = document.getElementById(`duration`).value;
    studentModel.policy = document.getElementById(`policy`).value;



    let student = [];
    studentModel.push(student);
    console.log(studentModel);





    localStorage.setItem("students", JSON.stringify(studentModel));
    let allStudents = JSON.parse(localStorage.getItem("students"));

    // allStudents.name;
    console.log(allStudents);
    document.getElementById('fullname').value = "";
    document.getElementById('password').value = "";
    document.getElementById('email').value = "";
    document.getElementById('gender').value = ""
    document.getElementById('status').value = ""
    document.getElementById('phone').value = ""
    document.getElementById('address').value = ""
    document.getElementById('zipcode').value = ""
    document.getElementById('program').value = ""
    document.getElementById('duration').value = ""
    document.getElementById('policy').value = ""
}

// studentModel();


(function sayHello() {
    let name = prompt("What is your name?");
    if (name == "Ekene") {
        alert("You entered Ekene as our name");
    } else {
        alert("Name unknown");
    }
})();