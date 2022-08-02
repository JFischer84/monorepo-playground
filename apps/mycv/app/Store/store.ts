import create, {SetState} from 'zustand';
import feats from './feats';
import cvDataBaseData from './cvDataBaseData';

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
  {cvDataBaseData,
    feats,
    setCvBaseData: (newCv: CvData) => set(() => ({cvDataBaseData: newCv})),
    setFeats: (newFeats: string[]) => set(() => ({feats: newFeats})),
    reset: (() => set(() => (
      {cvDataBaseData,
        feats}
    )))}));

export default useStore;
