function playing() {
    if (!playing) {
        gameCanvas.classList.remove('canvas-play');
    } else {
        gameCanvas.classList.add('canvas-play');
    }
}

export default playing;