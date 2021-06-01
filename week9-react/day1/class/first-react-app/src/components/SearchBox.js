import React from 'react';

const SearchBox = (props) => {
  const {handleChange,handleClick} = props;
  return(
    <div>
       <input
       className='pa3 bs b--green bg-lightest-blue'
       placeholder="Search..." type='search'
       onChange={handleChange}
       />
       <button className='pa3 ba b--green bg-lightest-blue'
       onClick={handleClick}
       >
        Serach
      </button>
    </div>
  )
}
export default SearchBox
