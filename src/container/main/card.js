const card =({img, alt}) =>{
    return( <>
                <div className="w-70 m-3">
                    <img src={img} className="card-img-top" alt={alt} />
                </div>  
            </>)
}

export default card;