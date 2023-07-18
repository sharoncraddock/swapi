import useFetch from '../hooks/use-fetch'
import ListItem from './list-item'
import PageHeading from './page-heading'

function Starships(){
  const starships = useFetch('starships', '/starships');

  return (
    <>
      <section>
      <PageHeading text="Starships" />
       {starships?.isLoading && <p className="text-white text-md">A moment please...</p>}
       {starships?.error as React.ReactNode && (
          <p className="text-white text-xl">
            There was an error fetching the data.
          </p>
       )}
       <ul role="list" className="divide-y divide-gray-200">
         {starships?.data?.data?.results &&
           starships?.data?.data?.results?.map(
            (starship:{[key:string]: string}, index:number) => {
              return (
                <ListItem 
                  key={index} 
                  listItemData={starship} 
                />
              )
           })
         }
       </ul>
      </section>
    </>
  )
}

export default Starships