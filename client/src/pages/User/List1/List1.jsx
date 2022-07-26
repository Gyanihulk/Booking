import React from 'react'
import Datatable from '../../../Components/datatable/Datatable'

import Sidebar from '../../../Components/sidebar/Sidebar'
import "./list.scss"
const List1 = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        
      <Datatable/>
      </div>
      </div>
  )
}

export default List1