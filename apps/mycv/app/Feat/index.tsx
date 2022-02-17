import React from 'react';

interface FactProps {
  featTitle: string;
}

export const Feat = ({featTitle}: FactProps) => (
  <div className="col text-center">
    <h3><span className="badge bg-primary text-light">{featTitle}</span></h3>
  </div>
);

export default Feat;
