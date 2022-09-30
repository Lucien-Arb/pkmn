export class Fight {
    constructor(pkmnEnnemi, myPkmn) {
        this.pkmnEnnemi = pkmnEnnemi;
        this.myPkmn = myPkmn;
        this.fightTextZone = document.getElementById('fight-text-zone');
        console.log("Fight : ", pkmnEnnemi, myPkmn)

        let attack1 = document.getElementById('attack-1');
        let attack2 = document.getElementById('attack-2');
        let attack3= document.getElementById('attack-3');
        let attack4 = document.getElementById('attack-4');

        attack1.innerText = this.myPkmn.moves[0].move.name;
        attack2.innerText = this.myPkmn.moves[1].move.name;
        attack3.innerText = this.myPkmn.moves[2].move.name;
        attack4.innerText = this.myPkmn.moves[3].move.name;
    }

    whosFirst () {
        console.log("vitesse ennemi : " , this.pkmnEnnemi.stats[5].base_stat)
        console.log("vitesse moi : " , this.myPkmn.stats[5].base_stat)
        console.log('#################')

        if (this.pkmnEnnemi.stats[5].base_stat < this.myPkmn.stats[5].base_stat) {
            this.fightTextZone.innerText = "It's your turn ! Pokemon attack !"
            this.myPkmnAttack()
        } else {
            this.fightTextZone.innerText = "The ennemi attack ! Get prepared !"
            this.ennemiAttack()
        }
    }

    myPkmnAttack () {
        let myAttack = (e) => {
            if (e.path[0].id == "attack-1" || e.path[0].id == "attack-2" || e.path[0].id == "attack-3" || e.path[0].id == "attack-4") {
                let attack = this.myPkmn.stats[1].base_stat;
                let defEnnemi = this.pkmnEnnemi.stats[2].base_stat;
                let hpEnnemiBasic = document.getElementById('ennemiHP');
                let hpEnnemi = document.getElementById('ennemiHP').textContent;
                let dmg = null;
                let hpMAJ = null;

                if (defEnnemi <= attack) {
                    console.log("dmg 1 : ", attack - defEnnemi);
                    dmg = attack - defEnnemi;
                    console.log(parseInt(hpEnnemi), hpEnnemi, parseInt(dmg))
                    if (parseInt(hpEnnemi) < parseInt(dmg)) {
                        hpMAJ = 0;
                        console.log("IF hp maj : ", hpMAJ)
                        hpEnnemiBasic.innerText = hpMAJ.toString()
                        console.log(hpEnnemiBasic)
                    } else if (parseInt(hpEnnemi) > parseInt(dmg)) {
                        hpMAJ = hpEnnemi - dmg;
                        console.log("ELSE hp maj : ", hpMAJ)
                        hpEnnemiBasic.innerText = hpMAJ.toString()
                        console.log(hpEnnemiBasic)
                    }
                } else {
                    console.log("dmg 2 : 0")
                    hpMAJ = 0
                    console.log("dmg 2 => hp maj : ", hpMAJ)
                    hpEnnemiBasic.innerText = hpMAJ.toString()
                    console.log(hpEnnemiBasic)
                }
            }
        }

        document.onclick = myAttack;

    }

    ennemiAttack () {
        let attackEnnemi = this.pkmnEnnemi.stats[2].base_stat;
        let myDef = this.myPkmn.stats[1].base_stat;
        let dmgEnnemi = null

        if (myDef <= attackEnnemi) {
            console.log("Ennemi dmg 1 : ", attackEnnemi - myDef)
            return dmgEnnemi = attackEnnemi - myDef
        } else {
            console.log("Ennemi dmg 2 : 0")
            return dmgEnnemi = 0
        }
    }

}

