interface ListItemDataProps {
  listItemData: {
    [key:string]: string
  }
}

function ListItem({listItemData}:ListItemDataProps){
  return (
    <div className="text-white mb-6">
      <p>Name: { listItemData?.name }</p>
      <p>Manufacturer: { listItemData?.manufacturer }</p>
      <p>Max Speed: { listItemData?.max_atmosphering_speed }</p>
      <p>Number of Crew: { listItemData?.crew }</p>
      <p>Number of Passengers: { listItemData?.passengers }</p>
    </div>
  )
}

export default ListItem