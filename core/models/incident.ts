import NGO from './ngo';

export default interface Incident {
  id: number,
  title: string,
  description: string,
  value: number,
  ngo_id: string,
  ngo: NGO,
}
