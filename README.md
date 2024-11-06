# nptime
An npm module for nepali time which show your current time in nepali format (font)
nptime is a lightweight npm module for displaying the current time in Nepali numerals. You can customize the text color, background color, and clock format (12-hour or 24-hour) to fit seamlessly with your web project’s design.

#  Installation
```bash
npm install nptime

### Example HTML Usage

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

