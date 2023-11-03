const LandingPage = ({ currentUser }) => {
  console.log("landing", currentUser);
  return currentUser ? (
    <h1>You are signed in</h1>
  ) : (
    <h1>You are NOT signed in</h1>
  );
};

LandingPage.getInitialProps = async (context, client, currentUser) => {
  console.log("hello");
  return {};
};

export default LandingPage;
