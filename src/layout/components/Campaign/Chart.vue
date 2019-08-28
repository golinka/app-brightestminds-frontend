<script>
  import { Pie, mixins } from 'vue-chartjs'
  import { mapState } from 'vuex'

  export default {
    extends: Pie,
    mixins: [mixins.reactiveProp],
    props: {
      chartData: {
        type: Object,
        required: true
      },
      options: {
        type: Object,
        required: false,
        default: () => ({})
      }
    },
    data () {
      return {
        rendered: false
      }
    },
    computed: mapState({
      loader: state => state.general.loader
    }),
    watch: {
      loader: {
        handler (v) {
          if (!v) this.callRender()
        },
        immediate: true
      }
    },
    methods: {
      callRender () {
        this.renderChart(this.chartData, this.options)
        this.rendered = true
      }
    }
  }
</script>
