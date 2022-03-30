import React, {useState} from 'react';
import styles from './index.module.scss';
import Cv from '../app/Cv';
import Creator from '../app/Creator';
import useStore from '../app/store';

type NavId = 'SEE' | 'CREATE';

export const Index = () => {
  const cvBaseData = useStore((state) => state.cvDataBaseData);
  const feats = useStore((state) => state.feats);
  const [seeActive, setSeeActive] = useState(true);

  const onNavClick = (navId: NavId) => {
    if (navId === 'SEE') {
      setSeeActive(true);
    } else {
      setSeeActive(false);
    }
  };

  return (
    <div className={styles.page}>
      <div className="wrapper">
        <div className="container-fluid">
          <div className="row">
            <div className="col">
              <div className={styles.navigation}>
                <ul className="nav nav-pills">
                  <li className="nav-item">
                    <button onClick={() => onNavClick('SEE')} className={`nav-link ${seeActive ? 'active' : ''}`} type="button">See</button>
                  </li>
                  <li className="nav-item">
                    <button onClick={() => onNavClick('CREATE')} className={`nav-link ${!seeActive ? 'active' : ''}`} type="button">Create</button>
                  </li>
                </ul>
              </div>
              <div className="card">
                <div className="card-body">
                  {seeActive && <Cv cvData={cvBaseData} feats={feats} /> }
                  {!seeActive && <Creator />}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
