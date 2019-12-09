import {makeAsciiArt} from "./art.js";

export class Poll {
    /**
     * @param {HTMLElement} element 
     */
    constructor(element) {
        this.element = element;
    }

    render(name) {
        this.element.innerHTML = `
            Hi! What's the best pizza?<br>
            <input type="radio" name="pizza" value="Margherita" id="radio1">
            <label for="radio1">Margherita</label><br>

            <input type="radio" name="pizza" value="Shoarma" id="radio2">
            <label for="radio2">Shoarma</label><br>

            <input type="radio" name="pizza" value="Lahmacun" id="radio3">
            <label for="radio3">Lahmacun</label><br>

            <button id="btn">Vote!</button>
        `;

        this.element.querySelector("button").addEventListener("click", ev => {
            // always add `preventDefault` in an event handler. otherwise, the browser
            // will do some default action which usually means submitting the data to the server, 
            // which causes the entire page to reload.
            // since we have no server, we don't want that :-)
            ev.preventDefault();

            const bestPizza = this.element.querySelector("input[name=pizza]:checked").value;
            this.element.innerHTML = `<p>Indeed ${name}, Pizza ${bestPizza} is by far the best.</p><div id="pizza"></div>`;
            
            makeAsciiArt(this.element.querySelector("#pizza"));
			
			//var result = ["Yes", "No"];
            answerList.forEach(res => {
                this.element.innerHTML += `<p>Indeed ${name}, answer: ${res} </p>`;
                
            });

// Load google charts
google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart_CI);

// Draw the chart and set the chart values

let yesCnt=0;
let noCnt=0;


for(var i = 0; i<answerList.length;++i)
{
    if(answerList[i]==='yes'){
        yesCnt++;
    }
    if(answerList[i]==='no'){
        noCnt++;
    }
}
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