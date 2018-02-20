var exercise = {};

exercise.salaries = null;
exercise.salary = null;

// load salary and data
exercise.load = function(salary, boston){
    exercise.salaries = boston.data;
    exercise.salary = 99000;
};

// get salaries larger than given salary
exercise.findBiggerSalaries = function(){
    var num_salaries = 0;
    var dataLength = exercise.salaries.length;
    var currentSal = 0;
    var list =[]
    for (var i=0; i<dataLength; i++){
        var currentSalary = exercise.salaries[i][18]
        if (Number(exercise.salaries[i][18])>exercise.salary){

            list.push(currentSalary)
        }
    }
    console.log(list)
    return list 
    
    // ---------------------------------------------------
    //   YOUR CODE
    //
    //     Return a filtered list of salaries.
    //     Return salaries larger than exercise.salary
    //
    //     Example: salaries larger than 300K is 8
    // ---------------------------------------------------

};

// filter function
exercise.largerSalary = function largerSalary(item){

    var num_salaries = 0;
    var dataLength = exercise.salaries.length;
    var currentSal = 0;
    var listt =[]
    for (var i=0; i<dataLength; i++){
        

            listt.push(Number(exercise.salaries[i][18])>exercise.salary)
        } // ---------------------------------------------------
    
    console.log(listt)
    return listt    //   YOUR CODE
    //
    //     Return a boolean (true/false) if item
    //     is larger than exercise.salary
    // ---------------------------------------------------

};