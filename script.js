signs = ["Capricorn", "Aquarius", "Pisces","Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius"];
messages = ["This is the year to become a leader. From this point on life will come with many diffucult and intersting tasks.",
    "this is the year where challenges will present themselves, but you will overcome them",
    "this is the year to agree with other peoples ideas, instead of only listening to your own opinion you add on to it with other ideas",
    "this is the year to embark on many adventures. When challenges present themselves, instead of failing you will find a way to overcome",
    "this is the year where you will have the mosst amount of friends compared to previous years",
    "this is the year where you will become the center of attention, but feel amazing about it",
    "this is the year where you will become the best at everything you do",
    "this is the year where you will always be surrounded by loved ones and find a way to always have a calm environment",
    "this is the year to be strong in every moment even when times are looking tough",
    "this is the year where moments of happiness will never find a way to end",
    "this is the year where you will make decisios benifiting you the most instead of following others",
    "this is the year where you will never be overcome by any emotions and will stay strong",
    "Bad date"];
images =["img/capricorn.png","img/aquarius.png","img/pisces.png","img/aries.png","img/taurus.png","img/gemini.png","img/cancer.png","img/leo.png","img/virgo.png","img/libra.png","img/scorpio.png","img/sagittarius.png"];

function begin() {

    var month = document.getElementById("month").value;

    var day = document.getElementById("day").value;

    var name = document.getElementById("username").value;

    var sign = determineSign(day, month);

    var birthday = determineBirthday(day, month);

    document.getElementById("sign").innerHTML = signs[sign];

    document.getElementById("message").innerHTML = birthday + name + ", " + messages[sign];

    document.getElementById("image").src = images[sign];
}



function determineSign(day,month){
    if(month == 1 && day > 29){
        return 12;
    }
    if(month == 3 && day > 30){
        return 12;
    }
    if(month == 5 && day > 30){
        return 12;
    }
    if(month == 8 && day > 30){
        return 12;
    }
    if(month == 10 && day > 30){
        return 12;
    }

    if((month == 11 && day >= 22) || (month == 0 && day <= 19)){
        return 0;
    }
    if((month == 0 && day >= 20) || (month == 1 && day <= 18)){
        return 1;
    }
    if((month == 1 && day >= 19) || (month == 2 && day <= 20)){
        return 2;
    }
    if((month == 2 && day >= 21) || (month == 3 && day <= 19)){
        return 3;
    }
    if((month == 3 && day >= 20) || (month == 4 && day <= 20)){
        return 4;
    }
    if((month == 4 && day >= 21) || (month == 5 && day <= 20)) {
        return 5;
    }
    if((month == 5 && day >= 21) || (month == 6 && day <= 22)) {
        return 6;
    }
    if((month == 6 && day >= 23) || (month == 7 && day <= 22)){
        return 7;
    }
    if((month == 7 && day >= 23) || (month == 8 && day <= 22)){
        return 8;
    }
    if((month == 8 && day >= 23) || (month == 9 && day <= 22)){
        return 9;
    }
    if((month == 9 && day >= 23) || (month == 10 && day <= 21)){
        return 10;
    }
    if((month == 10 && day >= 22) || (month == 11 && day <=21)){
        return 11;
    }
}

function determineBirthday(userDay, userMonth){
    var birthday = " ";
    var currentDate = new Date();
    var currentMonth = currentDate.getMonth();
    var currentDay = currentDate.getDate();
    if(userDay == currentDay && userMonth == currentMonth){
        birthday = "Happy Birthday! ";
    }
    return birthday;
}


























