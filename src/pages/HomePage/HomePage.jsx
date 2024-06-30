const styles = {
  title: {
    fontWeight: 500,
    fontSize: 48,
    textAlign: "center",
  },
};

export default function HomePage() {
  return (
    <>
      <h1 style={styles.title}>
        Phonebook welcome page{" "}
        <span role="img" aria-label="Greeting icon">
          💁‍♀️
        </span>
      </h1>
    </>
  );
}
