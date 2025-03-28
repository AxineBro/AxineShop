// scripts/seller-details.js
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('seller-details-form');
    
    form.addEventListener('submit', (event) => {
        const inn = document.getElementById('inn').value;
        const ogrn = document.getElementById('ogrn').value;
        const ogrnFile = document.getElementById('ogrn-file').files[0];
        const innFile = document.getElementById('inn-file').files[0];

        // Валидация ИНН (10 или 12 цифр)
        const innRegex = /^\d{10}$|^\d{12}$/;
        if (!innRegex.test(inn)) {
            event.preventDefault();
            alert('ИНН должен содержать 10 или 12 цифр.');
            return;
        }

        // Валидация ОГРН (13 цифр)
        const ogrnRegex = /^\d{13}$/;
        if (!ogrnRegex.test(ogrn)) {
            event.preventDefault();
            alert('ОГРН должен содержать 13 цифр.');
            return;
        }

        // Проверка файлов
        const allowedTypes = ['application/pdf', 'image/jpeg', 'image/png'];
        const maxSize = 5 * 1024 * 1024; 

        if (ogrnFile) {
            if (!allowedTypes.includes(ogrnFile.type)) {
                event.preventDefault();
                alert('Документ ОГРН должен быть в формате PDF, JPEG или PNG.');
                return;
            }
            if (ogrnFile.size > maxSize) {
                event.preventDefault();
                alert('Документ ОГРН не должен превышать 5MB.');
                return;
            }
        }

        if (innFile) {
            if (!allowedTypes.includes(innFile.type)) {
                event.preventDefault();
                alert('Документ ИНН должен быть в формате PDF, JPEG или PNG.');
                return;
            }
            if (innFile.size > maxSize) {
                event.preventDefault();
                alert('Документ ИНН не должен превышать 5MB.');
                return;
            }
        }
    });
});
