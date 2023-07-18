<template>
    <div>
      <a-button type="primary" @click="showModal">
        Abrir Calculadora
        <a-icon type="calculator" />
      </a-button>
      <a-modal v-model="visible" title="Basic Modal" @ok="handleOk">
        <div>
    <div class="result">
      <input type="text" :value="expression" disabled />
    </div>
    <div class="buttons">
      <div v-for="row in buttonRows" :key="row[0]" class="button-row">
        <button
          v-for="button in row"
          :key="button"
          @click="handleButtonClick(button)"
        >
          {{ button }}
        </button>
      </div>
    </div>
  </div>
      </a-modal>
    </div>
  </template>
  <script lang="ts">
  export default {
    data() {
      return {
        visible: false,
        expression: '',
      buttonRows: [
        ['7', '8', '9', '+'],
        ['4', '5', '6', '-'],
        ['1', '2', '3', '*'],
        ['.', '0', '=', '/'],
        ['C']
      ]
    };
    },
    methods: {
      showModal() {
        this.visible = true;
      },
      handleOk(e: any) {
        console.log(e);
        this.visible = false;
      },
      handleButtonClick(button: string) {
      if (button === '=') {
        this.calculateResult();
      } else if (button === 'C') {
        this.expression = '';
      } else {
        this.expression += button;
      }
    },
    calculateResult() {
      try {
        this.expression = eval(this.expression).toString();
      } catch (error) {
        this.expression = 'Error';
      }
    }
    },

  };
  </script>
  
  <style>
.result {
  padding: 10px;
  display: flex;
  justify-content: flex-end;
  background-color: #f0f0f0;
  input {
    font-size: 18px;
    width: 100%;
    text-align: right;
  }
}
.buttons {
  padding: 10px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 5px;
  button {
    width: 100%;
    padding: 10px;
    font-size: 18px;
    cursor: pointer;
  }
  .button-row:nth-child(5) {
    grid-column: span 2;
  }
  
}
</style>