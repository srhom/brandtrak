<template>
  <div class="form-wrap">
    <v-snackbar
      v-model="openNotif"
      :timeout="4000"
      top
      right
    >
      Message Sent
    </v-snackbar>
    <v-card class="form-box">
      <v-row>
        <v-col lg="5" cols="12">
          <h3 class="title-main use-text-title">
            Contact <span>Me.</span>
          </h3>
        </v-col>
        <v-col lg="7" cols="12">
          <div class="form">
            <v-form ref="form" v-model="valid">
              <v-row class="spacing6">
                <v-col cols="12" sm="12" class="px-6 py-0">
                  <v-text-field
                    v-model="name"
                    :rules="nameRules"
                    :label="$t('profileLanding.form_name')"
                    class="input"
                    required
                    variant="underlined"
                  />
                </v-col>
                <v-col cols="12" sm="12" class="px-6 py-0">
                  <v-text-field
                    v-model="email"
                    :rules="emailRules"
                    :label="$t('profileLanding.form_email')"
                    class="input"
                    required
                    variant="underlined"
                  />
                </v-col>
                <v-col cols="12" class="px-6 py-0">
                  <v-textarea
                    v-model="message"
                    :label="$t('profileLanding.form_message')"
                    rows="6"
                    class="input"
                    variant="underlined"
                  />
                </v-col>
              </v-row>
              <div class="btn-area">
                <v-btn
                  color="primary"
                  size="large"
                  block
                  @click="validate"
                >
                  {{ $t('profileLanding.form_send') }}
                </v-btn>
              </div>
            </v-form>
          </div>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>

<style lang="scss" scoped>
@import './contact-style';
</style>

<script>
export default {
  data() {
    return {
      openNotif: false,
      valid: true,
      name: '',
      nameRules: [v => !!v || 'Name is required'],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
      message: '',
    };
  },
  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        this.openNotif = true;
      }
    },
  },
};
</script>
