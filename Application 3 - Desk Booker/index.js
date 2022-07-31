class CalendarObject {

  isTableAvailable = {
    1: true,
    2: true,
    3: false,
    4: false,
    5: false,
    6: false,
    7: true,
    8: true
  }

  usedBy = {
    1: 'Free',
    2: 'Free',
    3: 'Ioana',
    4: 'Alexandra',
    5: 'Moni',
    6: 'Alex',
    7: 'Free',
    8: 'Free'
  }

  constructor(date) {
    this.date = date

    // console.log(this.date.isTableAvailable)



  }
}

let loadUpDate = new CalendarObject("2022-07-12")

let loadUpDate2 = new CalendarObject("2022-07-13")
  loadUpDate2.isTableAvailable[2]=true
  loadUpDate2.usedBy[2]="Free"
  loadUpDate2.isTableAvailable[4]=true
  loadUpDate2.usedBy[4]="Free"


let loadUpDate3 = new CalendarObject("2022-07-14")
  loadUpDate3.isTableAvailable[1]=false
  loadUpDate3.usedBy[1]="Ioana"
  loadUpDate3.isTableAvailable[3]=false
  loadUpDate3.usedBy[3]="Krisztina"
  loadUpDate3.isTableAvailable[8]=false
  loadUpDate3.usedBy[8]="Andi"


arrayOfDates = [loadUpDate,loadUpDate2,loadUpDate3]



function renderPlaceholer(count) {
   let nodeToAdd = document.createElement('div')
   nodeToAdd.className = "placeholder"


    if (count == 3) {

      document.getElementById("firstline").appendChild(nodeToAdd)
    }
    if (count == 7) {

      document.getElementById("secondline").appendChild(nodeToAdd)
    }
}


function clearContent(){
    document.querySelectorAll(".masaLibera, .masaOcupata, .placeholder, .topLine, .bottomLine")
    .forEach(elem => elem.remove());

}


function officeRender() {
 

  
  let selectedDate = document.getElementById('datePicker')
  selectedDate=selectedDate.value
  clearContent()
  
  
  // console.log(selectedDate)

    for (elements of arrayOfDates){

        if (elements.date == selectedDate) {
            let count = 0
            // console.log(elements)
            console.log(Object.keys(elements.isTableAvailable))
            // console.log(Object.values(elements)[0])
            // console.log(Object.values(elements)[1])
                                        
            let tableStatus = Object.values(elements)[0]
            let tableUser = Object.values(elements)[1]
            let isTableAvailable = Object.keys(elements.isTableAvailable)
            let tableNumber = Object.keys(elements.isTableAvailable)
            // console.log("Tablestatus")
            // console.log(tableStatus)
            // console.log(isTableAvailable)
                 
                                       
            for (let i = 1; i<= Object.keys(elements.isTableAvailable).length; i++) {
                       
              // console.log(Object.keys(elements.isTableAvailable).length)
              // console.log(i)
              // console.log(tableStatus[i])
              // console.log(tableUser[i])
              
                  nodeToAdd = oneTableRender(tableNumber[i-1],isTableAvailable[i],tableStatus[i],tableUser[i])


               
                                       
                  if (count == 3) {renderPlaceholer(3) }
                  if (count == 7) {renderPlaceholer(7) }
        
                  if ((Object.keys(elements.isTableAvailable)[i-1] == 1) || (Object.keys(elements.isTableAvailable)[i-1] == 2) || (Object.keys(elements.isTableAvailable)[i-1] == 3) || (Object.keys(elements.isTableAvailable)[i-1] == 7)) {
                                  document.getElementById("firstline").appendChild(nodeToAdd)
                                  // console.log("If statement has been reached")
                                     }
                  else {
                        document.getElementById("secondline").appendChild(nodeToAdd)}


                       






                        count += 1; 
        }}
      
        clickElement()
  
      
      } 


function oneTableRender(tableNumber,isTableAvailable,tableStatus,tableUser) {

      //  console.log('Funtion OneTablerender has been called')
      
          let nodeToAdd = document.createElement('div')

          // nodeToAdd.textContent = tableUser;
    
    
           if (tableStatus == true) {
                nodeToAdd.className = "masaLibera"}
          else {
                nodeToAdd.className = "masaOcupata"};
          
          let formatId = "ID" + tableNumber;
          nodeToAdd.id = formatId;


          let topLine = document.createElement("div")
              topLine.className = "topLine"
              topLine.textContent = "#" + tableNumber

            nodeToAdd.appendChild(topLine)

          let bottomLine = document.createElement("div")
              bottomLine.className = "bottomLine"
              bottomLine.textContent = tableUser 
              nodeToAdd.appendChild(bottomLine)

             
    
         return nodeToAdd;
    }


}


function clickElement() {

  // Get paragraph ID

  // console.log("Click element is running")



  document.querySelectorAll('.masaOcupata,.masaLibera').forEach(
    (e) => {
      e.onclick = (e) => {
         //  console.log('currentID is listed below:')
        // console.log(e.currentTarget.id)
        let currentID = e.currentTarget.id
        let currentClass = e.currentTarget.className
        
        console.log(e.currentTarget.className)
        console.log(currentClass)


        // toggle selected element class   



        let selectedElement = document.getElementById(e.currentTarget.id)
        // console.log('selectedElement is listed below:')
        // console.log(selectedElement)
        selectedElement.classList.toggle("masaSelectata")

        // Open modal   

        var clicked = document.getElementById(currentID)
        clicked.addEventListener("click", openModal())

        function openModal() {
          // console.log("function has been called")
          // var clicked = document.getElementById("tableModal")

          jQuery(function ($) {
            $('#deskModal').modal('toggle')
            $('#deskModal').on('hidden.bs.modal', function () {
              selectedElement.classList.remove("masaSelectata")

              
            })
          })

        }
    

        console.log(currentID)

        displayDeskInfo(currentID,currentClass) 
       
        
      }
    });
}



function displayDeskInfo(deskNr,currentClass){

     // console.log('displayDeskInfo has been called')

       document.querySelectorAll(".greenCircle, .redCircle").forEach(elem => elem.remove());

  
       // console.log(document.querySelectorAll("statusCircle"))

  
          
       let numberToAppend = document.createElement("div")
    
       numberToAppend.textContent = deskNr

      // numberToAppend.className = "deskNumber"

      console.log(currentClass)

         if (currentClass == "masaLibera") {

             numberToAppend.className = "greenCircle"    }

         if (currentClass == "masaOcupata") {

             numberToAppend.className = "redCircle"  }

      document.getElementById('statusCircle').appendChild(numberToAppend)

    //  return numberToAppend  

      
}


function getDate() {
  
  d = document.getElementById('datePicker')
  // console.log(d.value)
  // creCalendar(d.value)
  date = d.value
  // date = String(d.value)
  createCalendarObject(date)

}


function createCalendarObject(date) {
  

  selectedDate = new CalendarObject(date)

  // console.log(arrayOfDates)
  // console.log(selectedDate)

      let duplicate = false;


       for (elements of arrayOfDates) {

          if (elements.date == selectedDate.date) {
              duplicate = true
          
      // console.log(elements.date)
      // console.log(typeof(elements.date))
      // console.log(selectedDate.date)
      // console.log(typeof(selectedDate.date))
      // console.log("check if elements.x.y work: " + elements.isTableAvailable[1])
    }
    
  }

  if (duplicate == false) {
    arrayOfDates.push(selectedDate)
    // console.log(selectedDate)
    // console.log(arrayOfDates)
  }

  // date = date.replace("-","")
  // date = date.replace("-","")
  // console.log(date)

officeRender()

}





// function renderTableModal() {






// }






getDate()

// displayDeskInfo(2)

// function setStatus()