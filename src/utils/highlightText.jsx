import React from 'react';

/**
 * Highlights search terms in text by wrapping matches with a span element
 * @param {string} text - The text to search in
 * @param {string} searchTerm - The term to highlight
 * @returns {JSX.Element} - Text with highlighted search terms
 */
export const highlightText = (text, searchTerm) => {
  if (!searchTerm || !text) {
    return text;
  }

  // Escape special regex characters in search term
  const escapedSearchTerm = searchTerm.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  
  // Create regex with global and case-insensitive flags
  const regex = new RegExp(`(${escapedSearchTerm})`, 'gi');
  
  // Split text by matches and create highlighted spans
  const parts = text.split(regex);
  
  return (
    <>
      {parts.map((part, index) => {
        // Check if this part matches the search term (case-insensitive)
        if (part.toLowerCase() === searchTerm.toLowerCase()) {
          return (
            <span key={index} className="highlight-text">
              {part}
            </span>
          );
        }
        return part;
      })}
    </>
  );
};

/**
 * Highlights multiple search terms in text
 * @param {string} text - The text to search in
 * @param {string[]} searchTerms - Array of terms to highlight
 * @returns {JSX.Element} - Text with highlighted search terms
 */
export const highlightMultipleTerms = (text, searchTerms) => {
  if (!searchTerms || searchTerms.length === 0 || !text) {
    return text;
  }

  let highlightedText = text;
  
  // Apply highlighting for each search term
  searchTerms.forEach((term, termIndex) => {
    if (term && term.trim()) {
      const escapedTerm = term.trim().replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      const regex = new RegExp(`(${escapedTerm})`, 'gi');
      
      // For React elements, we need to handle this differently
      // This is a simplified version - for complex highlighting of multiple terms,
      // a more sophisticated approach would be needed
      highlightedText = highlightedText.replace(regex, `<mark class="highlight-text">$1</mark>`);
    }
  });

  return <span dangerouslySetInnerHTML={{ __html: highlightedText }} />;
};
