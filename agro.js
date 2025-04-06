const schedule = document.getElementById("schedule");
const eventInput = document.getElementById("eventInput");

function addEvent() {
    const eventText = eventInput.value.trim();
    if (eventText) {
        const eventDiv = document.createElement("div");
        eventDiv.className = "event";
        eventDiv.innerHTML = `
            <span>${eventText}</span>
            <button onclick="editEvent(this)">Editar</button>
            <button onclick="removeEvent(this)">Remover</button>
        `;
        schedule.appendChild(eventDiv);
        eventInput.value = "";
    }
}

function editEvent(button) {
    const eventDiv = button.parentNode;
    const eventText = prompt("Edite o evento:", eventDiv.querySelector("span").innerText);
    if (eventText) {
        eventDiv.querySelector("span").innerText = eventText.trim();
    }
}

function removeEvent(button) {
    const eventDiv = button.parentNode;
    schedule.removeChild(eventDiv);
}