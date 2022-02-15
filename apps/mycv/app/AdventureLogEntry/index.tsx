import React from 'react';

interface FactProps {
  entry: {
    entryText: string;
    isLast?: boolean;
  }
}

export function AdventureLogEntry({entry}: FactProps) {
  const {entryText, isLast = false} = entry;
  return (
    <li className={`list-group-item ${isLast ? 'active' : ''}`} aria-current={isLast}>{entryText}</li>
  );
}

export default AdventureLogEntry;
