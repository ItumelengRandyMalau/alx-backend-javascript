export default function getListStudentIds(studentsId) {
  if (!Array.isArray(studentsId)) {
    return [];
  }
  // using map to extract the ids
  return studentsId.map((studentsId) => studentsId.id);
}
