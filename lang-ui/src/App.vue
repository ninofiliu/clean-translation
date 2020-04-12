<template>
  <div>
    <div v-if="! messages">Loading...</div>
    <div v-else>
      <button @click="save">Save</button>
      <table>
        <tr>
          <td></td>
          <td v-for="locale of locales" :key="locale">{{ locale }}</td>
        </tr>
        <tr v-for="key of keys" :key="key">
          <td>{{ key }}</td>
          <td
            v-for="locale of locales"
            :key="locale"
            :class="{ modified: messages[locale][key] !== oldMessages[locale][key] }"
          >
            <textarea v-model="messages[locale][key]" cols="50"/>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
const langApiOrigin = 'http://localhost:8081';
export default {
  data() {
    return {
      messages: null,
      oldMessages: null,
    };
  },
  computed: {
    locales() {
      if (!this.messages) return [];
      return Object.keys(this.messages);
    },
    keys() {
      if (!this.locales) return [];
      return Object.keys(this.messages[this.locales[0]]);
    },
  },
  async created() {
    await this.load();
  },
  methods: {
    update(locale, key, value) {
      this.messages[locale][key] = value;
    },
    async load() {
      const resp = await fetch(langApiOrigin);
      this.messages = await resp.json();
      this.oldMessages = JSON.parse(JSON.stringify(this.messages));
    },
    async save() {
      await fetch(langApiOrigin, {
        method: 'PUT',
        body: JSON.stringify(this.messages, null, 2),
      });
      await this.load();
    },
  },
};
</script>

<style>
table {
  border-collapse: collapse;
}
td {
  border: 1px solid black;
  padding: .5em;
}
.modified {
  background-color: #ddd;
}
textarea {
  resize: none;
  border: none;
  background-color: transparent;
}
</style>
