import React, { useState, useEffect } from 'react';
import styles from '../../styles/user.module.css';
import Layout from '../Layout';

var apiUrl = 'http://127.0.0.1:8055/items/content';

// Buat filter pencarian author, title
// http://localhost:8055/items/content?filter[author][_contains]=
// http://localhost:8055/items/content/?filter[title][_contains]=

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
               <>
                    <p>{user.title}</p>

                    {user.tag.length}
                    
                    <a href={`http://localhost/items/vacation/${user.tag[0]}`}>{user.tag[0]} </a><br></br>
                    <a href={`http://localhost/items/vacation/${user.tag[1]}`}>{user.tag[1]} </a>
                    <br></br>

                    
               </>
            ))}
        </ul>
        </div>
        
        </Layout>
        
    );
    
}