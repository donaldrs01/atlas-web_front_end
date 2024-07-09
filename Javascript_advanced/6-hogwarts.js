const studentHogwarts = function() {
    let name = null;
    let privateScore = 0;

    function changeScoreBy(points) {
        // Add points to student's private score
        privateScore += points;
    }

    return {
        // Updates private variable 'name'
        setName: (newName) => {
            name = newName;
        },
        rewardStudent: () => {
            changeScoreBy(1);
        },
        penalizeStudent: () => {
            changeScoreBy(-1);
        },
        getScore: () => {
            return `${name}: ${privateScore}`;
        }
    };
}
// Student Examples
const harry = studentHogwarts();
harry.setName("Harry");
harry.rewardStudent();
harry.rewardStudent();
harry.rewardStudent();
harry.rewardStudent();
console.log(harry.getScore());

const draco = studentHogwarts();
draco.setName("Draco");
draco.rewardStudent();
draco.penalizeStudent();
draco.penalizeStudent();
draco.penalizeStudent();
console.log(draco.getScore());