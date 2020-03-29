
const key = 'ngo';

export interface NGOData {
  id: string,
  name: string,
}

export default {
  add(data: NGOData) {
    localStorage.setItem(key, JSON.stringify(data));
  },

  clear() {
    localStorage.removeItem(key);
  },

  get() {
    const data = localStorage.getItem(key);

    return (data ? JSON.parse(data) : {}) as NGOData;
  },
};
