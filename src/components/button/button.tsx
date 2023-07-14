import React, { CSSProperties } from 'react'

type BtnStyles={btnStyles?:CSSProperties,
    label:string
    onClick?:() => any
}

const Button = (props:BtnStyles ) => {

  return (
    <button style={props?.btnStyles} onClick={()=>{ props.onClick && props?.onClick()}}>
      {props.label}
    </button>
  );

}

export default Button