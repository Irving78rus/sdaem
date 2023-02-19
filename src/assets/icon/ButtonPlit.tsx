import React from 'react'

export default function ButtonPlit({ fill = '#EB5757' }) {
  return (
    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="0.5" y="0.5" width="5.44444" height="5.44444" rx="1" fill={fill} />
    <rect x="0.5" y="9.05469" width="5.44444" height="5.44444" rx="1" fill={fill}/>
    <rect x="9.05566" y="0.5" width="5.44444" height="5.44444" rx="1" fill={fill} />
    <rect x="9.05566" y="9.05469" width="5.44444" height="5.44444" rx="1" fill={fill} />
    </svg>
  )
}
