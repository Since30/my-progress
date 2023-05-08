export default function FormValidation() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [valid, setValid] = useState(false);
  const handleName = (e) => {
    setForm({ ...form, name: e.target.value });
  };
  const handleEmail = (e) => {
    setForm({ ...form, email: e.target.value });
  };
  const handlePassword = (e) => {
    setForm({ ...form, password: e.target.value });
  };
  const handlePassword2 = (e) => {
    setForm({ ...form, password2: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validate(form));
    setSubmitted(true);
  };
  useEffect(() => {
    if (Object.keys(errors).length === 0 && submitted) {
      setValid(true);
    }
  }, [errors]);
  return (
    <div className="form-content-right">
      <form className="form" onSubmit={handleSubmit}>
        <h1>Get started with us today! Create your account by filling out the
        information below.</h1>
        {submitted && valid ? (
          <div className="success-message">
            <h2>Success! Thank you for registering.</h2>
            <p>You will be redirected to the login page shortly.</p>
          </div>
        ) : (
          <>
            <div className="form-inputs">
              <label htmlFor="name" className="form-label">
                Username
              </label>
              <input
                id="name"
                type="text"
                name="name"
                className="form-input"
                placeholder="Enter your username"
                value={form.name}
                onChange={handleName}
              />
              {errors.name && <p>{errors.name}</p>}
            </div>
            <div className="form-inputs">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                id="email"
                type="email"
                name="email"
                className="form-input"
                placeholder="Enter your email"
                value={form.email}
                onChange={handleEmail}
                />
                {errors.email && <p>{errors.email}</p>}
            </div>
            <div className="form-inputs">
                <label htmlFor="password" className="form-label">
                    Password
                </label>
                <input
                    id="password"
                    type="password"
                    name="password"
                    className="form-input"
                    placeholder="Enter your password"
                    value={form.password}
                    onChange={handlePassword}
                />
                {errors.password && <p>{errors.password}</p>}
            </div>
            <div className="form-inputs">
                <label htmlFor="password2" className="form-label">
                    Confirm Password
                </label>
                <input
                    id="password2"
                    type="password"
                    name="password2"
                    className="form-input"
                    placeholder="Confirm your password"
                    value={form.password2}
                    onChange={handlePassword2}
                />
                {errors.password2 && <p>{errors.password2}</p>}
            </div>
            <button className="form-input-btn" type="submit">
                Sign up
            </button>
            <span className="form-input-login">
                Already have an account? Login <a href="#">here</a>
            </span>
            </>
        )}
        </form>
    </div>
    );
}
