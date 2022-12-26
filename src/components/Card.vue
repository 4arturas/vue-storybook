<template>
  <div class="card">
    <div class="media" :style="mediaBg" v-if="mediaHref"></div>
    <h4 class="title">{{ title }}</h4>
    <small class="secondary-text">{{ subText }}</small>
    <p class="supporting-text">{{supportingText}}</p>
    <div v-if="button">
      <a class="material-button">{{buttonText}}</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    title: String,
    subText: String,
    mediaHref: String,
    supportingText: String,
    button: Boolean,
    buttonText: String,
  },
  computed: {
    mediaBg() {
      return {
        backgroundImage: `url(${this.mediaHref})`,
      };
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.google.com/css2?faimly=Quicksand&display=swap");
.card {
  background-color: white;
  border-radius: 0.2rem;
  box-shadow: rgb(150, 150, 150) 0 1px 3px;
  width: 350px;
  padding: 0.8rem;
  font-family: "Quicksand", sans-serif;
}
.title,
.secondary-text {
  margin: 0.5rem auto 0.5rem auto;
}
.media {
  height: 200px;
}
.title {
  margin-bottom: 0;
}
.material-button {
  color: purple;
  background-color: #fdadfd;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: 0.3s all linear;
  font-weight: bold;
  padding: 0.5rem;
  cursor: pointer;
  border-radius: 25%;
}
.material-button:hover {
  background-color: red;
}
</style>
