export interface IRickAndMortyState {
  content: IRickAndMorty[];
  isLoading: boolean;
  error: string;
}

export interface IRickAndMorty {
  id: number;
  name: string;
  species: string;
  status: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  }
  location: {
    name: string;
    url: string;
  }
  image: string;
  episode: [];
  url: string;
  created: string;
}

export interface IRickAndMortyProps {
  props: IRickAndMorty
}