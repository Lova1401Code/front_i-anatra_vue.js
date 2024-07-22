<template>
  <div>
    <stripe-checkout
      ref="checkoutRef"
      mode="payment"
      :pk="publishableKey"
      :sessionId="sessionId"
    />
    <button @click="submit">Pay now!</button>
  </div>
</template>
<script>
import axios from "axios";
import { StripeCheckout } from "@vue-stripe/vue-stripe";
export default {
  components: {
    StripeCheckout,
  },
  name: "checkout",
  data() {
    return {
      publishableKey:
        "pk_test_51PdVyYRsNRQRH7puAA25wTRZHqttXMersTEl0NvTxWojSULDVBQJDDaVTflSLbxrHpNQo4vFhM7eiqqCeVEScGfj00ArpiCwzt",
      sessionId: null,
    };
  },
  methods: {
    submit() {
      // You will be redirected to Stripe's secure checkout page
      this.$refs.checkoutRef.redirectToCheckout();
    },
    getSession() {
      axios
        .get("http://127.0.0.1:8000/api/getSession")
        .then((res) => {
          this.sessionId = res.data.id;
        })
        .catch((err) => {});
    },
  },
  mounted() {
    this.getSession();
  },
};
</script>
<style>
</style>