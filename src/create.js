import {makeAsciiArt} from "./art.js";
import {Fill} from "./fill.js";



var questionList = [];
export class Create {
    /**
     * @param {HTMLElement} element 
     */
    constructor(element) {
        this.element = element;
    }

    render() {
        this.element.innerHTML = `
            Hi! You can create a questionaire here<br><br>

            <table style="">
                <tr>
                    <td><label for="question">Question</label></td>
                    <td><input type="text" name="question" value="" id="question"></td>
                </tr>
                <tr>
                    <td></td>
                    <td><button id="btnCreate">Create Questionaire!</button></td>
                </tr>
            </table>
            <br>

            
        `;

        this.element.querySelector("button").addEventListener("click", ev => {
            // always add `preventDefault` in an event handler. otherwise, the browser
            // will do some default action which usually means submitting the data to the server, 
            // which causes the entire page to reload.
            // since we have no server, we don't want that :-)
            ev.preventDefault();
            const questionText = this.element.querySelector("input[id=question]").value;
            questionList.push(questionText);
            localStorage.setItem("qList", JSON.stringify(questionList));
          
            var fill = new Fill(this.element);
            fill.drawQuestion(questionList);
        })
    }
}