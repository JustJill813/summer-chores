function mowYard(name, callback) {
    setTimeout(() => {
        console.log(`${name} mowed the yard.`);
        callback(true); // Always succeeds
    }, 2000);
}

function weedEat(name, callback) {
    setTimeout(() => {
        if (Math.random() > 0.2) { // 80% chance of success
            console.log(`${name} finished using the weed eater.`);
            callback(true);
        } else {
            console.log(`${name} fell asleep after mowing the yard.`);
            callback(false);
        }
    }, 1500);
}

function trimHedges(name, callback) {
    setTimeout(() => {
        if (Math.random() > 0.3) { // 70% chance of success
            console.log(`${name} finished trimming the hedges.`);
            callback(true);
        } else {
            console.log(`${name} fell asleep after weed eating the yard.`);
            callback(false);
        }
    }, 1000);
}

function collectWood(name, callback) {
    setTimeout(() => {
        if (Math.random() > 0.4) { // 60% chance of success
            console.log(`${name} finished collecting wood.`);
            callback(true);
        } else {
            console.log(`${name} fell asleep after trimming the hedges.`);
            callback(false);
        }
    }, 2500);
}

function waterGarden(name, callback) {
    setTimeout(() => {
        if (Math.random() > 0.5) { // 50% chance of success
            console.log(`${name} finished watering the garden.`);
            console.log(`${name} finished all their chores!`);
            callback(true);
        } else {
            console.log(`${name} fell asleep after collecting wood.`);
            callback(false);
        }
    }, 500);
}

function doSummerChores(name) {
    mowYard(name, (success) => {
        if (!success) return;
        weedEat(name, (success) => {
            if (!success) return;
            trimHedges(name, (success) => {
                if (!success) return;
                collectWood(name, (success) => {
                    if (!success) return;
                    waterGarden(name, () => {});
                });
            });
        });
    });
}


doSummerChores("Jill");
