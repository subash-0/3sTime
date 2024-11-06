# nptime
An npm module for nepali time which show your current time in nepali format (font)
nptime is a lightweight npm module for displaying the current time in Nepali numerals. You can customize the text color, background color, and clock format (12-hour or 24-hour) to fit seamlessly with your web project’s design.

#  Installation
```bash
npm install nptime

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
    <div id="nepali-time"></div>

    <script type="module">
        import { npTime } from 'nptime';

        npTime({
            color: 'black',
            bgColor: 'white',
            clcFormat: '24'
        });
    </script>
</body>
</html>

```
### React Usage

To use `nptime` in a React project:

1. **Import `npTime`** and call it inside a `useEffect` hook to ensure it runs after the component mounts.
2. **Add a div with the ID `nepali-time`** where you want the time to display.

```jsx
import React, { useEffect } from 'react';
import { npTime } from 'nptime';

const NepaliTimeComponent = () => {
    useEffect(() => {
        npTime({
            color: 'black',
            bgColor: 'white',
            clcFormat: '24'
        });
    }, []);

    return <div id="nepali-time"></div>;
};

export default NepaliTimeComponent;
```
## Options

The `npTime` function accepts an options object to customize the appearance and format of the time display.

| Option      | Type   | Default   | Description                                                      |
|-------------|--------|-----------|------------------------------------------------------------------|
| `color`     | string | `'black'` | Sets the text color of the displayed time.                       |
| `bgColor`   | string | `'white'` | Sets the background color of the displayed time.                 |
| `clcFormat` | string | `'24'`    | Sets clock format: `'24'` for 24-hour, `'12'` for 12-hour.      |
