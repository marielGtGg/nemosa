import {useState, useEffect, useRef} from 'react'

export default function Banner({scrollTop}) {
  const [style, setStyle] = useState({
    height: '100vh',
    fontSize: '7rem'
  })

  function setUpdate() {
    let newStyle = {
      height: '100vh',
      fontSize: '7rem'
    }
    if (scrollTop > 0) {
      newStyle = {
        height: '5vh',
        fontSize: '3rem'
      }
    } 
    setStyle(newStyle)
  }

  useEffect(() => {
    setUpdate()
  }, [scrollTop]);

  return (
    <>
      <div 
        id="banner"
        style={style}
        >
        <div>
          Nemosa
        </div>
      </div>
    </>
  )
}
