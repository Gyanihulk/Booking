import React from 'react'
import Datatable from '../../../Components/datatable/Datatable'

import Sidebar from '../../../Components/sidebar/Sidebar'
import "./list.scss"
const List1 = ({columns}) => {
  return (
    <div className="list">
       <Sidebar/>
       
      <div className="listContainer">
      <Datatable columns={columns}/>
      </div>
    </div>
  )
}

export default List1