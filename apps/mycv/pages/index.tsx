import React, {useState} from 'react';
import {IconCirclePlus, IconEye, IconHistory} from '@tabler/icons';
import styles from './index.module.scss';
import Cv from '../app/Cv';
import Creator from '../app/Creator';
import useStore from '../app/Store/store';

type NavId = 'SEE' | 'CREATE';

export const Index = () => {
  const cvBaseData = useStore((state) => state.cvDataBaseData);
  const feats = useStore((state) => state.feats);
  const resetStore = useStore((state) => state.reset);
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
                <nav>
                  <div className="nav nav-tabs" id="nav-tab" role="tablist">
                    <button onClick={() => onNavClick('SEE')} className={`nav-item nav-link ${seeActive ? 'active' : ''}`} type="button">
                      <div className={styles.navButtonContainer}>
                        <div className={styles.navIconContainer}>
                          <IconEye
                            size={16}
                            stroke={3}
                          />
                        </div>
                        See
                      </div>
                    </button>
                    <button onClick={() => onNavClick('CREATE')} className={`nav-item nav-link ${!seeActive ? 'active' : ''}`} type="button">
                      <div className={styles.navButtonContainer}>
                        <div className={styles.navIconContainer}>
                          <IconCirclePlus
                            size={16}
                            stroke={3}
                          />
                        </div>
                        Create
                      </div>
                    </button>
                  </div>
                </nav>
                <button onClick={() => resetStore()} className="btn btn-outline-danger" type="button">
                  <div className={styles.navButtonContainer}>
                    <div className={styles.navIconContainer}>
                      <IconHistory
                        size={16}
                        stroke={3}
                      />
                    </div>
                    Reset
                  </div>
                </button>
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
