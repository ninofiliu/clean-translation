<template>
  <div>
    <select v-model="$i18n.locale">
      <option
        v-for="{ locale, text } in langs"
        :key="locale"
        :value="locale"
      >
        {{ text }}
      </option>
    </select>
    <div>
      {{ $t('name') }}:
      <input v-model="name">
      {{ $t('hello', { name }) }}
    </div>
    <div>
      <input v-model="count" type="number">
      {{ $tc('apples', count) }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      langs: [
        { locale: 'en', text: 'English' },
        { locale: 'fr', text: 'French' },
      ],
      name: 'John Doe',
      count: 0,
    };
  },
};
</script>
