
const CategoriesCard = (category) => {


    return (
        <a href="https://www.speedyservices.com/hire/lighting" className="image-container">
            <img src={category?.imageUrl} title={category?.name} alt={category?.name} />
            <div className="image-tile-title w-90 m-auto">
                <span>{category?.name}</span>
                <i className="speedy-arrow-icon"><svg viewBox="0 0 20 12" width="20px" height="12px" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><g transform="matrix(1.111111, 0, 0, 1.111111, -2.228881, -3.083333)"><path d={category?.icon}></path></g></svg></i>
            </div>
        </a>
    )


}

export default CategoriesCard