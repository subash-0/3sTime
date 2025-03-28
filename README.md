# neptime
nepTime is a lightweight npm module for displaying the current time in Nepali numerals.

# Installation
```bash
npm install nepTime
```

## Example HTML Usage
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Nepali Time Example</title>
</head>
<body>
    <h2>Time in Different Formats</h2>
    <div>
        <p>hh-mm-ss (Nepali): <span id="nepali-time-hh-mm-ss"></span></p>
        <p>hh-mm (Nepali): <span id="nepali-time-hh-mm"></span></p>
        <p>HH-MM-SS (English): <span id="nepali-time-HH-MM-SS"></span></p>
        <p>HH-MM (English): <span id="nepali-time-HH-MM"></span></p>
    </div>

    <script type="module">
        import NepTime from 'neptime';

        NepTime({ color: 'black', bgColor: 'white', format: 'hh-mm-ss', elementId: 'nepali-time-hh-mm-ss' });
        NepTime({ color: 'black', bgColor: 'white', format: 'hh-mm', elementId: 'nepali-time-hh-mm' });
        NepTime({ color: 'black', bgColor: 'white', format: 'HH-MM-SS', elementId: 'nepali-time-HH-MM-SS' });
        NepTime({ color: 'black', bgColor: 'white', format: 'HH-MM', elementId: 'nepali-time-HH-MM' });
    </script>
</body>
</html>
```

### React Usage

To use `nepTime` in a React project:

1. **Import `nepTime`** and call it inside a `useEffect` hook to ensure it runs after the component mounts.
2. **Add a div with the corresponding ID** where you want the time to display.

```jsx
import React, { useEffect } from 'react';
import NepTime from 'neptime';

const NepaliTimeComponent = () => {
    useEffect(() => {
        NepTime({ color: 'black', bgColor: 'white', format: 'hh-mm-ss', elementId: 'nepali-time-hh-mm-ss' });
        NepTime({ color: 'black', bgColor: 'white', format: 'hh-mm', elementId: 'nepali-time-hh-mm' });
        NepTime({ color: 'black', bgColor: 'white', format: 'HH-MM-SS', elementId: 'nepali-time-HH-MM-SS' });
        NepTime({ color: 'black', bgColor: 'white', format: 'HH-MM', elementId: 'nepali-time-HH-MM' });
    }, []);

    return (
        <div>
            <h2>Time in Different Formats</h2>
            <p>hh-mm-ss (Nepali): <span id="nepali-time-hh-mm-ss"></span></p>
            <p>hh-mm (Nepali): <span id="nepali-time-hh-mm"></span></p>
            <p>HH-MM-SS (English): <span id="nepali-time-HH-MM-SS"></span></p>
            <p>HH-MM (English): <span id="nepali-time-HH-MM"></span></p>
        </div>
    );
};

export default NepaliTimeComponent;
```

## Options

The `NepTime` function accepts an options object to customize the appearance and format of the time display.

| Option     | Type   | Default       | Description                                                        |
|------------|--------|---------------|--------------------------------------------------------------------|
| `color`    | string | `'black'`     | Sets the text color of the displayed time.                        |
| `bgColor`  | string | `'white'`     | Sets the background color of the displayed time.                  |
| `format`   | string | `'hh-mm-ss'`  | Defines the time format (`hh-mm-ss`, `hh-mm`, `HH-MM-SS`, `HH-MM`). |
| `elementId`| string | `'nepali-time'` | The ID of the HTML element where time should be displayed. |

- **Lowercase (`hh`)** formats display time in Nepali numerals.
- **Uppercase (`HH`)** formats display time in English numerals.
- **12-hour format (`hh`)** includes AM/PM.
- **24-hour format (`HH`)** does not include AM/PM.

### Example of Different Formats:
```js
NepTime({ format: 'hh-mm-ss' }); // १२:३०:४५ (Nepali, 12-hour AM/PM)
NepTime({ format: 'hh-mm' });    // १२:३० (Nepali, 12-hour AM/PM)
NepTime({ format: 'HH-MM-SS' }); // 12:30:45 (English, 24-hour)
NepTime({ format: 'HH-MM' });    // 12:30 (English, 24-hour)
```
