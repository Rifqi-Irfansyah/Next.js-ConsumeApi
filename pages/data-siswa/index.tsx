import Layout from "../Layout";
import styles from '../../styles/user.module.css';

export default function Produk(props:any) {
    const {dataUser} = props;
    
  return (
    <div>
        <Layout title='Props'>
          <br></br>
            {dataUser.data.map((user:any) => (
                <div className={styles.card} key={styles.id}>
                <img src={`http://localhost:8055/assets/${user.image}`} className={styles.image}/>
                <p>{user.name}</p>
                </div>  
            ))}
        </Layout>
    </div>
  )
  }
  
  export async function getServerSideProps() {
    
    const res = await fetch('http://127.0.0.1:8055/items/cars');
    const dataUser = await res.json();
  
    return {
        props: {
            dataUser,
        }
    }
    
  }