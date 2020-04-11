<template>
  <div>
    <div v-if="! messages">Loading...</div>
    <div v-else>
      <button @click="save">Save</button>
      <ul>
        <li v-for="[locale, data] of Object.entries(messages)" :key="locale">
          {{ locale }}
          <ul>
            <li v-for="[key, value] of Object.entries(data)" :key="key">
              <span>{{ key }}</span>
              <input :value="value" @input="(evt) => update(locale, key, evt.target.value)">
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
const langApiOrigin = 'http://localhost:8081';
export default {
  data() {
    return {
      messages: null,
    };
  },
  async created() {
    const resp = await fetch(langApiOrigin);
    this.messages = await resp.json();
  },
  methods: {
    update(locale, key, value) {
      this.messages[locale][key] = value;
    },
    async save() {
      await fetch(langApiOrigin, {
        method: 'PUT',
        body: JSON.stringify(this.messages, null, 2),
      });
    },
  },
};
</script>
