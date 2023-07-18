interface ListItemDataProps {
  listItemData: {
    [key:string]: string
  }
}

function ListItem({listItemData}:ListItemDataProps){
  return (
    <li className="py-5 bg-white text-gray-900">
      <div className="text-center">
        <p className="text-lg font-bold">{ listItemData?.name }</p>
        <p className="text-xs">{ listItemData?.manufacturer }</p>

        <div className="mt-5">
          <p className="text-xs mt-1">
            <span className="font-bold">Max Speed:{' '}</span>
              { listItemData?.max_atmosphering_speed }
            mph
           </p>
          <p className="text-xs mt-1 ">
            <span className="font-bold">Crew Count:{' '}</span>
            { listItemData?.crew }
          </p>
          <p className="text-xs mt-1">
          <span className="font-bold">Passenger Count:{' '}</span>
            { listItemData?.passengers }
          </p>
        </div>
      </div>
    </li>
  )
}

export default ListItem