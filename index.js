class Formatter {
  //add static methods here
   // Method to capitalize the first letter of a string
   static capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  // Method to sanitize the string by removing non-alphanumeric characters
  static sanitize(str) {
    return str.replace(/[^a-zA-Z0-9-' \-]/g, '');
  }

  // Method to titleize the string (capitalize words except certain ones)
  static titleize(str) {
    const smallWords = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];
    let words = str.split(' ');
    
    // Capitalize the first word
    words[0] = words[0].charAt(0).toUpperCase() + words[0].slice(1);
    
    // Capitalize all other words except for the small ones
    for (let i = 1; i < words.length; i++) {
      if (!smallWords.includes(words[i].toLowerCase())) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
      }
    }

    return words.join(' ');
  }
}