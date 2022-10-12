/* 
Create a list of 5 student objects who all have a first name, last name, id, and 4 grades (array) 
*/

let student = [
  
  {firstName: "Julian", lastName: "Blyton", id: 200, grades: [2,4,6,8]},
  {firstName: "Anne", lastName: "Blyton", id: 300, grades: [3,6,9,12]},
  {firstName: "Timothy",lastName: "Blyton", id: 400, grades: [4,8,12,16]},
  {firstName: "Dick", lastName: "Blyton", id: 500 , grades:[5,10,15,20]},
  {firstName: "George",lastName: "Blyton", id: 100, grades: [1,2,3,4]},
    ];

/* 
In a loop, add a “gpa” property to each object and set it to the (average grade / 25)
*/

let total = 0;

for (let i = 0; i < student.length; i++){
  for (let j = 0; j < student[i].grades.length; j++){
    total += student[i].grades[j];
  };
  avg = total/student[i].grades.length
  student[i].gpa = avg/25
  total = 0
};

/* 
Sort the array so that the students are in order of GPA 
*/

function compare( a, b ) {
  if ( a.gpa < b.gpa ){
    return -1;
  }
  if ( a.gpa > b.gpa ){
    return 1;
  }
  return 0;
}

student.sort(compare);

/* 
Print out the student’s first name and their GPA.
*/

for (let i = 0; i < student.length; i++){
  console.log("Name: " + student[i].firstName + " " + student[i].lastName + ", GPA:" + student[i].gpa);
};

