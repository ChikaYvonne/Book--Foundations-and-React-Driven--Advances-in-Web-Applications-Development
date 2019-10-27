var log = function(output){
    document.getElementById("output").innerHTML = output;
};
    //For illustration, call the function above to log an output
log("Welcome to Chapter 10!");


/*
import log1, {appName, dummyFunction} from './tools';
log1(`Welcome to Chapter 10! The application name is "${appName}".
There is a function that returns "${dummyFunction()}".`)
*/

import log3, {appName, dummyFunction, weatherTag} from './tools';
/*
…
//leave the previous log() statements intact for reference.
*/
//Output Tagged template
log3(weatherTag`The temperature is ${30} degrees centigrade. The day is `);

import log4, {genericFunction} from './tools';
log4(genericFunction(2,3,4,6,8,9,10.5,12));

import log5, {Person} from './tools';
let person1 = new Person("Pius", "Onobhayedo", "Male",1.7);
let person2 = new Person("Mary", "Joseph", "Female", undefined);
person1.firstName = "peter"; //here we have deliberately used lowercase for first letter
person2.firstName = "maria"; //here we have deliberately used lowercase for first letter
log5(`Person 1 is ${person1.getFirstName()} whose height is ${person1.height}. Person 2 is $
{person2.getFirstName()} whose height is ${person2.height}`); //using getFirstName() to get firstName.

import log6, {CustomMath} from './tools';
log6(CustomMath.sqrt(100));
/*
import log7, {User} from './tools';
let user1 = new User("myusername","mypassword","Pius","Onobhayedo","Male",undefined);
log7(`The username of ${user1.firstName} is ${user1.username}`)

new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve("Timeout is over"); //send out a success feedback with data using resolve
        }, 1000) //set timeout for 1000ms i.e. 1second.
    }).then((data) => {
        log7(`${data}`);//This should output "Timeout is over"
    }).catch((error) => {//This will only be reached it the asynchronous function returned a reject statement.
        log7(`${error}`);
    });
    //Let us still maintain the last log statement so that we can illustrate better how the asynchronous call that returns after the timeout does not stop the main execution thread.
import log7, {User} from './tools';      
let user1 = new User("myusername","mypassword","Pius","Onobhayedo","Male",undefined);
log7(`The username of ${user1.firstName} is ${user1.username}`)

*/

new Promise((resolve, reject) => {
    setTimeout(()=>{
        reject("Timeout is over but I am upset. You should not have invoked a timeout in the first place. Hence I am sending a <em>reject</em> instead of a <em>resolve</em>!"); //send out a rejectfeedback
        }, 1000)
    }).then((data) => {
         log7(`${data}`);//This should output "Timeout is over" if resolve("Timeout is over") is invoked
    }).catch((error) => {//This will only be reached it the asynchronous function returned a reject statement.
        log7(`Error message received: ${error}`);
    })
    //Let us still maintain the last log statement so that we can illustrate better how the asynchronous call that returns after the timeout does not stop the main execution thread.
    
import log7, {User} from './tools';
let user1 = new User("myusername","mypassword","Pius","Onobhayedo","Male",undefined);
log7(`The username of ${user1.firstName} is ${user1.username}`)

new Promise((resolve, reject) => {
    setTimeout(()=>{
        reject("Timeout is over but I am upset. You should not have invoked a timeout in the first place. Hence I amsending a <em>reject</em> instead of a <em>resolve</em>!"); //send out a reject feedback
        }, 1000)
    }).then((data) => {
        log(`${data}`);//This should output "Timeout is over"
    }).catch((error) => {//This will only be reached it the asynchronous function returned a reject statement.
        log(`Error message received: ${error}`);
    }).then(() =>{
        log(`This function is executed after success or failure is returned`)
    });

    let url = 'https://jsonplaceholder.typicode.com/users/1'; //Get data for a user with id 1
    fetch(url)
        .then(response => response.json()) //convert data returned to json
        .then(data => log(`Data: Id = ${data.id}, Name = ${data.name}, Email = ${data.email}`)) //use the json data
        .catch(error => log(`Error: ${error}`));
        

//Define the function that will return new Promise that wraps the asynchronous call to setTimeout()
const promiseAwareTimeout = (milliseconds=1000) => { //The function expects milliseconds to be passed. If notpassed, milliseconds parameter defaults to 1000
        return new Promise((resolve, reject) => {
            setTimeout(()=>{
                resolve(`Timeout of ${milliseconds} milliseconds is over`); //send out a success feedback with data usingresolve
            }, milliseconds) //set timeout for passed milliseconds. Defaults to 1000
        });
    }
    //define a function that uses our Promise executor
    const usePromiseAwareTimeout = async (milliseconds) => {
        log('About to call timeout')
        try{
            log(await promiseAwareTimeout(milliseconds));
        }catch(error){
            log(error);
        }
    };

    //call the async function.
    usePromiseAwareTimeout(3000);

function waitList(list){
    for(let person of list){
        yield person; //create yield point for each item on the list
    }
    //return; terminates a generator at any point. It does not have to be used at all. It can be used between yield statements if the developer wants the rest of the yield to be ignored.
}

let myWaitList = waitList(['Peter','Mary','John']); //call waitList
    //Prepare the output.

let output = `The first yielded value is: ${myWaitList.next().value} <br/>
    Here is what is returned in the next call: ${myWaitList.next().value} <br/>
    Hopefully we still have room for a next call. Here is the return: ${myWaitList.next().value} <br/>
    What if we call again when there is no more value to yield. Here is what we get: ${myWaitList.next().value}`
    
    
log(output);