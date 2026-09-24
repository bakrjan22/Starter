let students = [
    { name: "Ali", note: 15 },
    { name: "Sara", note: 8 },
    { name: "Omar", note: 17 },
    { name: "Imane", note: 11 },
    { name: "Yassine", note: 6 }
];

function show(student_obj){
    for(let i = 0;i < student_obj.length;i++){
        let obj = student_obj[i];
        console.log(obj.name + " " + obj.note);   
    }
}
function isallowed(student_obj){
    for(let i = 0;i < student_obj.length;i++){
        let obj = student_obj[i];
        if (obj.note >= 10){
            console.log(obj.name + " is allowed");
            
        }
    }
}
isallowed(students);