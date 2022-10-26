Vue.createApp({
  data() {
    return {
      isNight: false,
    };
  },
  computed: {
    documentTitle() {
      return this.isNight ? "Good Night" : "GoodMorning";
    },
  },
  methods: {
    toggleTheLight() {
      this.isNight = !this.isNight;
      document.body.classList.toggle("body-night");
      document.title = this.documentTitle; //nur weil body außerhalb der vue-app liegt
    },
  },
}).mount("#app");
