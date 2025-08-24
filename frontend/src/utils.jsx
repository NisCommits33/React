export function getImageUrl(person, size = 's'){
    return(
        'https://o.imgur.com/' + person.imageId + size + '.jpg'
    );
}