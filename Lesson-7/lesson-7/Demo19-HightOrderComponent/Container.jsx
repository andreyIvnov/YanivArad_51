const TemplateComp = (WrappedComponent, firstName, lastName) => {
  return function NewComp(props) {
    return (
      <>
        <h1>Header</h1>
        <h2>{props.age}</h2>
        <WrappedComponent name={`${firstName} ${lastName}`} />
        <h1>Footer</h1>
      </>
    );
  };
};

export default TemplateComp;
