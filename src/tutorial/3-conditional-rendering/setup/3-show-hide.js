import React, { useState, useEffect } from "react";

const ShowHide = () => {
  const [show, setShow] = useState(false);
  const Item = () => {
    const [size, setSize] = useState(window.innerWidth)

    const checkSize = () => {
      setSize(window.innerWidth);
    }

    useEffect(() => {
      window.addEventListener('resize', checkSize)
      return () => {
        window.removeEventListener('resize', checkSize)
      }
    }, [])

    // useEffect(() => {
    //   window.removeEventListener('resize', checkSize)
    // }, [])

    const itemStyling = { paddingTop: "2rem" };
    return (
      <div style={itemStyling}>
        <h2>Window</h2>
        <h4>size: {size} px</h4>
      </div>
    );
  };

  return (
    <>
      <button className="btn" onClick={() => setShow(!show)}>
        show/hide
      </button>
      {show && <Item />}
    </>
  );
};

export default ShowHide;
