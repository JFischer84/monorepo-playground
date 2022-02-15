import React from 'react';

interface FactProps {
  featTitle: string;
}

export function Feat({featTitle}: FactProps) {
  return (
    <div className="col">
      <h3><span className="badge bg-primary text-light">{featTitle}</span></h3>
    </div>
  );
}

export default Feat;
