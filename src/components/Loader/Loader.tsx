import LoaderStyled from './LoaderStyled';

const Loader = () => {
  return (
    <LoaderStyled>
      <div className="spinner" aria-label="The page is loading">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </LoaderStyled>
  );
};

export default Loader;
