import { Dna } from 'react-loader-spinner';

const Loader = ({ isLoad }) => {
  if (isLoad)
    return (
      <div className="Overlay-Loader">
        <Dna
          visible={true}
          height="150"
          width="150"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper"
        />
      </div>
    );
};
export { Loader };
