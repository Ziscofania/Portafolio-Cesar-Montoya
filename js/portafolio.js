document.getElementById('toggle-dark-mode').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

document.getElementById('download-cv').addEventListener('click', () => {
    const link = document.createElement('a');
    link.href = 'path/to/your/cv.pdf';  // Asegúrate de poner el enlace correcto
    link.download = 'Cesar_Montoya_CV.pdf';
    link.click();
});

document.getElementById('view-projects').addEventListener('click', () => {
    document.querySelector('.projects').classList.toggle('hidden');
});

document.getElementById('project-upload-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const fileInput = document.getElementById('project-file');
    const file = fileInput.files[0];
    if (file) {
        alert(`Proyecto subido: ${file.name}`);
    } else {
        alert('Por favor, selecciona un archivo.');
    }
});


