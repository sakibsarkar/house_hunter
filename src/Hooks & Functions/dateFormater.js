export const formateDate = (date) => {
    //  date = yyyy-mm-dd
    const dateArray = date.split("-")
    const formatedDate = `${dateArray[2]}/${dateArray[1]}/${dateArray[0]}`
    return formatedDate
}