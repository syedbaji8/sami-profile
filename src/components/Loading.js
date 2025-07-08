import React from 'react';

function Loading(props) {
  setTimeout(() => {
    props.setisLoading(false)
  },1000)
  console.log(props)
  return (
    <div className="Loading d-flex flex-row flex-wrap align-items-center justify-content-center h-100">
      <h6>Loading...</h6>
    </div>
  );
}

export default Loading;
