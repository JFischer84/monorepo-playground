import React from 'react';
import Image from 'next/image';
import styles from './index.module.scss';
import {ProgressBar} from '../app/ProgressBar';
import {Fact} from '../app/Fact';

export function Index() {
  const openLink = (link: string) => {
    window.open(link);
  };
  return (
    <div className={styles.page}>
      <div className="wrapper">
        <div className="container-fluid">
          <div className="row">
            <div className="col">
              <div className="card">
                <div className="card-body">
                  <div className={styles.cardContent}>
                    <div className={styles.uperContainer}>
                      <div className={styles.imageContainer}>
                        <Image className={styles.profilePicture} width={256} height={256} src="/profile_pic2.jpg" alt="profile picture" />
                      </div>
                      <h5 className="card-title">Jonas Fischer</h5>
                      <div className={styles.factSection}>
                        <div className={styles.factSubContainer}>
                          <Fact factTitle="Developer 7" description="Class & Level" />
                          <Fact factTitle="Catlover/Gamer" description="Background" />
                        </div>
                        <div className={styles.factSubContainer}>
                          <Fact factTitle="Neutral Good" description="Alignment" />
                          <Fact factTitle="Human" description="Race" />
                        </div>
                      </div>
                    </div>
                    <h5>Skills</h5>
                    <div className={styles.progressBarContainer}>
                      <ProgressBar fillingPercentage="75" colorScheme="javascript" title="JavaScript" />
                      <ProgressBar fillingPercentage="85" colorScheme="typescript" title="TypeScript" />
                      <ProgressBar fillingPercentage="85" colorScheme="react" title="React" />
                      <ProgressBar fillingPercentage="75" colorScheme="java" title="Java" />
                      <ProgressBar fillingPercentage="60" colorScheme="springboot" title="Spring Boot" />
                    </div>
                    <h5>Feats</h5>
                    <div className={styles.featsContainer}>
                      <div className="row align-items-center gx-3">
                        <div className="col">
                          <h3><span className="badge bg-primary text-light">Jest</span></h3>
                        </div>
                        <div className="col">
                          <h3><span className="badge bg-primary text-light">Enzyme</span></h3>
                        </div>
                        <div className="col">
                          <h3><span className="badge bg-primary text-light">JUnit</span></h3>
                        </div>
                        <div className="col">
                          <h3><span className="badge bg-primary text-light">Mockito</span></h3>
                        </div>
                        <div className="col">
                          <h3><span className="badge bg-primary text-light">Elasticsearch</span></h3>
                        </div>
                        <div className="col">
                          <h3><span className="badge bg-primary text-light">Git</span></h3>
                        </div>
                        <div className="col">
                          <h3><span className="badge bg-primary text-light">Scrum</span></h3>
                        </div>
                      </div>
                    </div>
                    <h5>Background</h5>
                    <div className={styles.backgroundContainer}>
                      <ul className="list-group list-group-flush">
                        <li className="list-group-item active" aria-current="true">2018 - Today: Software Developer / Immowelt Hamburg GmbH</li>
                        <li className="list-group-item">2015 - 2018: Software Developer Apprenticeship / Immowelt Hamburg GmbH</li>
                        <li className="list-group-item">2013 - 2015: Studies Game Programming / SAE Hamburg (Diploma)</li>
                        <li className="list-group-item">2012 - 2013: Nursery School Teacher Apprenticeship / Fachschule für Sozialpädagogik 2</li>
                        <li className="list-group-item">2012 - 2012: Internships as Nursery School Teacher</li>
                        <li className="list-group-item">2011 - 2012: Call Center Agent / Axel Springer Direkt</li>
                        <li className="list-group-item">2004 - 2011: Studies Media Culture / Universität Hamburg (Bakkalaureus Artium)</li>
                      </ul>
                    </div>
                    <h5>Profiles</h5>
                    <div className="row align-items-center gx-4">
                      <div className="col">
                        <button type="button" className="btn btn-primary" onClick={() => openLink('https://github.com/jfischer84')}>Github</button>
                      </div>
                      <div className="col">
                        <button type="button" className="btn btn-primary" onClick={() => openLink('https://www.xing.com/profile/Jonas_Fischer34/cv')}>Xing</button>
                      </div>
                      <div className="col">
                        <button type="button" className="btn btn-primary" onClick={() => openLink('https://www.linkedin.com/in/jonas-fischer-a5071998/')}>Linkedin</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
