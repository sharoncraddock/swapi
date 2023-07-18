import useFetch from '../hooks/use-fetch'
import ListItem from './list-item'

function Starships(){
  const starships = useFetch('starships', '/starships');
  return (
    <>
      <section>
      <h1 className="text-gray-300 mt-6 mb-6 text-3xl font-bold text-center font-star-wars">Starships</h1>
      <hr />
       {starships?.isLoading && <p className="text-white text-xl">A moment please...</p>}
       {starships?.error && (
          <p className="text-white text-xl">
            There was an error fetching the data.
          </p>
       )}
       <ul role="list" class="divide-y divide-gray-100 rounded">
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