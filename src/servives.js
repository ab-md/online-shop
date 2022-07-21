const isInCart = (item, id) => {
    const result = !!item.find(it => it.id === id);
    return result;
}

const qtyCount = (item, id) => {
    const index = item.findIndex(it => it.id === id);
    if (index === -1) return false;
    return item[index].qty;
}

const shorten = (item) => {
    const splited = item.split(" ");
    return `${splited[0]} ${splited[1]}`;
}

export {
    isInCart,
    qtyCount,
    shorten,
}