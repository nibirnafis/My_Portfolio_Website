export const getRandomValues = (limit) => {
    const randomValue = Math.floor(Math.random() * limit)

    return randomValue
}

export const getRandomFloat = (limit) => {
    const randomValue = Number((Math.random() * limit).toFixed(1))

    return randomValue
}