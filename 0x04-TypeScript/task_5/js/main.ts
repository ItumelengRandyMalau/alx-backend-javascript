// Define the interfaces with brand properties
interface MajorCredits {
  credits: number;
  _brand: 'major';
}

interface MinorCredits {
  credits: number;
  _brand: 'minor';
}

// Function to sum MajorCredits
function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    _brand: 'major'
  };
}

// Function to sum MinorCredits
function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    _brand: 'minor'
  };
}

// Example usage
const major1: MajorCredits = { credits: 3, _brand: 'major' };
const major2: MajorCredits = { credits: 4, _brand: 'major' };
const minor1: MinorCredits = { credits: 1, _brand: 'minor' };
const minor2: MinorCredits = { credits: 2, _brand: 'minor' };

console.log(sumMajorCredits(major1, major2)); // { credits: 7, _brand: 'major' }
console.log(sumMinorCredits(minor1, minor2)); // { credits: 3, _brand: 'minor' }
