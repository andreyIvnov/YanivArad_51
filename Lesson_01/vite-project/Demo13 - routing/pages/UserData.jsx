const UserData = () => {
  return (
    <div style={{ backgroundColor: 'salmon', width: '400px', height: '400px' }}>
      <strong>Name:</strong> {sessionStorage.name} <br />
      <strong>Age:</strong> {sessionStorage.age} <br />
    </div>
  );
};

export default UserData;
