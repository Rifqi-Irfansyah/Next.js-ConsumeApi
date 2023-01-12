import React, { useState, useEffect } from 'react';
import styles from '../../styles/user.module.css';
import Layout from '../Layout';

const apiUrl = 'http://localhost:8055/items/cars';

export default function cars() {
    
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
        <Layout title='Cars'>
            <div>
            <ul className={styles.none}>
                {siswa.map((user:any) => (
                    <li key={user.id}>
                        <table className={styles.card}>
                            <tbody>
                                <tr>
                                    <td><img src={`http://localhost:8055/assets/${user.image}`} className={styles.image}/></td>
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