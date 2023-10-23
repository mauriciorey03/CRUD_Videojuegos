// VERIFICADOR DE INFORMACIÓN DEL FORMULARIO
function validar() {
    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    var telefono = document.getElementById("telefono").value;
    var email = document.getElementById("email").value;

    if( name == "") {
        alert("El nombre es requerido");
        return false;
    }

    if( age == "") {
        alert("La Edad es requerida");
        return false;
    } else if (age < 1 ){
        alert('La edad debe ser un número positivo, mayor a cero.');
        return false;
    }

    if( telefono == "") {
        alert("El Telefono es requerido");
        return false;
    } else if (telefono < 0 ){
        alert('El teléfono debe ser un número positivo');
    }

    if( email == "") {
        alert("El Email es requerido");
        return false;
    } 

    return true;
}



// FUNCIÓN PARA MOSTRAR LA INFORMACIÓN
function showData(){
    var peopleList;
    if (localStorage.getItem('peopleList') == null) {
        peopleList = [];
    }
    else {
        peopleList = JSON.parse(localStorage.getItem('peopleList'));
    }
    var html = "";
    peopleList.forEach(function (element,index){
        html += "<tr>";
        html += "<td>" + element.identificacion + "</td>";
        html += "<td>" + element.name + "</td>";
        html += "<td>" + element.age + "</td>";
        html += "<td>" + element.email + "</td>";
        html += '<td><button onclick="EditarData('+index+')" class="btn btn-warning m-2">Editar</button><button onclick="deleteData('+index+')" class="btn btn-danger">Delete</button></td>';
        html += "</tr>";
});

document.querySelector("#crudTable tbody").innerHTML = html;

}

//CARGA TODA LA DATA CUANDO EL DOCUMENTO O LA PAGINA CARGA
document.onload = showData();


//FUNCIÓN PARA AGREGAR DATA
function AddData() {
    if (validar() == true) {
        var name = document.getElementById("name").value;
        var apellido = document.getElementById("apellido").value;
        var identificacion = document.getElementById("identificacion").value;
        var telefono = document.getElementById("telefono").value;
        var age = document.getElementById("age").value;
        var email = document.getElementById("email").value;
        var nacional = document.getElementById("nacional").value;

        var peopleList;
        if (localStorage.getItem('peopleList') == null) {
        peopleList = [];
        } else {
        peopleList = JSON.parse(localStorage.getItem('peopleList'));
        }
        peopleList.push({
            name: name,
            apellido: apellido,
            identificacion: identificacion,
            telefono: telefono,
            age: age,
            email: email,
            nacional: nacional
        });
        localStorage.setItem('peopleList', JSON.stringify(peopleList));
        showData();
        document.getElementById("name").value = "";
        document.getElementById("apellido").value = "";
        document.getElementById("identificacion").value = "";
        document.getElementById("telefono").value = "";
        document.getElementById("age").value = "";
        document.getElementById("email").value = "";
        document.getElementById("nacional").value = "";
    }
        alert('cliente almacenado')
}

//FUNCIÓN PARA ELIMINAR LA INFORMACIÓN
function deleteData(index){
    var peopleList;
    if (localStorage.getItem('peopleList') == null) {
        peopleList = [];
    }
    else {
        peopleList = JSON.parse(localStorage.getItem('peopleList'));
    }
    peopleList.splice(index,1);
    localStorage.setItem('peopleList', JSON.stringify(peopleList));
    showData();
    alert('cliente eliminado')
}

//FUNCIÓN PARA EDITAR LA INFORMACIÓN

function EditarData(index){
    document.getElementById("Submit").style.display = 'none';
    document.getElementById("Update").style.display = 'block';

    var peopleList;
    if (localStorage.getItem('peopleList') == null) {
        peopleList = [];
    } else {
        peopleList = JSON.parse(localStorage.getItem('peopleList'));
    }

    document.getElementById("name").value = peopleList[index].name;
    document.getElementById("apellido").value = peopleList[index].apellido;
    document.getElementById("identificacion").value = peopleList[index].identificacion;
    document.getElementById("telefono").value = peopleList[index].telefono;
    document.getElementById("age").value = peopleList[index].age;
    document.getElementById("email").value = peopleList[index].email;
    document.getElementById("nacional").value = peopleList[index].nacional;

    document.getElementById("Update").onclick = function() {
        if (validar() == true) {
            peopleList[index].name = document.getElementById("name").value;
            peopleList[index].apellido = document.getElementById("apellido").value;
            peopleList[index].identificacion = document.getElementById("identificacion").value;
            peopleList[index].telefono = document.getElementById("telefono").value;
            peopleList[index].age = document.getElementById("age").value;
            peopleList[index].email = document.getElementById("email").value;
            peopleList[index].nacional = document.getElementById("nacional").value;

        localStorage.setItem('peopleList', JSON.stringify(peopleList));
    
        showData();
        document.getElementById("name").value = "";
        document.getElementById("apellido").value = "";
        document.getElementById("identificacion").value = "";
        document.getElementById("telefono").value = "";
        document.getElementById("age").value = "";
        document.getElementById("email").value = "";
        document.getElementById("nacional").value = "";
        
        document.getElementById("Submit").style.display = 'block';
        document.getElementById("Update").style.display = 'none';
        }
    }
};