import { menampilkanDetailBuku, menampilkanSemuaBuku, menghapusDataBuku, mengubahDataBuku, menyimpanBuku } from "./handler";

const routes = [
    {
        method: 'POST',
        url: '/books',
        bodyRequest: menyimpanBuku
    },
    {
        method: 'GET',
        url: '/books',
        bodyRequest: menampilkanSemuaBuku
    },
    {
        method: 'GET',
        url: '/books/{bookId}',
        bodyRequest: menampilkanDetailBuku
    },
    {
        method: 'PUT',
        url: '/books/{bookId}',
        bodyRequest: mengubahDataBuku
    },
    {
        method: 'DELETE',
        url: '/books/{bookId}',
        bodyRequest: menghapusDataBuku
    }
]