export const addAdress = (adress, adress_txt) => {
    console.log("text:" + adress_txt)
    let newAdressArray = adress.slice()
    return {
        type: 'ADDADRESS',
        adress: [...newAdressArray,
        {
            key: adress.length.toString(),
            adress_txt: adress_txt,
            thumbnail: "https://www.cityscan.fr/api/maps/thumbnail/lat=44,581078&lon=6,107564&height=180&width=352",
            liked: false,
            premium: false,
            selected: false
        }
        ]
    }
};

export const removeAdress = (adress, index) => {
    let newAdressArray = adress.slice(0, index).concat(adress.slice(index + 1, adress.length))
    for (let i = 0; i < newAdressArray.length; i++) {
        newAdressArray[i] = { key: i.toString(), adress_txt: newAdressArray[i].adress_txt, thumbnail: newAdressArray[i].thumbnail, liked: newAdressArray[i].liked, premium: newAdressArray[i].premium, selected: newAdressArray[i].selected }
    }

    return {
        type: 'REMOVEADRESS',
        adress: newAdressArray
    }
};

export const toggleAdress = (adress, index) => {
    let newAdressArray = adress.slice()
    for (let i = 0; i < newAdressArray.length; i++) {
        newAdressArray[i] = { key: newAdressArray[i].key, adress_txt: newAdressArray[i].adress_txt , thumbnail: newAdressArray[i].thumbnail,  liked: newAdressArray[i].liked, premium: newAdressArray[i].premium, selected: false }
        if (i === index) {
            newAdressArray[index] = { key: newAdressArray[index].key, adress_txt: newAdressArray[index].adress_txt , thumbnail: newAdressArray[i].thumbnail, liked: newAdressArray[index].liked, premium: newAdressArray[i].premium, selected: true }
        }
    }
    return {
        type: 'TOGGLEADRESS',
        adress: newAdressArray
    }
};

export const toggleLiked = (adress, index) => {
    let newAdressArray = adress.slice()
            newAdressArray[index] = { key: newAdressArray[index].key, adress_txt: newAdressArray[index].adress_txt , thumbnail: newAdressArray[index].thumbnail, liked: !newAdressArray[index].liked, premium: newAdressArray[index].premium, selected: newAdressArray[index].selected }
    return {
        type: 'TOGGLELIKED',
        adress: newAdressArray
    }
};


export const togglePremium = (adress, index) => {
    let newAdressArray = adress.slice()
            newAdressArray[index] = { key: newAdressArray[index].key, adress_txt: newAdressArray[index].adress_txt , thumbnail: newAdressArray[index].thumbnail, liked: newAdressArray[index].liked, premium: !newAdressArray[index].premium, selected: newAdressArray[index].selected }
    return {
        type: 'TOGGLEPREMIUM',
        adress: newAdressArray
    }
};