"use server";

interface User {
	id: string;
	name: string;
	email: string;
	phone: string;
	isVerified: boolean;
	rollNo: string;
	verifyImage: string;
	gender: string;
	foodPreference: string;
	shirtSize: string;
}

async function getTeams(event: string) {
    try {
        const response = await fetch(`http://localhost:3000/api/teams/${event}`, {
            next: {
                revalidate: 0
            },
            method: "GET",
            headers: {
                "Content-type": "application/json"
            }
        });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const teams = await response.json();
        return teams;
    } catch (error) {
        console.error('Error fetching teams:', error);
        throw error;
    }
}

async function deleteTeam(teamId: string) {
	await fetch(`http://localhost:3000/api/teams/${teamId}`, {
        next: {
            revalidate: 10
        },
		method: "DELETE",
		headers: {
			"Content-type": "application/json",
		}
	});
}

async function editUserReq(user: User){
    const data = await fetch(`http://localhost:3000/api/users/${user.id}`,{
        method: 'PUT',
        body: JSON.stringify(user),
        cache: "no-store"
    })
    return (await data.json());
}

export { getTeams, deleteTeam, editUserReq };
