// Buscar os link salvos.

export async function getLinksSaves(key) {
    const myLinks = await localStorage.getItem(key);
    let linksSaves = JSON.parse(myLinks) || [];
    return linksSaves;
}

// Salvar um link no storage

export async function saveLink(key, newLink) {
    let linksStored = await getLinksSaves(key);

    const hasLink = linksStored.some(link => link.id === newLink.id);

    if (hasLink) {
        console.log("esse link já existe");
        return;
    }

    linksStored.push(newLink);
    await localStorage.setItem(key, JSON.stringify(linksStored));
    console.log("link salvo com sucesso");

}




// deletar um link 

export function deleteLink(links, id) {
    let myLinks = links.filter(item => {
        return (item.id !== id);
    });

    localStorage.setItem('@encurtalink', JSON.stringify(myLinks));

    return myLinks;
}