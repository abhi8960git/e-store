

// const FormInput = ({ label, ...otherProps }) => {
//    console.log(otherProps);

//    return (
//       <div className="group">
//          {label && (
//             <label className={`${otherProps.value.length ? 'shrink' : ''} form-input-label`}>{label}</label>)}
//          <input className='form-input' {...otherProps}></input>

//       </div>)


// }

// export default FormInput;

// 

const FormInput = ({ label, ...otherProps }) => {
  return (
    <div className='group'>
      <input className='form-input' {...otherProps} />
      {label && (
        <label
          className={`${
            otherProps.value.length ? 'shrink' : ''
          } form-input-label`}
        >
          {label}
        </label>
      )}
    </div>
  );
};

export default FormInput;