function greeting(greetinghandler,name){
    greetinghandler(name);
}

function greetingMorning(name){
    console.log('Good morning',name);
}

function greetingEvening(name){
    console.log('Good evening',name);
}

function greetingNight(name){
    console.log('Good night',name);
}

greeting(greetingMorning,'Amjad');
// Good morning Amjad
greeting(greetingEvening,'Ershad');
// Good evening Ershad
greeting(greetingMorning,'Rahat');
// Good morning Rahat
greeting(greetingNight,'Sabuj');
// Good night Sabuj