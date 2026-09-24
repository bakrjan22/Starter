let students = [
    {
        firstName: "Ali",
        age: 20,
        city: "Youssoufia"
    },
    {
        firstName: "Sara",
        age: 22,
        city: "Marrakech"
    },
    {
        firstName: "Omar",
        age: 19,
        city: "Safi"
    }
];
function showall(students){
    for(let i = 0;i<students.length;i++){
        let student_obj = students[i];
        for(key in student_obj){
            console.log(key, " : ", student_obj[key]);
            
        }
    }
}
function showallfirstname(students){
    for(let i = 0;i<students.length;i++){
        let student_obj = students[i];
        for(key in student_obj){
            if(key == "age") {
                console.log(key, " : ", student_obj[key]);

            }            
        }
    }
}
function welcomer(students){
    for(let i = 0;i<students.length;i++){
        let student_obj = students[i];
            console.log("Bonjour"," ",student_obj.firstName," ",student_obj.age,"ans","bienvenue a ",student_obj.city);
    }
}
//showall(students);
//showallfirstname(students);
//welcomer(students);
