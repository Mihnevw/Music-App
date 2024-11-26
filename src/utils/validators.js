export const albumIsInvalid = (albumData) => {
    const requiredFields = [
    'name',
    'imgUrl',
    'price',
    'releaseDate',
    'artist',
    'description',
    ];

    return requiredFields.some(x => !albumData[x]) // Това казва всекя една променлива да влезе и да види дали има положителна стойност в albumData
}