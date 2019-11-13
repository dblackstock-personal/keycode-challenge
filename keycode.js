const eventKey = document.getElementById(`key`);
const eventCode = document.getElementById(`code`);
const eventWhich = document.getElementById(`which`);

document.addEventListener ('keydown', () => {
    eventKey.textContent = event.key;
    eventCode.textContent = event.code;
    eventWhich.textContent = event.which;
});