
 export const Rating = ({rating}) => {
    let ratingArray=Array(5).fill(false);
    for(let i=0;rating>i;i++){
        ratingArray[i]=true;
    }
  return (
    <>
      {ratingArray.map((value)=>(
        value ? (
            <i className="text-lg bi bi-star-fill text-yellow-500 mr-1"></i>
        ):(
            <i className="text-lg bi bi-star text-yellow-500 mr-1"></i>   
        )
      ))}
    </>
  )
}


