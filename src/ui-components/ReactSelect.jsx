
import Select from 'react-select'


const customStyles = {
  option: (styles, state) => ({
    ...styles,
    cursor: 'pointer',
  }),
  control: (styles) => ({
    ...styles,
    cursor: 'pointer',
    width:'160px',
   
  }),
  
}

function ReactSelect({options,onChange,defaultValue}) {

    return (
        <Select styles={customStyles}     classNamePrefix="react-select" className="react-select-custom"
        defaultValue  ={defaultValue} options={options} onChange={onChange} />
    )
}

export default ReactSelect
