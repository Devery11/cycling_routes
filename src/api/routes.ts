const API_URL = 'http://localhost:4000/sendRoutes';

export async function getRoutesFromServer() {
    const response = await fetch(API_URL);

    return response.json();
}

export async function getDisasters(page: number) {
    const response = await fetch(`https://api.disastercheckin.app/v1/events?page=${page}`, {
        headers: new Headers({'Authorization': 'sk_live_cfbeb2a2-5e56-429f-b84d-2756f4ed1c6d'
        })
    })



    return response.json();
}

console.log(getDisasters(3));
