import {makeAsciiArt} from "./art.js";
    var question = 'Do you like pizza?';
    var answerList = [];
    
    export class Fill{
    
    /**
     * @param {HTMLElement} element 
     */
    constructor(element) {
        this.element = element;
    }


    drawQuestion(){
        this.element.innerHTML = `
            ${question}<br>
            <input type="radio" name="pizza" value="Yes" id="radio1">
            <label for="radio1">Yes</label><br>
            <input type="radio" name="pizza" value="No" id="radio2">
            <label for="radio2">No</label><br>
            <button id="btn">Send!</button>
        `;

        this.element.querySelector("button").addEventListener("click", ev => {
            // always add `preventDefault` in an event handler. otherwise, the browser
            // will do some default action which usually means submitting the data to the server, 
            // which causes the entire page to reload.
            // since we have no server, we don't want that :-)
            ev.preventDefault();

            const answer = this.element.querySelector("input[name=pizza]:checked").value;
            
            answerList.push(answer);

            answerList.forEach(ans => {
                this.element.innerHTML = `<p>Answer for question <i>${question}</i> is  <b>${ans} </b></p>`;
                
            });

            this.element.innerHTML += `<div id="result"></div>`;
            makeAsciiArt(this.element.querySelector("#result"));
        })
    }
}