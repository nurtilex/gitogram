<template>
  <section class="auth-wrapper">
    <div class="logo">
      <logo />
    </div>
    <div class="description">
      More than just one repository. This is our digital world.
    </div>
    <button class="button" type="button" @click="getCode">
      <span>Authorize with github</span>
      <img
        src="../../assets/github-icon.svg"
        alt="GitHub icon"
        class="gh-icon"
      />
    </button>
  </section>
</template>

<script>
import logo from '../../components/logo/logo.vue';

import env from '../../../env';

export default {
  name: 'auth',
  components: { logo },
  methods: {
    getCode() {
      const githubAuthApi = 'https://github.com/login/oauth/authorize';

      const params = new URLSearchParams();
      params.append('client_id', env.CLIENT_ID);
      params.append("scope", "repo:status public_repo read:user")

      window.location.href = `${githubAuthApi}?${params}`;
    },
  },
  async created() {
    const code = new URLSearchParams(window.location.search).get('code');

    if (code) {
      try {
        const response = await fetch(
          'https://webdev-api.loftschool.com/github',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              clientId: env.CLIENT_ID,
              code,
              clientSecret: env.CLIENT_SECRET,
            }),
          }
        );

        const { token } = await response.json();
        localStorage.setItem('token', token);
        this.$router.replace({ name: 'feeds' });
      } catch (error) {
        console.log(error);
      }
    }
  },
};
</script>

<style scoped>
.auth-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  width: 100vw;
  height: 100vh;
}

.description {
  width: 15rem;
  color: #6f6f6f;
  line-height: 170%;
  text-align: center;
}
.button {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  width: 15rem;
  height: 3rem;
  margin: 1rem;
  background: #31ae54;
  border: none;
  border-radius: 5px;
  color: #fff;
}

.button:hover {
  cursor: pointer;
}
.button > span {
  font-weight: bold;
}

.gh-icon {
  width: 23px;
  height: 23px;
}
</style>
