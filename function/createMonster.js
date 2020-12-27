const fs = require('fs')
const monster = (client) => {
    function writingDot() {
        fs.appendFileSync('./assets/npc/hostile.json', ",")
    }
    function createMonster(name, difficulty, category, exp, po, vita, consti, force, agi, intel) {
        let monster = {
            name: name,
            difficulty: difficulty,
            category: category,
            type: "hostile",
            experience: exp,
            po: po,
            stats: {
                vitality: vita,
                constitution: consti,
                strength: force,
                agility: agi,
                intelligence: intel
            }
        };
        let data = JSON.stringify(monster, null, 2);
        fs.appendFileSync('./assets/npc/hostile.json', data)
    }
    fs.appendFileSync('./assets/npc/hostile.json', "[")
    createMonster("Slime", 0, "Monster", 5, 10, 10, 1, 1, 0, 0);
    writingDot();
    createMonster("Goblin", 0, "Monster", 10, 12, 8, 0, 2, 1, 0);
    writingDot();
    createMonster("Wildboar", 1, "Monster", 10, 10, 10, 2, 3, 2, 1);
    writingDot();
    createMonster("Cave Spider", 1, "Monster", 10, 18, 10, 2, 3, 5, 2);
    writingDot();
    createMonster("Wolf", 2, "Monster", 25, 25, 15, 8, 5, 10, 5);
    writingDot();
    createMonster("Skeleton", 2, "Monster", 30, 20, 10, 14, 5, 1, 1);
    writingDot();
    createMonster("Shadow", 2, "Monster", 30, 28, 10, 14, 5, 10, 5);
    writingDot();
    createMonster("Ogre", 3, "Monster", 30, 28, 20, 5, 7, 5, 5);
    writingDot();
    createMonster("Giant Mantis", 3, "Monster", 45, 30, 25, 5, 7, 3, 7);
    writingDot();
    createMonster("Orc", 3, "Monster", 65, 50, 50, 12, 15, 5, 5);
    writingDot();
    createMonster("Phantomtooth", 4, "Monster", 100, 90, 60, 20, 20, 10, 10)
    writingDot();
    createMonster("Vaporhag", 4, "Monster", 125, 95, 65, 25, 18, 15, 15);
    writingDot();
    createMonster("Gloomfang", 4, "Monster", 150, 100, 70, 22, 22, 20, 15);
    writingDot();
    createMonster("Taintscreamer", 4, "Monster", 150, 100, 65, 25, 25, 20, 20);
    writingDot();
    createMonster("Cryptsoul", 4, "Monster", 175, 115, 70, 25, 25, 20, 20);
    writingDot();
    createMonster("Mimic", 5, "Monster", 300, 250, 500, 35, 15, 0, 50);
    writingDot();
    createMonster("Zombie", 5, "Monster", 250, 130, 80, 22, 30, 5, 2);
    writingDot();
    createMonster("Becale", 6, "Monster", 300, 250, 100, 30, 50, 30, 20);
    writingDot();
    createMonster("Sopurenne", 6, "Monster", 325, 270, 150, 35, 40, 30, 30);
    writingDot();
    createMonster("Dark timilo", 7, "Monster", 350, 3300, 190, 40, 50, 30, 35);
    writingDot();
    createMonster("King Slime", 10, "Boss", 1000, 500, 500, 40, 45, 20, 50);
    writingDot();
    createMonster("Giant armored cave spider", 10, "Boss", 1100, 500, 50, 45, 45, 80, 50);
    writingDot();
    createMonster("King Kobold Lord", 11, "Boss", 1500, 510, 520, 40, 43, 80, 100);
    writingDot();
    createMonster("Moonlight cat", 11, "Boss", 1500, 510, 510, 40, 40, 150, 90);
    writingDot();
    createMonster("Orc Disaster", 15, "Boss", 2000, 1000, 800, 80, 65, 35, 200);
    writingDot();
    createMonster("Elyon", 16, "Boss", 2300, 1300, 1000, 150, 150, 300, 300);
    writingDot();
    createMonster("Dracula", 16, "Boss", 2500, 1500, 1200, 100, 200, 500, 900);
    writingDot();
    createMonster("Bowser", 16, "Boss", 2500, 1500, 1200, 100, 200, 300, 600);
    writingDot();
    createMonster("Fake Kami", 20, "Boss", 3500, 5000, 1500, 300, 300, 1000, 1000);
    writingDot();
    createMonster("Shogun", 30, "Boss", 5000, 10000, 2000, 300, 350, 1500, 2000);
    writingDot();
    createMonster("The Gleam Eyes", 40, "Boss", 10000, 30000, 4000, 200, 500, 1000, 2500);
    writingDot();
    createMonster("Hellwraith", 50, "Monster", 15000, 35000, 5000, 280, 500, 3000, 2000);
    writingDot();
    createMonster("Vampmask", 60, "Monster", 20000, 40000, 5000, 300, 600, 3000, 6000);
    writingDot();
    createMonster("Dreadfang", 70, "Monster", 25000, 48000, 6500, 280, 750, 4000, 4000);
    writingDot();
    createMonster("Hellstep", 80, "Monster", 28000, 55000, 8000, 450, 800, 6000, 3000);
    writingDot();
    createMonster("Wispling", 90, "Monster", 30000, 80000, 10000, 500, 750, 1000, 8000);
    writingDot();
    createMonster("Kae", 100, "Calamity", 100000, 100000, 10000, 1000, 1000, 6000, 6000);
    writingDot();
    createMonster("Charybdis", 100, "Calimity", 100000, 100000, 10000, 1000, 1000, 1000, 10000);
    writingDot();
    createMonster("Yuusha", 250, "Héro", 200000, 500000, 25000, 1500, 1500, 10000, 10000);
    writingDot();
    createMonster("Demon Lord", 250, "Démon", 215000, 500000, 25000, 1300, 2000, 10000, 10000);
    writingDot();
    createMonster("Kami", 500, "Divinity", 1000000, 1000000, 50000, 3000, 3000, 10000, 10000);

    fs.appendFileSync('./assets/npc/hostile.json', "]")
}

module.exports = {
    monster
}