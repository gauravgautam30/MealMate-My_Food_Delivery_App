import React from "react";

const OfflineNotice = () => {
  return (
    <div style={styles.container}>
      <div style={styles.icon}>📡</div>
      <h2 style={styles.title}>Oops! You’re Offline</h2>
      <p style={styles.message}>
        It looks like you've lost your connection. But don’t worry, we’re
        holding down the fort!
      </p>
      <div style={styles.suggestions}>
        <h3>Meanwhile, you can:</h3>
        <ul>
          <li>Try a quick yoga stretch 🧘‍♂️</li>
          <li>Grab a cup of coffee ☕</li>
          <li>Read a book 📚</li>
          <li>Or just relax and take a deep breath 😌</li>
        </ul>
      </div>
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    padding: "20px",
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#f4f4f4",
    borderRadius: "8px",
    maxWidth: "400px",
    margin: "50px auto",
  },
  icon: {
    fontSize: "50px",
    marginBottom: "10px",
  },
  title: {
    fontSize: "24px",
    color: "#333",
  },
  message: {
    fontSize: "16px",
    color: "#666",
    marginBottom: "20px",
  },
  suggestions: {
    textAlign: "left",
  },
};

export default OfflineNotice;
