function TimeConverter(UNIX_timestamp){
    var a = new Date(UNIX_timestamp * 1000);
    var months = ['jan','feb','mars','april','maj','juni','juli','aug','sept','okt','nov','dec'];
    var year = a.getFullYear();
    var month = months[a.getMonth()];
    var date = a.getDate();
    var hour = a.getHours();
    var min = a.getMinutes();
    if(min < 10)
    {
        min = '0' + min;
    }
    var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min ;
    return time;
}

export default TimeConverter;