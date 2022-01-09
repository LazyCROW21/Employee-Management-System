<template>
  <div class="border-bottom">
    <button
      class="itemBtn text-start"
      type="button"
      data-bs-toggle="collapse"
      :data-bs-target="'#' + data['id']"
      aria-expanded="false"
      :aria-controls="data['id']"
    >
      <i :class="data['icon']"></i>
      <span class="ms-2">{{ data["title"] }}</span>
    </button>

    <div class="collapse" :id="data['id']">
      <ul class="text-dark m-0 p-0">
        <li
          class="snlItem m-1"
          v-for="(item, i) in data['items']"
          v-bind:key="i"
        >
          <router-link :to="item['url']">
            {{ item["text"] }}
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "SideNavItem",
  props: ["data"],
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
  text-decoration: none;
  color: black;
}
.snlItem {
  overflow: hidden;
  height: 3rem;
  padding: 1rem;
  border-radius: 1rem;
}
.snlItem:hover {
  background-color: lightgray;
}
.itemBtn {
  border: 0;
  width: 100%;
  padding: 0.5rem;
}
.slideOpen-enter-active,
.slideOpen-leave-active {
  transition: max-height 400ms linear;
}
</style>
