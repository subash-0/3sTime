let arrayOfNeplai = ['0', '१', '२', '३', '४', '५', '६', '७', '८', '९'];

function toNepaliNumber(num) {
    return num.toString().split('').map(digit => arrayOfNeplai[parseInt(digit)]).join('');
}
function checkDigit(num) {
    return num.toString().length > 1 ? num : '0' + num;
}

 function NepTime({ color = 'black', bgColor = 'white',clcFormat="24" } = {}) {
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
        hours = checkDigit(hours);
        
        clcFormat=="12"?hours = toNepaliNumber(date.getHours() > 12 ? date.getHours() - 12 : date.getHours()):hours = toNepaliNumber(date.getHours());
        let minutes = toNepaliNumber(date.getMinutes());
        minutes = checkDigit(minutes);
        let seconds = toNepaliNumber(date.getSeconds());
        seconds = checkDigit(seconds);
        let time;
        clcFormat=="12"?time = `${hours}:${minutes}:${seconds} ${date.getHours() >= 12 ? 'PM' : 'AM'}`:time = `${hours}:${minutes}:${seconds}`;
        element.innerHTML = time;
    }

    setInterval(convertInOneSecond, 1000);
    
}

export default NepTime;