
import {makeAsciiArt} from "./art.js";
var answerList = [];
export class Fill {
    
    /**
     * @param {HTMLElement} element 
     */
    constructor(element) {
        this.element = element;
    }


    drawQuestion(questionList){
        for (var i = 0; i < questionList.length; i++){
            
        this.element.innerHTML = `
            ${questionList[i]}<br>
            <input type="radio" name="pizza" value="Yes" id="radio1">
            <label for="radio1">Yes</label><br>
            <input type="radio" name="pizza" value="No" id="radio2">
            <label for="radio2">No</label><br>
            <button id="btn">Submit!</button>
            <button id="btn2">Next!</button>
        `;}
        
        this.element.querySelector("button[id=btn2]").addEventListener("click", ev =>{
            console.log("KAPPA");
            ev.preventDefault();
            answerList.push(this.element.querySelector("input[name=pizza]:checked").value);
            this.drawQuestion(questionList);
        });
        
        this.element.querySelector("button[id=btn]").addEventListener("click", ev => {
            // always add `preventDefault` in an event handler. otherwise, the browser
            // will do some default action which usually means submitting the data to the server, 
            // which causes the entire page to reload.
            // since we have no server, we don't want that :-)
            ev.preventDefault();

            const answer = this.element.querySelector("input[name=pizza]:checked").value;
            
            
            answerList.push(answer);


            answerList.forEach(ans => {
                this.element.innerHTML = `<p>Answer for question <i>${questionList[0]}</i> is  <b>${ans} </b></p>`;
                
            });

            this.element.innerHTML += `<div id="result"></div>`;
         //   makeAsciiArt(this.element.querySelector("#result"));
            console.log(fill.answerList);
       
       
       
       
       
            google.charts.load('current', {'packages':['corechart']});
        google.charts.setOnLoadCallback(drawChart_CI);

// Draw the chart and set the chart values

let yesCnt=0;
let noCnt=0;

console.log(answerList.length);
for(var i = 0; i<answerList.length;++i)
{
    console.log(answerList[i]);
    if(answerList[i]==='Yes'){
        yesCnt++;
    }
    if(answerList[i]==='No'){
        noCnt++;
    }
}

console.log(yesCnt);
//alert(yesCnt);
function drawChart_CI() {
  var data = google.visualization.arrayToDataTable([
  ['Answer', 'count'],
  ['Yes', yesCnt],
  ['No', noCnt]
]);



/*var count = 0;
for(var i = 0; i<myArray.length;++i)
{
    if(myArray[i]==='yes'){
        count++;
    }
}*/

  // Optional; add a title and set the width and height of the chart
  var options = {'title':'Questionnaire Result', 'width':550, 'height':400};

  // Display the chart inside the <div> element with id="piechart"
  var chart = new google.visualization.PieChart(document.getElementById('piechart'));
  chart.draw(data, options);
}

        })
    }
    
}