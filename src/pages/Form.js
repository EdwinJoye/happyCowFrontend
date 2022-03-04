const Form = ({
  username,
  email,
  password,
  confirmPassword,
  setUsername,
  setEmail,
  setPassword,
  setConfirmPassword,
  setStep,
}) => {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (password !== confirmPassword) {
          alert("vos deux messages ne sont pas identiques");
        } else {
          setStep(2);
        }
      }}
      style={{
        display: "flex",
        flexDirection: "column",
        width: 400,
        marginLeft: 400,
      }}
    >
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(event) => {
          console.log(event.target.value);
          setUsername(event.target.value);
        }}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(event) => {
          console.log(event.target.value);
          setEmail(event.target.value);
        }}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(event) => {
          console.log(event.target.value);
          setPassword(event.target.value);
        }}
      />
      <input
        type="password"
        placeholder="confirmpassword"
        value={confirmPassword}
        onChange={(event) => {
          console.log(event.target.value);
          setConfirmPassword(event.target.value);
        }}
      />
      <button type="submit">valider </button>
    </form>
  );
};

export default Form;
