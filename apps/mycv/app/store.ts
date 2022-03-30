import create, {SetState} from 'zustand';
import feats from './feats';

interface CvData {
  name: string,
  classAndLevel: string,
  background: string,
  alignment: string,
  species: string
}

type StateType = {
  cvDataBaseData: CvData,
  feats: string[]
};

const useStore = create((set: SetState<StateType>) => (
  {cvDataBaseData:
      {name: 'Jonas Fischer',
        classAndLevel: 'Developer 7',
        background: 'Catlover/Gamer',
        alignment: 'Neutral Good',
        species: 'Human'},
  setCvBaseData: (newCv: CvData) => set(() => ({cvDataBaseData: newCv})),
  feats,
  setFeats: (newFeats: string[]) => set(() => ({feats: newFeats}))}));

export default useStore;
