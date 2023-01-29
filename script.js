$(document).ready(function (){
    var day = moment().format(' MMMM Do, YYYY ');

    

    var dailyHours = [9, 10, 11, 12, 13, 14, 15, 16, 17];

    $("#day-current").append(day);
  

    for(var i = 0; i < dailyHours.length; i++){
        var recentHour = moment().format('H');

        var RowEl = $("<div class='RowEl'>");
        var formEL = $("<form>");
        var ColEl1 = $("<div class='input-group-prepend hour'>");
        var colEL2 = $("<input class='form-control input'>");
        var colEl3 = $("<button class= 'input-group-append saveBtn' type='submit'>");

        var localValue = localStorage.getItem(dailyHours[i]);
        colEL2.attr("value", localValue);

        ColEl1.attr("id", "time" + dailyHours[i]);
        colEL2.attr("id", dailyHours[i]);
        colEl3.attr("id", "button" + dailyHours[i]);

        var h3El = $("<h3>");
        h3El.text(dailyHours[i] + "am");

        var h4El = $("<h4>");
        h4El.text("Save");

        if (dailyHours[i] >= 12) {
            h3El.text(dailyHours[i] + "pm");

            if(dailyHours[i] >= 13) {
                h3El.text(dailyHours[i] - 12 + "pm");
            };
        };

        ColEl1.append(h3El);
        colEl3.append(h4El);
        formEL.append(ColEl1, colEL2, colEl3);
        RowEl.append(formEL);
        $("#cal").append(RowEl);

        if ((dailyHours[i]) === parseInt(recentHour)){
            ColEl1.attr("class", "input-group-prepend hour present" );
            colEl3.attr("class", "input-group-append saveBtn present");
               
        }else if ((dailyHours[i]) <= parseInt (recentHour)) {
            ColEl1.attr("class", "input-group-prepend hour past");
            colEl3.attr("class", "input-group-append saveBtn past");

        }else if ((dailyHours[i]) >= parseInt(recentHour)){
            ColEl1.attr("class", "input-group-prepend hour future");
            colEl3.attr("class", "input-group-append saveBtn future");
        };


    };
    $("form").on("submit", function(e){
        e.preventDefault();
        

        const time = e.target.querySelector("input").getAttribute("id");
        const text = e.target.querySelector("input").value;
        window.localStorage.setItem(time, text);


    });



});