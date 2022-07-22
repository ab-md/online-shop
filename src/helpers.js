import Swal from "sweetalert2";

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

const myToast = (icon, title) => {
    Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    }).fire({
        icon,
        title
    })
}

const myAlert = (icon, title) => {
    Swal.fire({
        title,
        icon,
        showConfirmButton: true,
        toast: false,
        position: 'center',
    })
}

export {
    isInCart,
    qtyCount,
    shorten,
    myToast,
    myAlert,
}