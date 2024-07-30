export default function updateStudentGradeByCity(students, city, newGrades) {
  return students
    .filter((student) => student.location === city)
    .map((student) => {
      const gradeObject = newGrades.find((grade) => grade.studentId === student.id);
      const grade = gradeObject ? gradeObject.grade : 'N/A';
      return { ...student, grade };
    });
}
