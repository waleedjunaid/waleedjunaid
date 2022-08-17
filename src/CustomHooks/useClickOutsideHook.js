// import React, { useRef, useEffect } from "react";

// /**
//  * Hook that alerts clicks outside of the passed ref
//  */
// function useOutsideAlerter(ref, submit) {
//   useEffect(() => {
//     /**
//      * Alert if clicked on outside of element
//      */
//     function handleClickOutside(event) {
//       if (ref.current && !ref.current.contains(event.target)) {
//         submit();
//       }
//     }

//     // Bind the event listener
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       // Unbind the event listener on clean up
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, [ref]);
// }

// /**
//  * Component that alerts if you click outside of it
//  */
// export default function UseOutsideRefHook(props) {
//   const wrapperRef = useRef(null);
//   useOutsideAlerter(wrapperRef, props.onSubmit);

//   return (
//     <div
//       ref={wrapperRef}
//       onClick={props.onSubmit}
//       style={{ backgroundColor: "red" }}
//     >
//       {props.children}
//     </div>
//   );
// }

import React, { useRef, useEffect } from "react";
import ReactDOM from "react-dom";

const useClickOutsideHook = (handler) => {
  const ref = useRef();

  useEffect(() => {
    const listener = (event) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }

      handler(event);
    };

    document.addEventListener("click", listener);

    return () => document.removeEventListener("click", listener);
  }, [ref, handler]);

  return [ref];
};

export default useClickOutsideHook;
