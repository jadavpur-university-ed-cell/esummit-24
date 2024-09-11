"use server";

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

export { getTeams, deleteTeam };
