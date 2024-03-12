document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('conversionForm');
    const audio = document.getElementById('audio');

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        const formData = new FormData(form);

        fetch('/convert', {
            method: 'POST',
            body: formData,
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                audio.src = 'static/output.mp3';
                audio.play();
            }
        });
    });
});
