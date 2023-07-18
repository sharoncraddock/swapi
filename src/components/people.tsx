import useFetch from '../hooks/use-fetch'
import PersonListItem from './person-list-item'
import PageHeading from './page-heading'

function People(){
  const people = useFetch('people', '/people');

  return (
    <>
      <section>
      <PageHeading text="People" />
       {people?.isLoading && <p className="text-white text-md">A moment please...</p>}
       {people?.error as React.ReactNode && (
          <p className="text-white text-xl">
            There was an error fetching the data.
          </p>
       )}
       <ul role="list" className="divide-y divide-gray-100 rounded">
         {people?.data?.data?.results &&
           people?.data?.data?.results?.map(
            (person:{[key:string]: string}, index:number) => {
              return (
                <PersonListItem 
                  key={index} 
                  listItemData={person} 
                />
              )
           })
         }
       </ul>
      </section>
    </>
  )
}

export default People