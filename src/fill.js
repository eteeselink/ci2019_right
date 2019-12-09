var question = 'Do you like pizza?';
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
            <button id="btn">Send!</button>
        `;}

        this.element.querySelector("button").addEventListener("click", ev => {
            // always add `preventDefault` in an event handler. otherwise, the browser
            // will do some default action which usually means submitting the data to the server, 
            // which causes the entire page to reload.
            // since we have no server, we don't want that :-)
            ev.preventDefault();

            const answer = this.element.querySelector("input[name=pizza]:checked").value;
            
            answerList.push(answer);


            console.log(answerList);
        })
    }
    
}