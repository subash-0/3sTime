let arrayOfNepali = ['०', '१', '२', '३', '४', '५', '६', '७', '८', '९'];

function toNepaliNumber(num) {
    return num.toString().split('').map(digit => arrayOfNepali[parseInt(digit)]).join('');
}

function checkDigit(num, isNepali) {
    let formattedNum = num.toString().length > 1 ? num.toString() : '0' + num;
    return isNepali ? toNepaliNumber(formattedNum) : formattedNum;
}

function NepTime({ color = 'black', bgColor = 'white', format = 'hh-mm-ss', elementId = 'nepali-time' } = {}) {
    const element = document.getElementById(elementId);
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
        let is12HourFormat = format.includes('hh-mm-ss') || format.includes("HH-MM-SS");
        let isNepali = format === format.toLowerCase();

        if (is12HourFormat) {
            hours = hours % 12 || 12;
        }
        
        let formattedTime = `${checkDigit(hours, isNepali)}:${checkDigit(minutes, isNepali)}`;
        if (format.toLowerCase().includes('ss')) {
            formattedTime += `:${checkDigit(seconds, isNepali)}`;
        }
        
        if (is12HourFormat) {
            formattedTime += ` ${date.getHours() >= 12 ? 'PM' : 'AM'}`;
        }
        
        element.innerHTML = formattedTime;
    }
    
    setInterval(updateTime, 1000);
}

export default NepTime;
