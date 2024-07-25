document.addEventListener('DOMContentLoaded', () => {
    const audio = document.getElementById('audio');
    const playButton = document.getElementById('play');
    const playIcon = playButton.querySelector('i');
    const progressBar = document.querySelector('input[type="range"]');

    playButton.addEventListener('click', () => {
        if (audio.paused) {
            audio.play();
            playIcon.classList.remove('fa-play');
            playIcon.classList.add('fa-pause');
        } else {
            audio.pause();
            playIcon.classList.remove('fa-pause');
            playIcon.classList.add('fa-play');
        }
    });

    audio.addEventListener('timeupdate', () => {
        const progress = (audio.currentTime / audio.duration) * 100;
        progressBar.value = progress;
    });

    progressBar.addEventListener('input', () => {
        const time = (progressBar.value / 100) * audio.duration;
        audio.currentTime = time;
    });
});
