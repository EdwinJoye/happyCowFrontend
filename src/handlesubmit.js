const handleSubmit = async (event) => {
  try {
    if (email && username && password) {
      const response = await axios.post("http://localhost:3001/signup", {
        email: email,
        username: username,
        password: password,
      });
      event.preventDefault();
      if (password !== confirmPassword) {
        alert("vos deux messages ne sont pas identiques");
      } else {
        setStep(2);
      }
    } else {
      setError("Tous les champs ne sont pas remplis");
    }
  } catch (error) {}
};
