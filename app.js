var playing = false;
var score;
var action;
var time_rem;
var correct_ans;
document.getElementById('start_reset').onclick = 
function(){
if(playing == true){
location.reload() //reloads the page
}
else{
playing = true;
score=0;
document.getElementById('instructions').innerHTML = "Click on the correct answer";
document.getElementById('score_val').innerHTML = score;
document.getElementById('timer').style.display = "block";
time_rem = 60;
document.getElementById('timer_val').innerHTML = time_rem;
document.getElementById('game_over').style.display ="none";
document.getElementById('start_reset').innerHTML = "RESET";
start_count();
Q_A();
}
}

for(let j=1;j<=4;j++){
    document.getElementById('box'+j).onclick = 
function(){
    if(playing == true){
     if(this.innerHTML == correct_ans){

        score++;
        document.getElementById('score_val').innerHTML = score;

        document.getElementById('wrong').style.display = "none";
        
        document.getElementById('correct').style.display = "block";
        
        setTimeout(function(){
            document.getElementById('correct').style.display = "none";
        }, 1000); 
        Q_A();
     }
     else{
       
        document.getElementById('correct').style.display = "none";
        document.getElementById('wrong').style.display = "block";
        setTimeout(function(){
            document.getElementById('wrong').style.display = "none";
        }, 1000);
     }
    }
}

}






function start_count(){
action = setInterval(function(){
time_rem -=1;
document.getElementById('timer_val').innerHTML = time_rem;
if(time_rem == 0){
    clearInterval(action);
    document.getElementById('game_over').style.display = "block";
    document.getElementById('game_over').innerHTML = "<p>GAME OVER!! <br> YOUR SCORE IS: " + score + ".</p>";
    document.getElementById('timer').style.display = "none";
    document.getElementById('correct').style.display = "none";
    document.getElementById('wrong').style.display = "none";
    playing = false;
    document.getElementById('start_reset').innerHTML = "START"
}
}, 1000)
}

function Q_A(){
var x = 1+Math.round(9*Math.random());
var y = 1+Math.round(9*Math.random());
correct_ans = x*y;
document.getElementById('question').innerHTML = x + "x" + y;
var correct_pos = 1+Math.round(3*Math.random());
document.getElementById('box'+correct_pos).innerHTML = correct_ans;
var answers = [correct_ans];
for(let i =1 ; i<=4; i++){
    if(i != correct_pos){
        var wrong_ans;
        do{
            wrong_ans = (1+Math.round(9*Math.random()))*(1+Math.round(9*Math.random()));
        }
        while(answers.indexOf(wrong_ans)> -1) 
           document.getElementById('box'+i).innerHTML = wrong_ans;
        answers.push(wrong_ans)
    }
}

}







