document.addEventListener('DOMContentLoaded', function () {
    let leaderboardData = [
        { position: 1, teamName: 'Team A', points: 100 },
        { position: 2, teamName: 'Team B', points: 90 },
        { position: 3, teamName: 'Team C', points: 80 },
        // Add more data as needed
    ];

    function populateLeaderboard() {
        const leaderboardTable = document.querySelector('table tbody');
        leaderboardTable.innerHTML = '';

        leaderboardData.forEach(entry => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${entry.position}</td>
                <td>${entry.teamName}</td>
                <td>${entry.points}</td>
            `;
            leaderboardTable.appendChild(row);
        });
    }

    function updateTeamProgress(team) {
        const teamNameElement = document.getElementById('teamName');
        const teamPointsElement = document.getElementById('teamPoints');
        const teamRankElement = document.getElementById('teamRank');

        teamNameElement.textContent = `Team Name: ${team.teamName}`;
        teamPointsElement.textContent = `Points: ${team.points}`;
        teamRankElement.textContent = `Rank: ${team.position}`;
    }

    function addTeamAndUpdateTable(team) {
        leaderboardData.push(team);
        populateLeaderboard();
        updateTeamProgress(team);
    }

    // Button click event to add three sample teams
    const addTeamsButton = document.getElementById('addTeamButton');
    addTeamsButton.addEventListener('click', function () {
        const team1 = { position: 4, teamName: 'Team D', points: 75 };
        const team2 = { position: 5, teamName: 'Team E', points: 70 };
        const team3 = { position: 6, teamName: 'Team F', points: 65 };

        // Add three sample teams
        addTeamAndUpdateTable(team1);
        addTeamAndUpdateTable(team2);
        addTeamAndUpdateTable(team3);
    });

    // Initial population of leaderboard
    populateLeaderboard();
});
