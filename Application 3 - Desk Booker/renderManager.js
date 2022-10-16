class CalendarObject {

  constructor(inputDate) {
    this.date = inputDate

     this.isTableAvailable = {
      1: true,
      2: true,
      3: true,
      4: true,
      5: true,
      6: true,
      7: true,
      8: true 
                             }
  
     this.usedBy = {
      1: 'Free',
      2: 'Free',
      3: 'Free',
      4: 'Free',
      5: 'Free',
      6: 'Free',
      7: 'Free',
      8: 'Free' 
                   }
                    }
                    }


var loadUpDate = new CalendarObject("2022-07-12")
arrayOfDates = [loadUpDate]

getDate()
clickElement()

function getDate() {
    var inputDate = document.getElementById('datePicker').value
     
    // let isDateInArray = false;
    // for (calendarDates of arrayOfDates) {   
    //    if (calendarDates.date == inputDate) {
    //     isDateInArray = true} 
    //     console.log(isDateInArray)      
    //                                    }                                  
  
    createCalendarObject(inputDate)
                   }

function createCalendarObject(date) {
     
   
      selectedDate = new CalendarObject(date)
      
     
       let duplicate = false;

      for (elements of arrayOfDates) {
          if (elements.date == selectedDate.date) {
              duplicate = true   }
                                      }

      if (!duplicate) {
          arrayOfDates.push(selectedDate)
                      }
 
      officeRender()
                                    }

function officeRender() {
      let selectedDate = document.getElementById('datePicker')
      selectedDate=selectedDate.value
      clearContent()
    
      for (elements of arrayOfDates){
        if (elements.date == selectedDate) {
            let count = 0
            
            let tableUser = Object.values(elements.usedBy)
            let isTableAvailable = Object.values(elements)[1]
            let tableNumber = Object.keys(elements.isTableAvailable)               
                                      
            for (let i = 1; i<= Object.keys(elements.isTableAvailable).length; i++) {             
                    
                  nodeToAdd = oneTableRender(tableNumber[i-1],isTableAvailable[i],tableUser[i-1])
                                       
                  if (count == 3) {renderPlaceholer(3) }
                  if (count == 7) {renderPlaceholer(7) }
        
                  if ((Object.keys(elements.isTableAvailable)[i-1] == 1) || (Object.keys(elements.isTableAvailable)[i-1] == 2) || (Object.keys(elements.isTableAvailable)[i-1] == 3) || (Object.keys(elements.isTableAvailable)[i-1] == 7)) {
                                  document.getElementById("firstline").appendChild(nodeToAdd)
                                                                      }
                  else {
                        document.getElementById("secondline").appendChild(nodeToAdd)}                   
                        count += 1; 
                                                                                      } 
                                          }
      // clickElement()
                                    } 

      function oneTableRender(tableNumber,isTableAvailable,tableUser) {      
          let nodeToAdd = document.createElement('div')
          if (isTableAvailable == true) {
                nodeToAdd.className = "masaLibera"}
          else {
                nodeToAdd.className = "masaOcupata"};
          
          let formatId = "#" + tableNumber;
          nodeToAdd.id = formatId;

          let topLine = document.createElement("p")
              topLine.className = "topLine"
              topLine.textContent = "#" + tableNumber

          nodeToAdd.appendChild(topLine)

          let bottomLine = document.createElement("p")
              bottomLine.className = "bottomLine"
              bottomLine.textContent = tableUser 
              nodeToAdd.appendChild(bottomLine)
    
         return nodeToAdd;
                                                                      }

      function renderPlaceholer(count) {
          let nodeToAdd = document.createElement('div')
          nodeToAdd.className = "placeholder"
                                  
          if (count == 3) {
             document.getElementById("firstline").appendChild(nodeToAdd)}
          if (count == 7) {
             document.getElementById("secondline").appendChild(nodeToAdd)}
                                       }

      function clearContent(){
          document.querySelectorAll(".masaLibera, .masaOcupata, .placeholder, .topLine, .bottomLine")
          
          .forEach(elem => elem.remove());
                             }
                           
      clickElement()                       
                        }

function clickElement() {

  document.querySelectorAll('.masaOcupata,.masaLibera').forEach(
    (e) => {
      e.onclick = (e) => {
        // console.log(e.currentTarget.id)
        let currentID = e.currentTarget.id
        let currentClass = e.currentTarget.className
        
        let selectedElement = document.getElementById(e.currentTarget.id)
        // console.log(selectedElement)
        selectedElement.classList.toggle("masaSelectata")

        // Open modal   
        var clicked = document.getElementById(currentID)
        clicked.addEventListener("click", unselectTable())

        function unselectTable() {
          
          jQuery(function ($) {
            $('#deskModal').modal('toggle')
            $('#deskModal').on('hidden.bs.modal', function () {
              selectedElement.classList.remove("masaSelectata")  })
          })

          document.getElementById("bookDesk").classList.add("hidden")
          document.getElementById("cancelBooking").classList.add("hidden")


                                 }          
        var inputDate = document.getElementById('datePicker').value                                

        generateDeskModalInfo(currentID,inputDate,isSuccesfullyLogedIn) 
       
        
                         }
           }
                                                               );
                        }

function generateDeskModalInfo(deskNr,selectedDate,isLogedIn){       

      generateHeader()
      
      if (isLogedIn == false) {
          generateGuestContent()
                              }
      else {
          generateUserContent()
           }                        
      

      function generateHeader(){
       
          document.querySelectorAll(".greenCircle, .redCircle").forEach(elem => elem.remove());
          document.querySelectorAll(".greenRectangle, .redRectangle").forEach(elem => elem.remove());

          searchKey = deskNr.charAt(deskNr.length-1)
     
          let numberToAppend = document.createElement("div")
          numberToAppend.textContent = deskNr

          let nameToAppend = document.createElement("p")
          

         for (elements of arrayOfDates){    
            if (elements.date == selectedDate) {
                        
            isSelectedTableAvailable = Object.values(elements.isTableAvailable)[searchKey-1]
        
            nameToAppend.textContent = Object.values(elements.usedBy)[searchKey-1]
            nameToAppend.className = "tableModalUser"
            var reservationMadeBy = Object.values(elements.usedBy)[searchKey-1]
            // console.log(reservationMadeBy)
            
            if (isSelectedTableAvailable){
                numberToAppend.className = "greenCircle"
                nameToAppend.className = "greenRectangle"  
                statusMessage = "Desk can be booked"             
              }
            else {
                numberToAppend.className = "redCircle"
                nameToAppend.className = "redRectangle"
                statusMessage = "Desk is booked"
              }                                 
        
                                           }
                                    }

          document.getElementById('statusCircle').appendChild(numberToAppend)   
          document.getElementById('tableModalUser').appendChild(nameToAppend)   

          return reservationMadeBy
                               }

      function generateGuestContent(){   
                 
          document.querySelectorAll(".modalContent").forEach(elem => elem.remove());
          // document.getElementById("bookDesk").classList.add("hidden")
          // document.getElementById("cancelBooking").classList.add("hidden")
        
         
              pToAppend = document.createElement("p")
              pToAppend.className = "modalContent"
              pToAppend.innerHTML = "Selected date: " + "&nbsp" + selectedDate.bold()
              document.getElementById('tableModalContent').appendChild(pToAppend)   
             
              pToAppend = document.createElement("p")
              pToAppend.className = "modalContent"
              pToAppend.innerHTML = "Status: " + "&nbsp" + statusMessage.bold()
              document.getElementById('tableModalContent').appendChild(pToAppend)   
             
              pToAppend = document.createElement("p")
              pToAppend.className = "modalContent"
              pToAppend.innerHTML = "For managing reservations please log in."
              document.getElementById('tableModalContent').appendChild(pToAppend)          
              
                                     }
 
      function generateUserContent(){
        document.querySelectorAll(".modalContent").forEach(elem => elem.remove());
       

        if (isSuccesfullyLogedIn == true) {
                let reservationMadeBy = generateHeader()
                // console.log(reservationMadeBy)
              
                if (reservationMadeBy == "Free") {
                  document.getElementById("bookDesk").classList.remove("hidden")
                  // document.getElementById("cancelBooking").classList.add("hidden")
                                                 }

                if (reservationMadeBy == logedInUser) {
                  document.getElementById("bookDesk").classList.add("hidden")
                  document.getElementById("cancelBooking").classList.remove("hidden")                  
                                                      }      
                else {
                  document.getElementById("cancelBooking").classList.add("hidden")


                }
                                                      

                                          }        
      
       
            pToAppend = document.createElement("p")
            pToAppend.className = "modalContent"
            pToAppend.innerHTML = "Selected date: " + "&nbsp" + selectedDate.bold()
            document.getElementById('tableModalContent').appendChild(pToAppend)   
           
            pToAppend = document.createElement("p")
            pToAppend.className = "modalContent"
            pToAppend.innerHTML = "Status: " + "&nbsp" + statusMessage.bold()
            document.getElementById('tableModalContent').appendChild(pToAppend)   
           
           
         
            


                                    }                               

                                                       }

function bookDesk() {
    inputDate = document.getElementById('datePicker').value
    // console.log(logedInUser)  
  
    let deskNr = document.getElementById("statusCircle").textContent;
    searchKey = deskNr.charAt(deskNr.length-1)
  
    for (elements of arrayOfDates){    
        if (elements.date == inputDate) {
                     
          elements.usedBy[searchKey] = logedInUser
          elements.isTableAvailable[searchKey] = false
                                        }
                                  }

    const button = document.getElementById("bookDesk");
    button.addEventListener("click", closeModal);     
    console.log(selectedDate)                     

    generateDeskModalInfo(deskNr,inputDate,isSuccesfullyLogedIn)

    function closeModal(){
          $("#deskModal").on("click", 
          setTimeout(function () {$("#deskModal").modal("hide")}, 2000) );
                         }
    
    officeRender()

                    }

function cancelDesk() {
  console.log("cancelDesk has been called")
  inputDate = document.getElementById('datePicker').value
  // console.log(logedInUser)  

  let deskNr = document.getElementById("statusCircle").textContent;
  searchKey = deskNr.charAt(deskNr.length-1)

  for (elements of arrayOfDates){    
      if (elements.date == inputDate) {
                   
        elements.usedBy[searchKey] = "Free"
        elements.isTableAvailable[searchKey] = true
                                      }
                                }

  const button = document.getElementById("cancelBooking");
  button.addEventListener("click", closeModal);                          

  generateDeskModalInfo(deskNr,inputDate,isSuccesfullyLogedIn)

  function closeModal(){
        $("#deskModal").on("click", 
        setTimeout(function () {$("#deskModal").modal("hide")}, 2000) );
                       }
  
  officeRender()
  
}

