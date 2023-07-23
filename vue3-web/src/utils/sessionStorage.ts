const STORAGE_KEY = "studentName";
export default {
  getSession() {
    return JSON.parse(sessionStorage.getItem(STORAGE_KEY) || "[]");
  },
  setSession(items) {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  },
  removeSession(items) {
    sessionStorage.removeItem(STORAGE_KEY);
  },
};
