const ConditionalRendering = () => {
  const isGreen = false;
  const isSpamMsg = true;
  const spamMsg = <a href="/xyz">Click here to get unlimited i-cloud space!</a>;

  return (
    <div>
      <h2 style={{ color: isGreen ? "green": "red" }}>This has a default color</h2>
      { isSpamMsg && spamMsg }
    </div>
  );
};
export default ConditionalRendering;
