export function getDateString(dateInMs) {
    const date = new Date(+dateInMs);
    
    return `${date.getHours()}:${date.getMinutes()} ${date.getDay()}/${date.getMonth() + 1}/${date.getFullYear()}`;
}