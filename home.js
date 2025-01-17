const addButton = document.querySelector('.add-button');
const fileInput = document.getElementById('file-input');
const memoryImage = document.querySelector('.memory-card img');

addButton.addEventListener('click', () => {
    fileInput.click();
});

fileInput.addEventListener('change', () => {
    const file = fileInput.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = () => {
            memoryImage.src = reader.result;
        };
        reader.readAsDataURL(file);
    }
});