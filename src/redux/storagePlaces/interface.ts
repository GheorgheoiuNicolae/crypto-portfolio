export interface StoragePlacesState {
  exchanges: Exchange[];
  userDefined: UserDefined[];
  status: {
    exchangesAreLoading: boolean,
    exchangesLoadSuccess: boolean,
    exchangesLoadError: any,
    userDefinedPlacesOfStorageAreLoading: boolean,
    userDefinedPlacesOfStorageLoadSuccess: boolean,
    userDefinedPlacesOfStorageLoadError: any,
  };
}

interface Exchange {
  name: string;
  rank: number;
}
interface UserDefined {
  name: string;
  comment?: string;
}