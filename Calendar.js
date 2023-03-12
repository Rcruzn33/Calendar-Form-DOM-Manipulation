let id = 0;
document.getElementById('add').addEventListener('click', ()=> {
    let table = document.getElementById('list');
    let row = table.insertRow(1);
    row.setAttribute('id', `item-${id}`);
    row.insertCell(0).innerHTML = document.getElementById('new-event').value;
    row.insertCell(1).innerHTML = document.getElementById('event-date').value;
    row.insertCell(2).innerHTML = document.getElementById('event-time').value;
    row.insertCell(3).innerHTML = document.getElementById('event-location').value;
    let actions = row.insertCell(4);
    actions.appendChild(createDeleteButton(id++));
    function createDeleteButton(id) {
        let btn = document.createElement('button');
        btn.className = 'btn btn-Primary';
        btn.id = id;
        btn.innerHTML = 'Delete Event';
        btn.onclick = () => {
            let elementToDelete = document.getElementById(`item-${id}`);
            elementToDelete.parentNode.removeChild(elementToDelete);
        };
        return btn;
    }
});