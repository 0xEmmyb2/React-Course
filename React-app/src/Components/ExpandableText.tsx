import React, { useState } from 'react'

interface Props {
  children: string;
  maxChars? : number;
}

const ExpandableText = ({children, maxChars=100}: Props) => {
  const [isExpanded, setExpanded] = useState(false);
    if(children.length <= maxChars) return <p>{children}</p>

    const text = children.substring(0, maxChars);
  return (
    <p>{text}... <button>{}</button></p>
  )
};

export default ExpandableText;