const name = document.getElementById('character-name');
const level = document.getElementById('character-level');

const hps = document.getElementById('stat-hps');
const power = document.getElementById('stat-pwr');
const attack = document.getElementById('stat-atk');
const move = document.getElementById('stat-mov');
const defend = document.getElementById('stat-def');
const chr = document.getElementById('stat-chr');


function character_info(/**destructure object**/) {
    const healthPercentage = (health / maxHealth) * 100;
    document.getElementById('health-bar-fill').style.width = healthPercentage + '%';
    document.getElementById('health-value').textContent = `${health} / ${maxHealth}`;
    
    document.getElementById('inventory-info').textContent = inventory.join(', ');
    document.getElementById('character-gold').textContent = gold;

    /* do your code here */
function character_info({ name: charName, level: charLevel, health, maxHealth, stats, inventory, gold }) {
    const healthPercentage = (health / maxHealth) * 100;
    document.getElementById('health-bar-fill').style.width = healthPercentage + '%';
    document.getElementById('health-value').textContent = `${health} / ${maxHealth}`;
    
    document.getElementById('inventory-info').textContent = inventory.join(', ');
    document.getElementById('character-gold').textContent = gold;

    name.textContent = charName;
    level.textContent = charLevel;

    hps.textContent = stats.hps;
    power.textContent = stats.pwr;
    attack.textContent = stats.atk;
    move.textContent = stats.mov;
    defend.textContent = stats.def;
    chr.textContent = stats.chr;
    }
}

// Example usage
// You can change here to
character_info({
    name: "Nogaru",
    level: 4,
    health: 75,
    maxHealth: 100,
    stats: {
        hps: 21,
        pwr: 16,
        atk: 7,
        mov: 3,
        def: 8,
        chr: '10%'
    },
    inventory: ["Potion", "Sword", "Shield"],
    gold: 420000,
});