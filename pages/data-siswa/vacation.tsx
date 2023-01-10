import React, { useState, useEffect } from 'react';
import styles from '../../styles/user.module.css';
import Layout from '../Layout';

const apiUrl = 'https://eyns69u2.directus.app/items/vacation';

export default function image() {
    
    const [siswa, setSiswa] = useState([]);

    useEffect(() => {
        async function fetchData() {
        const response = await fetch(apiUrl);
        const data = await response.json();
        setSiswa(data.data);
        }

        fetchData();
    }, []);
    

    return (
        <Layout title='Vacation'>
        <div>
        <ul className={styles.none}>
            {siswa.map((user:any) => (
                <li key={user.id}>
                    <table className={styles.card}>
                        <tbody>
                            <tr>
                                <td colSpan={2}><p className={styles.judulvacation}>{user.name}</p></td>
                            </tr>
                            <tr>
                                <td><img src={`https://eyns69u2.directus.app/assets/${user.image}`} className={styles.image}/></td>
                                <td className={styles.description}>{user.description}</td>
                            </tr>
                        </tbody>
                    </table><br></br> 
                </li>
            ))}
        </ul>
        </div>
        </Layout>
    );
    
}