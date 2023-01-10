import React, { useState, useEffect } from 'react';
import styles from '../../styles/user.module.css';

const apiUrl = 'http://localhost:8055/items/siswa';

export default function Index() {
  // use state, sebuah variabel yang bisa menyimpan data nah si datanya bisa berubah-ubah 
  const [siswa, setSiswa] = useState([]);

  // mengambil data dari server
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(apiUrl);
      const data = await response.json();
      setSiswa(data.data);
    }

    fetchData();
  }, []);

  return (
    <div>
      <h1 className={styles.head}>Data Siswa</h1>
      {siswa.map((user:any) => (
                <div className={styles.card}>
                <p>{user.name}</p>
                <p>{user.class}</p>
                </div>
            ))}
    </div>
  );
}