<template>
  <div class="content__options options">
    <label
    v-for="(opt,i) in optArr"
    :key="i"
    class="options__box"
    >
      <input
      @change="$emit('opt',i)"
      class="input-radio"
      type="radio"
      name="tab"
      :checked="i===0"
      />
      <div class="options__tab options__tab--main">{{opt}}</div>
    </label>
  </div>
</template>

<script>
export default {
  name: 'Options',
  data() {
    return {
      optArr: [
        'Все товары',
        'Одежда',
        'Аксессуары',
      ],
    };
  },
};
</script>

<style lang="scss">
  @import '../scss/blocks/options.scss';
</style>
