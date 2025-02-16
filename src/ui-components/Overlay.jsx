import { createPortal } from 'react-dom';

function Overlay({children,onClick,className}) {
  const classes = `overlay ${className?className:''}`
    return (
       createPortal (<div className={classes} onClick={onClick}>{children}</div>,document.getElementById('overlay'))
    )
}

export default Overlay
