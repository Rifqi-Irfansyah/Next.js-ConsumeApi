import styles from '../../styles/user.module.css';
import Layout from '../Layout';

export default function Users({dataUsers}: any){
    return(
        <div>
            <Layout title='Props'>
                {dataUsers.map((user:any) => (
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
    try {
        // const res = await fetch ('https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline')
      const res = await fetch('http://localhost:8055/items/cars');
      const dataUsers = await res.json();
      return {
        props: {
          dataUsers,
        },
      };
    } catch (error) {
      console.error(error);
      return {
        props: {
          dataUsers: [],
        },
      };
    }
  }