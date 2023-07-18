import useFetch from '../hooks/use-fetch'
import ListItem from './list-item'
import PageHeading from './page-heading'

function Vehicles(){
  const vehicles = useFetch('vehicles', '/vehicles');

  return (
    <>
      <section>
      <PageHeading text="Vehicles" />
       {vehicles?.isLoading && <p className="text-white text-md">A moment please...</p>}
       {vehicles?.error as React.ReactNode && (
          <p className="text-white text-xl">
            There was an error fetching the data.
          </p>
       )}
       <ul role="list" className="divide-y divide-gray-200 rounded">
         {vehicles?.data?.data?.results &&
           vehicles?.data?.data?.results?.map(
            (vehicle:{[key:string]: string}, index:number) => {
              return (
                <ListItem 
                  key={index} 
                  listItemData={vehicle} 
                />
              )
           })
         }
       </ul>
      </section>
    </>
  )
}

export default Vehicles