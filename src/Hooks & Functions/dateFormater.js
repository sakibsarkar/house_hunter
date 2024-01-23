export const formateDate = (date) => {
    //  date = yyyy-mm-dd
    const dateArray = date.split("-")
    const formatedDate = `${dateArray[2]}/${dateArray[1]}/${dateArray[0]}`//dd/mm/yyyy
    return formatedDate
}


export const inputDateFormater = (date) => {
    // date = dd/mm/yyyy
    const dateArray = date.split("/")

    const formateDate = `${dateArray[2]}-${dateArray[1]}-${dateArray[0]}`//yyyy-mm-dd
    return formateDate

}