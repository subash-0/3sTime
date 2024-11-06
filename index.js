let arrayOfNeplai = ['०', '१', '२', '३', '४', '५', '६', '७', '८', '९'];

function toNepaliNumber(num) {
    return num.toString().split('').map(digit => arrayOfNeplai[parseInt(digit)]).join('');
}

 function npTime({ color = 'black', bgColor = 'white',clcFormat="24" } = {}) {
    const element = document.getElementById('nepali-time');
    if (!element) {
        console.error('Element not found');
        return;
    }
    
    element.style.color = color;
    element.style.backgroundColor = bgColor;
    
    function convertInOneSecond() {
        const date = new Date();
        let hours = toNepaliNumber(date.getHours());
        clcFormat=="12"?hours = toNepaliNumber(date.getHours() > 12 ? date.getHours() - 12 : date.getHours()):hours = toNepaliNumber(date.getHours());
        const minutes = toNepaliNumber(date.getMinutes());
        const seconds = toNepaliNumber(date.getSeconds());
        clcFormat=="12"?time = `${hours}:${minutes}:${seconds} ${date.getHours() >= 12 ? 'PM' : 'AM'}`:time = `${hours}:${minutes}:${seconds}`;
        element.innerHTML = time;
    }

    setInterval(convertInOneSecond, 1000);
}

module.exports = { npTime };