<script>
  export default {
    props: {
        name: {
        type: String,
        required: true,
            validator: function (value) {
                console.log(value.length > 1)
                return value.length > 1; //이름이 최소 2글자 이상이어야 함
            },
        },
        age: {
            type: Number,
            default: function() {
                return 10;
            },
        },
    },
    methods: {
        parentEventCall(){
            this.$emit('onprint-hello')
        }
    },
    emit: ['print-hello']
  }
  </script>
  <template>
    이름 : {{ name }}
    나이 : {{ age }}
    <button @click="$emit('print-hello','철수',30)"> 클릭</button>
    <button @click="parentEventCall">부모 클릭</button>
  </template>