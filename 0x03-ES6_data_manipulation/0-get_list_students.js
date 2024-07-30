function getListStudents() {
  /* const student1={
    id: 1,
    firstName: "Guillaume",
    location: "San Francisco"
  };
  const student2={
    id: 2,
    firstName: "James",
    location: "Columbia",
  };
   const student3={
    id: 5,
    firstName:"Serena",
    location: "San Francisco",
  };
  return [student1, student2, student3]; */

  const students = [
    { id: 1, firstName: 'Guillaume', location: 'San Francisco' },
    { id: 2, firstName: 'James', location: 'Columbia' },
    { id: 5, firstName: 'Serena', location: 'San Francisco' },
  ];
  return students;
}

export default getListStudents;
