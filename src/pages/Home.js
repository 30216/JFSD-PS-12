import React from 'react';

const Home = () => {
  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.title}>Handloom Fashion Products</h1>
        <p style={styles.subtitle}>Connecting artisans with buyers around the world</p>
      </header>

      <section style={styles.featuredProducts}>
        <h2 style={styles.sectionTitle}>Featured Products</h2>
        <div style={styles.productGrid}>
          {/* Example Products */}
          <div style={styles.productCard}>
            <img src="https://via.placeholder.com/150" alt="Handloom Item 1" style={styles.productImage} />
            <h3 style={styles.productName}>Handloom Scarf</h3>
            <p style={styles.productPrice}>$25.00</p>
          </div>
          <div style={styles.productCard}>
            <img src="https://via.placeholder.com/150" alt="Handloom Item 2" style={styles.productImage} />
            <h3 style={styles.productName}>Handloom Bag</h3>
            <p style={styles.productPrice}>$45.00</p>
          </div>
          <div style={styles.productCard}>
            <img src="https://via.placeholder.com/150" alt="Handloom Item 3" style={styles.productImage} />
            <h3 style={styles.productName}>Handloom Shawl</h3>
            <p style={styles.productPrice}>$65.00</p>
          </div>
        </div>
      </section>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    padding: '20px',
  },
  header: {
    textAlign: 'center',
    backgroundColor: '#f4f4f4',
    padding: '50px 0',
    borderBottom: '2px solid #ddd',
  },
  title: {
    fontSize: '2.5rem',
    color: '#333',
    margin: '0',
  },
  subtitle: {
    fontSize: '1.2rem',
    color: '#777',
  },
  featuredProducts: {
    marginTop: '50px',
  },
  sectionTitle: {
    fontSize: '2rem',
    color: '#333',
    textAlign: 'center',
    marginBottom: '20px',
  },
  productGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '20px',
  },
  productCard: {
    border: '1px solid #ddd',
    padding: '20px',
    borderRadius: '10px',
    textAlign: 'center',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
  },
  productImage: {
    maxWidth: '100%',
    borderRadius: '8px',
    marginBottom: '10px',
  },
  productName: {
    fontSize: '1.2rem',
    color: '#333',
    margin: '0 0 10px',
  },
  productPrice: {
    fontSize: '1rem',
    color: '#f4511e',
  },
};

export default Home;
