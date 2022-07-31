const serverTask = [
    {
        "content": "Ioana's Reminder"
    },
    {
        "content": "Anca's Reminder"
    },
    {
        "content": "Norbert's reminder"
    },
    {
        "content": "Leons's reminder"
    }
];

const completedServerTasks = [
    {
        "content": "None"
    }    
];


render()
clickElement()


// readInput() - Reads input from #reminder-input
function readInput() {
    let inputValue = document.getElementById('reminder-input').value
   
    // console.log("See 'inputValue' from textbox below:")
    // console.log(inputValue)
   
    return inputValue;
}


// adnote () - Adds readed value from #reminder-input to the array
function addNode() {

clickElement()

    // returns variable inputValue   
         inputValue = readInput();
         
    
    // append append inputValue to serverTask
         valueToAdd = {
        "content": inputValue}
    serverTask.push(valueToAdd)
       
    // console.log("See data from 'serverTask' below:")
    // console.log(serverTask)
    // console.log("See type of 'serverTask' below:")
    // console.log(typeof serverTask)


        renderData(); }


 // render() takes elements of array and creates DOM elements accordingly       
function render() {

    for (let element of serverTask) {
       
        // let nodeToAdd = document.createElement('p')
        // nodeToAdd.textContent = element.content;
        
        // nodeToAdd.className = "reminder-element";
        // let formatId = element.content.toLowerCase();
        // formatId = formatId.replace(" ", "-");
        // nodeToAdd.id = formatId;
       
        
        // document.body.appendChild(nodeToAdd)


   let nodeToAdd = document.createElement('p')
        nodeToAdd.textContent = element.content;
        
        nodeToAdd.className = "reminder-element";
        let formatId = element.content.toLowerCase();
        formatId = formatId.replace(" ", "-");
        nodeToAdd.id = formatId;
       
        
        document.getElementById("renderZone").appendChild(nodeToAdd)
        // console.log(getElementById("renderZone"))


    
    }
    
    clickElement()

}      

// renderDataTest() - clears div #renderZone, repopulates zone with elements from array
function renderData() {

    //clear div #renderZone
    document.querySelectorAll(".reminder-element")
    .forEach(elem => elem.remove());

    // render new array
    render()
}

function clickElement(){

    // Get paragraph ID
    
    document.querySelectorAll('.reminder-element').forEach( 
        (e) => {e.onclick = (e) => {
        // console.log(e.currentTarget.id)
        let currentID = e.currentTarget.id
           console.log('currentID is listed below:')
           console.log(currentID)
       
     // toggle selected element class   
                      
        let selectedElement = document.getElementById(e.currentTarget.id)
            // console.log('selectedElement is listed below:')
            // console.log(selectedElement)
            selectedElement.classList.toggle("selected-element")
      
        
        }});
         }

function removeNode() {
        
   // remove selected elements from serverTask, add to completedServerTasks
             let elementsToHandle = document.getElementsByClassName("selected-element")
                   
               for (let elements of elementsToHandle){
                     valueToHandle = {"content": elements.innerHTML}
                        serverTask.pop(valueToHandle)
                        completedServerTasks.push(valueToHandle)

               }

            //  console.log('elementsToRemove is listed below:')
            //  console.log(elementsToRemove)
            //  console.log('type of elementsToRemove is listed below:')
            //  console.log(typeof elementsToRemove)
             console.log('completedServerTasks is listed below:')
             console.log(completedServerTasks)

             
   // delete selected elements
       document.querySelectorAll(".selected-element")
         .forEach(elem => elem.remove());



        }