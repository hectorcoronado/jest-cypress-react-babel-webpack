import React from 'react'
import PropTypes from 'prop-types'
import styles from './auto-scaling-text.module.css'

function getScale(node) {
  // in order to see the `debugger` below, run the test:debug
  // script and then open devtools via chrome://inspect

  // debugger
  // console.log(node)
  if (!node) {
    // console.log('in here')
    return 1
  }
  // console.log('not in there')
  const parentNode = node.parentNode

  const availableWidth = parentNode.offsetWidth
  const actualWidth = node.offsetWidth
  const actualScale = availableWidth / actualWidth

  if (actualScale < 1) {
    return actualScale * 0.9
  }
  return 1
}

function AutoScalingText({children}) {
  const nodeRef = React.useRef()
  const scale = getScale(nodeRef.current)
  return (
    <div
      className={styles.autoScalingText}
      style={{transform: `scale(${scale},${scale})`}}
      ref={nodeRef}
      data-testid="total"
    >
      {children}
    </div>
  )
}
AutoScalingText.propTypes = {
  children: PropTypes.node,
}

export default AutoScalingText
