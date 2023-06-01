export const formatDate = (dateString, time) => {
    const formattedDate = new Date(dateString);
    const date = formattedDate.getDate();
    const month = formattedDate.getMonth();
    const year = formattedDate.getFullYear();

    let result = `${date}/${month+1}/${year}`;
    if(time){
        let hour = formattedDate.getHours();
        if(hour < 10) hour = "0" + hour;
        let minutes = formattedDate.getMinutes();
        if(minutes < 10) minutes = "0" + minutes;

        result += ` ${hour}:${minutes}`;
    }
    return result;
}

