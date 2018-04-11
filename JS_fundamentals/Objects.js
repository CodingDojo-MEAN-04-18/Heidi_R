///global variables
let students = [
    {name: 'Remy', cohort: 'Jan'},
    {name: 'Genevieve', cohort: 'March'},
    {name: 'Chuck', cohort: 'Jan'},
    {name: 'Osmund', cohort: 'June'},
    {name: 'Nikki', cohort: 'June'},
    {name: 'Boris', cohort: 'June'}
];
let users = {
    employees: [
        {'first_name':  'Miguel', 'last_name' : 'Jones'},
        {'first_name' : 'Ernie', 'last_name' : 'Bertson'},
        {'first_name' : 'Nora', 'last_name' : 'Lu'},
        {'first_name' : 'Sally', 'last_name' : 'Barkyoumb'}
    ],
    managers: [
       {'first_name' : 'Lillian', 'last_name' : 'Chambers'},
       {'first_name' : 'Gordon', 'last_name' : 'Poe'}
    ]
 };
///functions
function challenge_1(){
    for(let student in students){
        console.log("Name: ",students[student].name,",Cohort: ",students[student].cohort)
        
    }
}
function challenge_2(){
    console.log("EMPLOYEES")
    for(let user in users.employees){
        let x = users.employees[user].first_name.length + users.employees[user].last_name.length
            console.log(user,"-",users.employees[user].last_name,",",users.employees[user].first_name, "-",x)    
    }
    console.log("MANAGERS")
    for(let user in users.managers){
        let x = users.managers[user].first_name.length + users.managers[user].last_name.length
            console.log(user,"-",users.managers[user].last_name,",",users.managers[user].first_name, "-",x)    
    }
}
challenge_2()