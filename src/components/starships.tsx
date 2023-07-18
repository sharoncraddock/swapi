import useFetch from '../hooks/use-fetch'
import ListItem from './list-item'

function Starships(){
  const starships = useFetch('starships', '/starships');
  return (
    <>
      <section>
      <h1 className="text-white mt-6 mb-6">You are on the Starships Page</h1>
      <hr />
       {starships?.isLoading && <p className="text-white text-xl">A moment please...</p>}
       {starships?.error && (
          <p className="text-white text-xl">
            There was an error fetching the data.
          </p>
       )}
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
      </section>
    </>
  )
}

export default Starships