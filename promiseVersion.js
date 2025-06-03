function mowYard(name) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`${name} mowed the yard.`);
            resolve(true);
        }, 2000);
    });
}

function weedEat(name) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.2) {
                console.log(`${name} finished using the weed eater.`);
                resolve(true);
            } else {
                console.log(`${name} fell asleep after mowing the yard.`);
                reject(false);
            }
        }, 1500);
    });
}

function trimHedges(name) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.3) {
                console.log(`${name} finished trimming the hedges.`);
                resolve(true);
            } else {
                console.log(`${name} fell asleep after weed eating the yard.`);
                reject(false);
            }
        }, 1000);
    });
}

function collectWood(name) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.4) {
                console.log(`${name} finished collecting wood.`);
                resolve(true);
            } else {
                console.log(`${name} fell asleep after trimming the hedges.`);
                reject(false);
            }
        }, 2500);
    });
}

function waterGarden(name) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.5) {
                console.log(`${name} finished watering the garden.`);
                console.log(`${name} finished all their chores!`);
                resolve(true);
            } else {
                console.log(`${name} fell asleep after collecting wood.`);
                reject(false);
            }
        }, 500);
    });
}

function doSummerChores(name) {
    mowYard(name)
        .then(() => weedEat(name))
        .then(() => trimHedges(name))
        .then(() => collectWood(name))
        .then(() => waterGarden(name))
        .catch(() => console.log(`${name} couldn't complete all the chores.`));
}

doSummerChores("Jill");