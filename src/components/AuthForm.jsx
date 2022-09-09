export const AuthForm = () => {
  return (
    <>
      <h1>Login</h1>
      <div>
        <label htmlFor="">
          Username:
          <input type="text" />
        </label>
        <label htmlFor="">
          Password:
          <input type="password" />
        </label>
        <button>Login</button>
      </div>
    </>
  );
};
