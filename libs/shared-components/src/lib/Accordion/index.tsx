import React, {useState} from 'react';
import styles from './index.module.scss';

interface AccordionProps {
  children: React.ReactNode;
  title: string;
}

export const Accordion = ({children, title}: AccordionProps) => {
  const [isOpen, setOpen] = useState(false);
  return (
    <div className={`accordion ${styles.customAccordion}`}>
      <div className="accordion-item">
        <h4 className="accordion-header">
          <button
            onClick={() => setOpen(!isOpen)}
            className={`accordion-button ${isOpen ? '' : 'collapsed'}`}
            type="button"
          >
            <h4>{title}</h4>

          </button>
        </h4>
        <div className={`${styles.customAccordionTransition} accordion-collapse collapse ${isOpen ? 'show' : ''}`}>
          <div className="accordion-body">
            {children}
          </div>
        </div>
      </div>
    </div>

  );
};

export default Accordion;
