const correctPassword = "senha123";
let isEditing = false;

function requestEdit() {
    const loginDiv = document.getElementById("login");
    loginDiv.classList.remove("hidden");
}

function authenticate() {
    const password = document.getElementById("password").value;
    if (password === correctPassword) {
        isEditing = true;
        document.getElementById("login").classList.add("hidden");
        enableEditing();
    } else {
        alert("Senha incorreta!");
    }
}

function enableEditing() {
    const rows = document.querySelectorAll("#schedule tr");
    rows.forEach(row => {
        row.childNodes.forEach(cell => {
            cell.contentEditable = true;
        });
    });
    alert("Modo ativado.");
}

function addRow() {
    if (!isEditing) {
        alert("Por favor, insira a senha para acessar o modo de edição antes de adicionar novos horários.");
        return;
    }

    const table = document.getElementById("schedule");
    const newRow = document.createElement("tr");

    const timeCell = document.createElement("td");
    timeCell.contentEditable = true;
    timeCell.textContent = "00:00";
    newRow.appendChild(timeCell);

    const activityCell = document.createElement("td");
    activityCell.contentEditable = true;
    activityCell.textContent = "Nova atividade";
    newRow.appendChild(activityCell);

    const actionCell = document.createElement("td");
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Excluir";
    deleteButton.onclick = () => deleteRow(deleteButton);
    actionCell.appendChild(deleteButton);
    newRow.appendChild(actionCell);

    table.appendChild(newRow);
}

function deleteRow(button) {
    if (!isEditing) {
        alert("Por favor, insira a senha para acessar o modo de edição antes de excluir horários.");
        return;
    }

    const row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
}