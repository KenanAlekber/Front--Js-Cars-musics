function Car(brand, model, currentFuel) {
    this.brand = brand;
    this.model = model;
    this.currentFuel = currentFuel;
}

let car = new Car('Range Rover', 'Vogue', 20)
console.log(car);

// ==================================================

class Cars {
    constructor(brand, model, currentFuel) {
        this.brand = brand;
        this.model = model;
        this.currentFuel = currentFuel;
    }

    refueling(length) {
        console.log(`${this.brand} is refueling now.`);
        this.currentFuel += length;
    }

    driving(length) {
        console.log(`${this.brand} is in motion.`);
        this.currentFuel -= length;
    }

    stopped() {
        console.log(`${this.brand} is stop.`);
    }
}

const rr = new Cars("Range Rover", 'Vogue', 10);
const honda = new Cars("Honda", 'Civic', 20);

console.log(rr.currentFuel);
rr.refueling(7);
console.log(rr.currentFuel);
rr.driving(5);
console.log(rr.currentFuel);
rr.stopped();


// ============================================================


class Playlist {
    constructor(songName, composerName, time) {
        this.songName = songName;
        this.composerName = composerName;
        this.time = time;
    }

    singsSong() {
        console.log('Sings a song');
    }

    songStopped() {
        console.log('The song stopped');
    }

    static longestSong(music) {
        const sortedByTime = music.sort((a, b) => {
            return a.time - b.time;
        })

        return sortedByTime[0].songName;
    }
}

const alaGozlum = new Playlist("Ala Gözlüm", 'Akif İslamzadə', 5.36);
const farytale = new Playlist("Fairytale", 'Alexander Rybak', 3.14);

console.log(alaGozlum.time);
alaGozlum.singsSong();
console.log(farytale.time);
farytale.songStopped();

console.log(Playlist.longestSong([alaGozlum, farytale]));