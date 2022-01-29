import React, {  useRef } from 'react'
import { getAllData } from '../services/ApiService'


const Navbar = (props) => {
  const serchWord = useRef("")
  const clear = () => {
    serchWord.current.value = ""
  }
  const sort = () => {
    debugger
    const data = props.items
    const sortProperty = 'Title';
    const sorted = data.sort((a, b) => b[sortProperty] - a[sortProperty]);
    props.setData(sorted)
}
const refresh = () => {
  const data = getAllData()
  props.setData(data)
  clear()
}
const changeValue = () => {
  const data = []
  getAllData().map((item) => {
    item.Title.includes(serchWord.current.value) || item.Year.includes(serchWord.current.value) && data.push(item)
  })
  props.setData(data)
}
return (
  <>
    <nav id="navbar-example2" class="navbar navbar-light bg-light px-3">
      <ul class="nav nav-pills">
        <li class="nav-item">
          <input class="form-control" type="text" placeholder="Search filed" aria-label="default input example" ref={serchWord} onChange={changeValue} />
        </li>
        <li class="nav-item">
          <button type="button" class="btn btn-secondary ml-3" onClick={clear}>clear</button>
        </li>
        <li class="nav-item">
          <button type="button" class="btn btn-secondary ml-3" onClick={refresh}>refresh</button>
        </li>
        <li class="nav-item">
          <button type="button" class="btn btn-secondary ml-3" onClick={sort}>sort</button>
        </li>
      </ul>
    </nav>
  </>
)
}

export default Navbar
