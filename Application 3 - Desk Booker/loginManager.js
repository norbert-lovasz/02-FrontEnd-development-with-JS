class userObject {

     logInCredentials = {
        user: "Test",
        password: "Test",
      
    }
     
    constructor(user, password) {
        this.user = user  
        this.password = password     
  
    }
  }

let user1 = new userObject("User1","User1")
let user2 = new userObject("User2","User2")
let user3 = new userObject("User3","User3")
let user4 = new userObject("User4","User4")
let user5 = new userObject("User5","User5")
let user6 = new userObject("User6","User6")

arrayOfUsers = [user1,user2,user3,user4,user5,user6]
  
var isSuccesfullyLogedIn = false
var logedInUser = "No User loged in"

function userLogIn() {
 
        let introducedUserName = document.getElementById('userName').value
        let introducedUserPass = document.getElementById('userPass').value

        for (let users of arrayOfUsers) {
                if (users.user == introducedUserName) {
                    if  (users.password == introducedUserPass) {
                            isSuccesfullyLogedIn = true;
                            logedInUser = users.user; 
                        break
                        }
                       
                    else {
                        document.getElementById("logInStatus").classList.add('logInError')
                        document.getElementById("logInStatus").innerHTML = "Please check password"

                                                               } 
                                                         }
                        
               
                else {
                    document.getElementById("logInStatus").classList.add('logInError')
                    document.getElementById("logInStatus").innerHTML = "User not registered"
                                                      }
                                        }                                                                 

        if (isSuccesfullyLogedIn) {
                document.getElementById("logInStatus").innerHTML = "Login Succesfull"
                document.getElementById("logInStatus").classList.remove('logInError')
                document.getElementById("logInStatus").classList.add('logInSuccesfull')

                $("#logInModal").on("click", 
                setTimeout(function () {$("#logInModal").modal("hide")}, 2000) );

                document.getElementById("menuLogIn").classList.add("hidden")
                document.getElementById("menuSignUp").classList.add("hidden")
                document.getElementById("menuSignOut").classList.remove("hidden")
                document.getElementById("userBox").classList.remove("hidden")
   
                document.getElementById("userBox").innerHTML = "Welcome " + "&nbsp" + logedInUser.bold()+ "&nbsp"   
                // console.log(isSuccesfullyLogedIn)            
                                  }

      

                            }

function signOut() {
        document.getElementById("menuLogIn").classList.remove("hidden")
        document.getElementById("menuSignUp").classList.remove("hidden")
        document.getElementById("menuSignOut").classList.add("hidden")
        document.getElementById("userBox").classList.add("hidden")
        document.getElementById("bookDesk").classList.add("hidden")
        document.getElementById("cancelBooking").classList.add("hidden")

        isSuccesfullyLogedIn = false
        logedInUser = "No User loged in"
                   }

function clearSignInData(){
    document.getElementById("userName").value = ""
    document.getElementById("userPass").value = ""
    document.getElementById("logInStatus").classList.remove('logInSuccesfull')
    document.getElementById("logInStatus").classList.remove('logInError')
    document.getElementById("logInStatus").innerHTML = ""
                           }

function clearSignUpData(){
    document.getElementById("newUserName").value = ""
    document.getElementById("signUpPass1").value = ""
    document.getElementById("signUpPass2").value = ""
    document.getElementById("signUpStatus").classList.remove('logInSuccesfull')
    document.getElementById("signUpStatus").classList.remove('logInError')
    document.getElementById("signUpStatus").innerHTML = ""
                          }

function signUp()  {

    let introducedUserName = document.getElementById('newUserName').value
    let introducedUserPass = document.getElementById('signUpPass1').value
    let introducedUserPassConfirmation = document.getElementById('signUpPass2').value 

    function isSignUpValid(introducedUserName,introducedUserPass,introducedUserPassConfirmation) {
            let isValid = true
            for (let users of arrayOfUsers) {
                if (users.user == introducedUserName) {
                     isValid = false
                     document.getElementById("signUpStatus").innerHTML = "User already registered"
                     document.getElementById("signUpStatus").classList.add('logInError')
                break                                 }
                                            } 

            if (introducedUserPass != introducedUserPassConfirmation) {
                isValid = false   
                document.getElementById("signUpStatus").innerHTML = "Passwords do not match"
                document.getElementById("signUpStatus").classList.add('logInError')
                console.log("condition was checked")
               
        }

            if ((introducedUserName = "") || (introducedUserPass = "")) {
                isValid = false        }
            return isValid 
                                                                                                 }

if (isSignUpValid(introducedUserName,introducedUserPass,introducedUserPassConfirmation)){   
          let newUser = new userObject(introducedUserName,introducedUserPass)
          arrayOfUsers.push(newUser)
          document.getElementById("signUpStatus").innerHTML = "Sign up for " + newUser.user.bold() +" was succesfull. You can now log in."
          document.getElementById("signUpStatus").classList.remove('logInError')
          document.getElementById("signUpStatus").classList.add('logInSuccesfull')
                                                                                        }        
                   }

