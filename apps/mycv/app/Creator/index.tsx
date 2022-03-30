import React, {useState} from 'react';
import useStore from '../store';
import styles from './index.module.scss';

export const Index = () => {
  const setBaseData = useStore((state) => state.setCvBaseData);
  const setFeatsInStore = useStore((state) => state.setFeats);

  const [name, setName] = useState('');
  const [classAndLevel, setClassAndLevel] = useState('');
  const [background, setBackground] = useState('');
  const [species, setSpecies] = useState('');
  const [alignment, setAlignment] = useState('');
  const [feats, setFeats] = useState('');
  const [showSuccessMessage, setShowSucessMessage] = useState(false);

  const handleSubmit = () => {
    setBaseData({name,
      classAndLevel,
      background,
      species,
      alignment});
    setFeatsInStore(feats.split(';'));
    setShowSucessMessage(true);
  };

  return (
    <div>
      <div className="input-group mb-3">
        <span className="input-group-text" id="basic-addon1">Name</span>
        <input
          onChange={(event) => setName(event.target.value)}
          type="text"
          className="form-control"
          placeholder="e.g. Jane Doe"
          aria-label="Name"
          aria-describedby="basic-addon1"
        />
      </div>
      <div className="input-group mb-3">
        <span className="input-group-text" id="basic-addon1">Class & Level</span>
        <input
          onChange={(event) => setClassAndLevel(event.target.value)}
          type="text"
          className="form-control"
          placeholder="e.g. Developer 3"
          aria-label="Name"
          aria-describedby="basic-addon1"
        />
      </div>
      <div className="input-group mb-3">
        <span className="input-group-text" id="basic-addon1">Background</span>
        <input
          onChange={(event) => setBackground(event.target.value)}
          type="text"
          className="form-control"
          placeholder="e.g. Tactical Mathematician"
          aria-label="Name"
          aria-describedby="basic-addon1"
        />
      </div>
      <div className="input-group mb-3">
        <span className="input-group-text" id="basic-addon1">Alignment</span>
        <select defaultValue="1" onChange={(event) => setAlignment(event.target.value)} className="form-select" aria-label="Default select example">
          <option value="Lawful Good">Lawful Good</option>
          <option value="Lawful Neutral">Lawful Neutral</option>
          <option value="Lawful Evil">Lawful Evil</option>
          <option value="Neutral Good">Neutral Good</option>
          <option value="Neutral Neutral">Neutral Neutral</option>
          <option value="Neutral Evil">Neutral Evil</option>
          <option value="Chaotic Good">Chaotic Good</option>
          <option value="Chaotic Neutral">Chaotic Neutral</option>
          <option value="Chaotic Evil">Chaotic Evil</option>
        </select>
      </div>
      <div className="input-group mb-3">
        <span className="input-group-text" id="basic-addon1">Species</span>
        <input
          onChange={(event) => setSpecies(event.target.value)}
          type="text"
          className="form-control"
          placeholder="e.g. Tiefling"
          aria-label="Name"
          aria-describedby="basic-addon1"
        />
      </div>
      <div className="input-group">
        <span className="input-group-text">Feats, separate with semicolon</span>
        <textarea onChange={(event) => setFeats(event.target.value)} placeholder="e.g. Git; Elasticsearch; Ritual Caster" className="form-control" aria-label="With textarea" />
      </div>
      <div className={styles.callToActionContainer}>
        <button onClick={() => handleSubmit()} type="button" className="btn btn-primary">Submit</button>
      </div>
      {showSuccessMessage && (
        <div className={styles.successMessageContainer}>
          <div className="alert alert-success alert-dismissible" role="alert">
            CV data saved to store successfully!
            <button onClick={() => setShowSucessMessage(false)} type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Index;
