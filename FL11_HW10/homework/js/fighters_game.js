class Fighter {

    constructor(fighterObject) {
        // fool workaround of encapsulation in JS
        let _name = fighterObject.name;
        let _damage = fighterObject.damage;
        let _hp = fighterObject.hp;
        let _agility = fighterObject.agility;
        let _wins = 0;
        let _losses = 0;

        //required for heal calculation
        let totalHp = _hp;

        this.setName = function (name) {
            _name = name;
        }

        this.getName = function () {
            return _name;
        }

        this.setDamage = function (damage) {
            _damage = damage;
        }

        this.getDamage = function () {
            return _damage;
        }

        this.setHealth = function (hp) {
            _hp = hp;
        }

        this.getHealth = function () {
            return _hp;
        }

        this.setAgility = function (agility) {
            _agility = agility;
        }

        this.getAgility = function () {
            return _agility;
        }

        this.attack = function (opponent) {

            //magic numbers warning dummy fix
            let aHundredPercent = 100;

            let probability = aHundredPercent - opponent.getAgility();
            let randomChance = parseInt(Math.random() * aHundredPercent);

            if (randomChance <= probability) {
                opponent.dealDamage(_damage);
                console.log(_name + ' makes ' + _damage + ' to ' + opponent.getName());
            } else {
                console.log(_name + ' attack missed ');
            }
        }

        this.dealDamage = function (inputDamage) {
            _hp -= inputDamage;
            if (_hp < 0) {
                _hp = 0;
            }
        }

        this.heal = function (amount) {
            let totalHealed = _hp + amount;

            if (totalHealed > totalHp) {
                _hp = totalHp;
            } else {
                _hp = totalHealed;
            }
        }

        this.logCombatHistory = function () {
            console.log(_name + ', Wins: ' + _wins + ', Losses: ' + _losses);
        }

        this.addWin = function () {
            _wins++;
        }

        this.addLoss = function () {
            _losses++;
        }
    }

}

function battle(fighter1, fighter2) {

    // pre-check
    if (fighter1.getHealth() === 0) {
        console.log(fighter1.getName() + ' is dead and can\'t fight');
        return;
    } else if (fighter2.getHealth() === 0) {
        console.log(fighter2.getName() + ' is dead and can\'t fight');
        return;
    }

    while (fighter1.getHealth() !== 0 || fighter2.getHealth() !== 0) {
        fighter1.attack(fighter2);
        if (fighter2.getHealth() === 0) {
            fighter1.addWin()
            fighter2.addLoss()
            return;
        }
        fighter2.attack(fighter1);
        if (fighter1.getHealth() === 0) {
            fighter2.addWin()
            fighter1.addLoss()
            return;
        }
    }

}
