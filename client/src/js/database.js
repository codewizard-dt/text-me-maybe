import { openDB } from 'idb';

const initdb = async () =>
  openDB('tmm', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('tmm')) {
        console.log('tmm database already exists');
        return;
      }
      db.createObjectStore('tmm', { keyPath: 'id', autoIncrement: true });
      console.log('tmm database created');
    },
  });

// Takes the content and stores it in IndexedDB
export const putDb = async (content) => {
  const tmmDb = await openDB('tmm', 1);
  const tx = tmmDb.transaction('tmm', 'readwrite');
  const store = tx.objectStore('tmm');
  const request = store.put({ id: 1, text: content });
  const result = await request;
};

// Gets the content from IndexedDB
export const getDb = async () => {
  const tmmDb = await openDB('tmm', 1);
  const tx = tmmDb.transaction('tmm', 'readonly');
  const store = tx.objectStore('tmm');
  const request = store.getAll();
  const result = await request;
  return result;
};

initdb();
