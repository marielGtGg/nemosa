import { useState } from 'react'

export default function Collapsible({data}) {

  const {
    title,
    content
  } = data

  const [shown, setShown] = useState(false)

  const handleClick = () => {
    setShown(!shown)
  }

  return (
    <div className="collapsible">
      <div className="title" onClick={handleClick}>{title}</div>
      <div className={'content ' + (shown ? '' : 'hidden')}>
        {content.map((paragraph, index) => {return (<p key={index}>{paragraph}</p>)})}
      </div>
    </div>
  )
}
