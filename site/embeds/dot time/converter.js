function timeToDots() {
    const date = new Date();
    const numIndex = (input, index) => Number(String(input)[index] | 0);
    const time = {
        hours: date.getHours() % 12,
        minutes: date.getMinutes() > 9 ? [numIndex(date.getMinutes(), 0), numIndex(date.getMinutes(), 1)] : [0, date.getMinutes()]
    };

    const convertedTime = {
        hours: [],
        minutes: {
            tens: [],
            units: []
        }
    };
    for (let i = 0; i < 12; i++) {
        convertedTime.hours.push(time.hours >= i);
        if (i < 6)
            convertedTime.minutes.tens.push(time.minutes[0] >= i);
        if (i < 10)
            convertedTime.minutes.units.push(time.minutes[1] >= i);
    }
    return {
        time,
        convertedTime,
        pm: date.getHours() > 12
    };
}