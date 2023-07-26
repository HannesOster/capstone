import Header from "../../../components/Header/Header";

export default function AddCustomer() {
  return (
    <>
      <Header />
      <form>
        <label htmlFor="name">Kundenname:</label>
        <input id="name" name="name" type="text" />
        <label htmlFor="street">Straße und Hausnummer:</label>
        <input id="street" name="street" type="text" />
        <label htmlFor="location">Ort:</label>
        <input id="location" name="location" type="text" />
        <label htmlFor="plz">Postleitzahl:</label>
        <input
          id="plz"
          name="plz"
          type="text"
          minLength="5"
          maxLength="5"
          pattern="[0-9]{5}"
        />
        <button type="submit">Bestätigen</button>
      </form>
    </>
  );
}
