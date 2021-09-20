<template>
  <h1>QR Code Generator</h1>
  <p>Dead-simple, on-device QR code generator.</p>
  <div id="form-field">
    <input placeholder="Enter text or URL" @change="regenerateQrCode" v-model="content" type="text" id="content-input" />
    <select @change="regenerateQrCode" v-model="correctionLevel" id="quality-selection">
      <option disabled value="M">Correction Quality</option>
      <option value="L">low</option>
      <option value="M">medium</option>
      <option value="Q">quartile</option>
      <option value="H">high</option>
    </select>
  </div>
  <div id="qrcode" v-html="svgcode"></div>
</template>

<script>
import QRCode from "qrcode";

export default {
  data() {
    return {
      content: "",
      correctionLevel: "M",
      svgcode: "",
    };
  },
  mounted: function () {
    this.regenerateQrCode();
  },
  methods: {
    regenerateQrCode() {
      if(!this.content)
        return;

      QRCode.toString(this.content, {
        type: "svg",
        errorCorrectionLevel: this.correctionLevel,
      }).then((string, err) => {
        if (err) throw err;
        this.svgcode = string;
      });
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;

  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 800px;

  margin-left: auto;
  margin-right: auto;
}

#form-field {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: stretch;
  height: 30px;
  width: 100%;
}

#form-field select {
  margin-left: 10px;
}

#qrcode {
  width: 100%;
}
</style>
