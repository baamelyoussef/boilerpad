import { atomWithStorage, createJSONStorage } from "jotai/utils";
import AsyncStorage from "@react-native-async-storage/async-storage";

const storage = createJSONStorage(() => AsyncStorage);

const selectedCreatorIds = atomWithStorage<any>(
  "selectedCreatorIds",
  null,
  storage
);
const selectedTechsIds = atomWithStorage<any>(
  "selectedTechsIds",
  null,
  storage
);

export { selectedCreatorIds, selectedTechsIds };
