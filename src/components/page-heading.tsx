interface pageHeadingProps {
  text: string;
}

function PageHeading({text}:pageHeadingProps){
  return (
    <h1 className="text-gray-300 mt-6 mb-6 text-3xl font-bold text-center font-star-wars">
      {text}
    </h1>
  )
}

export default PageHeading