import React from 'react'

interface Props {
  children: string;
}

const ExpandableText = ({children}: Props) => {
  return (
    <div>{children}</div>
  )
}

export default ExpandableText;