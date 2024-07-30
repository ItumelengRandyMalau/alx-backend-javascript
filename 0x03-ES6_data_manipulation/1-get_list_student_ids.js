export default function getListStudents() {
    const students = new Map([
        { id: 1, firstName: 'Guillaume', location: 'San Francisco' },
        { id: 2, firstName: 'James', location: 'Columbia' },
        { id: 5, firstName: 'Serena', location: 'San Francisco' }
    ]);

    // Check if students is a valid map
    if (!(students instanceof Map)) {
        console.error('Invalid students data. Expected a Map.');
        return []; // Return an empty array or handle the error as needed
    }

    // Extract student IDs
    const studentIds = Array.from(students.values()).map(student => student.id);
    return studentIds;
}
