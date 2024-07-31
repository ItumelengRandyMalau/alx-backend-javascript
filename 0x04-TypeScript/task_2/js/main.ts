// String literal type for Subjects
type Subjects = 'Math' | 'History';

// Function to teach a class based on the subject
function teachClass(todayClass: Subjects): string {
  if (todayClass === 'Math') {
    return 'Teaching Math';
  } else if (todayClass === 'History') {
    return 'Teaching History';
  }
  return '';
}

// Example usage
console.log(teachClass('Math'));    // Should print: Teaching Math
console.log(teachClass('History')); // Should print: Teaching History
