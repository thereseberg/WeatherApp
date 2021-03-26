function GetWeekday(UNIX_timestamp){
    var a = new Date(UNIX_timestamp * 1000);   
    var weekday = new Array(7);
    weekday[0] = "Söndag";
    weekday[1] = "Måndag";
    weekday[2] = "Tisdag";
    weekday[3] = "Onsdag";
    weekday[4] = "Torsdag";
    weekday[5] = "Fredag";
    weekday[6] = "Lördag";

    var day = weekday[a.getDay()];
    return day;
}

export default GetWeekday;