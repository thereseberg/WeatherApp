function GetDateMonth(UNIX_timestamp){
    var a = new Date(UNIX_timestamp * 1000);
    var months = ['jan','feb','mars','april','maj','juni','juli','aug','sept','okt','nov','dec'];
    var month = months[a.getMonth()];
    var date = a.getDate();
    var time = date + ' ' + month;
    return time;
}

export default GetDateMonth;