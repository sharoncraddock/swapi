interface PersonListItemDataProps {
  listItemData: {
    [key:string]: string
  }
}

function PersonListItem({listItemData}:PersonListItemDataProps){
  return (
    <li className="py-5 bg-white text-gray-900">
      <div className="text-center">
        <p className="text-lg font-bold">{ listItemData?.name }</p>
        <div className="mt-5">
          <p className="text-xs mt-1">
            <span className="font-bold">Birth Year:{' '}</span>
              { listItemData?.birth_year }
            mph
           </p>
          <p className="text-xs mt-1 ">
           <span className="font-bold">Gender:{' '}</span>
            { listItemData?.gender }
          </p>
          <p className="text-xs mt-1 ">
            <span className="font-bold">Hair Color:{' '}</span>
            { listItemData?.hair_color }
          </p>
          <p className="text-xs mt-1">
          <span className="font-bold">Eye Color:{' '}</span>
            { listItemData?.eye_color }
          </p>
        </div>
      </div>
    </li>
  )
}

export default PersonListItem