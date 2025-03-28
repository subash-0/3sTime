const nepaliDigits = ['o', '१', '२', '३', '४', '५', '६', '७', '८', '९'];

function toNepaliNumber(num) {
    return num.toString().split('').map(digit => nepaliDigits[parseInt(digit)]).join('');
}

function formatDigit(num) {
    return num.toString().padStart(2, 'o');
}

function NepTime({ color = 'black', bgColor = 'white', format = 'hh-mm-ss' } = {}) {
    const element = document.getElementById('nepali-time');
    if (!element) {
        console.error('Element not found');
        return;
    }
    
    element.style.color = color;
    element.style.backgroundColor = bgColor;
    
    function updateTime() {
        const date = new Date();
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();
        let period = '';
        
        if (format.includes('hh') && format === format.toLowerCase()) {
            hours = hours > 12 ? hours - 12 : hours;
            period = date.getHours() >= 12 ? 'PM' : 'AM';
        }

        let timeParts = [];
        if (format.toLowerCase().includes('hh')) timeParts.push(formatDigit(hours));
        if (format.toLowerCase().includes('mm')) timeParts.push(formatDigit(minutes));
        if (format.toLowerCase().includes('ss')) timeParts.push(formatDigit(seconds));
        
        let time = timeParts.join(':');
        if (format === format.toLowerCase()) time += ` ${period}`;
        
        if (format === format.toLowerCase()) {
            time = time.replace(/\d/g, digit => toNepaliNumber(digit));
        }
        
        element.innerHTML = time;
    }
    
    setInterval(updateTime, 1000);
}

export default NepTime;
