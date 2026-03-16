const { useState } = React;

export function EventRSVPForm() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [attendees, setAttendees] = useState(0);
  const [preferences, setPreferences] = useState("");
  const [guests, setGuests] = useState(false);

  const [submited, setSubmited] = useState(false)

  const handleClick = () => {
    if (name !== "" && email !== "" && attendees >= 1) {
      setSubmited(true)
      return
    }
    console.log("Complete you formulary")
  }

  return (
    <>
      <form onSubmit={e => e.preventDefault()}>
        <label for="name">Name:</label>
        <input id="name" type="text"
          placeholder="Your Name" required
          value={name}
          onChange={e => setName(e.target.value)}
        />

        <label for="email">Email:</label>
        <input id="email" type="email"
          placeholder="your@email.com" required
          value={email}
          onChange={e => setEmail(e.target.value)}
        />

        <label for="attendees">Number of attendees:</label>
        <input id="attendees" type="number"
          placeholder="0" min="1" required
          value={attendees}
          onChange={e => setAttendees(e.target.value)}
        />

        <label for="preferences">Dietary Preferences:</label>
        <input id="preferences" type="text"
          placeholder="(Optional)"
          value={preferences}
          onChange={e => setPreferences(e.target.value)}
        /> 

        <label for="guests">Bringing additional guests <input
          id="guests" type="checkbox"
          checked={guests}
          onChange={() => setGuests(!guests)}
        />
        </label>

        <button type="submit" onClick={() => handleClick()}>
          Submit
        </button>

      </form>

      <div id="msg" style={{display: submited ? 'block' : 'none'}}>
        <span>RSVP Submitted!</span>
        <ul>
          <li>Name: {name}</li>
          <li>Email: {email}</li>
          <li>Number of attendees: {attendees}</li>
          <li>Dietary preferences: {preferences === ""
          ? "None"
          : preferences
          }</li>
          <li>Bringing additional guests: {guests
          ? "Yes"
          : "No"}</li>
        </ul>
      </div>
    </>
  )
}
