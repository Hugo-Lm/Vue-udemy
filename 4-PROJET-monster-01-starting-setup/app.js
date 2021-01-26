calculRandomValue = function(min, max) {
  return Math.floor(Math.random()*(max - min) + min)
};

const app = Vue.createApp({
  data() {
    return {
      playerHealth: 100,
      monsterHealth: 100, 
      actualRound: 0,
      gameStatus: null,
      roundLogs: []
    }
  },
  watch: {
    playerHealth(value) {
      if (value <= 0 && this.monsterHealth <= 0) {
        this.gameStatus = 'draw'
      } else if (value <= 0) {
        this.gameStatus = 'lost';
      } 
    },
    monsterHealth(value) {
      if (value <= 0 && this.playerHealth <= 0) {
        this.gameStatus = 'draw'
      } else if (value <= 0) {
        this.gameStatus = 'won';
      } 
    }
  },
  computed: {
    monsterBarStyle() {
      return {width: this.monsterHealth + '%'}
    },
    playerBarStyle() {
      return {width: this.playerHealth + '%'}
    },
    disableSpecialAttack() {
      return this.actualRound % 3 !== 0
    }
  },
  methods: {
    playerAttack() {
      this.actualRound ++;
      const attackValue = calculRandomValue(5, 15);
      this.monsterHealth -= attackValue;
      this.monsterAttack();
      this.roundLogs.unshift({who: 'player', what: 'attack', value: attackValue})
    },
    monsterAttack() {
      const attackValue = calculRandomValue(10, 18);
      this.playerHealth -= attackValue
      this.roundLogs.unshift({who: 'monster', what: 'attack', value: attackValue})
    },
    specialAttack() {
      this.actualRound ++;
      const attackValue = calculRandomValue(10, 20);
      this.monsterHealth -= attackValue;
      this.monsterAttack()
      this.roundLogs.unshift({who: 'player', what: 'spe', value: attackValue})
    },
    playerHeal() {
      this.actualRound ++;
      const healValue = calculRandomValue(12, 23);
      if (this.playerHealth + healValue <= 100) {
        this.playerHealth += healValue;
      }
      this.monsterAttack()
      this.roundLogs.unshift({who: 'player', what: 'heal', value: healValue})
    },
    surrenderGame() {
      this.gameStatus = 'lost'
      this.playerHealth = 0
    },
    reloadGame() {
      this.gameStatus = null
      this.playerHealth = 100
      this.monsterHealth = 100
      this.actualRound = 0
    }
  },
});

app.mount('#game');