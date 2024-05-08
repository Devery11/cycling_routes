const API_URL = 'http://localhost:4000/sendRoutes';

export async function getRoutesFromServer() {
    const response = await fetch(API_URL);

    return response.json();
}

export async function getDisasters(page: number) {
    const response = await fetch(`https://api.disastercheckin.app/v1/events?page=${page}`,
        {
            headers: new Headers({'Authorization': 'sk_live_cc74f606-008a-4dc5-bba4-7724d6746e6c'
        })
    });

    return response.json();
}
