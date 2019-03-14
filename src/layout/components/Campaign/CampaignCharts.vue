<template>
  <div class="row">
    <div v-for="(chart, index) in charts" :key="index" class="col-3">
      <div class="campaign-chart">
        <div class="campaign-chart__block">
          <Chart
            :chartData="chart"
            :options="options"
          />
          <div class="campaign-chart__value">
            {{ chart.datasets[0].data[0] }}
          </div>
        </div>
        <div class="campaign-chart__label mt-2">
          {{ chart.labels[0] }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Chart from './Chart'

export default {
  props: {
    stats: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      options: {
        hover: false,
        tooltips: {
          enabled: false
        },
        responsive: true,
        cutoutPercentage: 80,
        scaleOverride: true,
        legend: {
          display: false
        }
      }
    }
  },
  computed: {
    charts () {
      return [
        {
          datasets: [{
            label: '',
            backgroundColor: '#d6dce2',
            data: [this.stats.sent],
            borderWidth: [0]
          }],
          labels: ['Sent']
        },
        {
          datasets: [{
            label: 'Opened',
            backgroundColor: ['#67798c', '#d6dce2'],
            data: [this.stats.opened, this.stats.sent - this.stats.opened],
            borderWidth: [0, 0]
          }],
          labels: ['Opened', 'Sent']
        },
        {
          datasets: [{
            label: 'Replied',
            backgroundColor: ['#67798c', '#d6dce2'],
            data: [this.stats.replied, this.stats.sent - this.stats.replied],
            borderWidth: [0, 0]
          }],
          labels: ['Replied', 'Sent']
        },
        {
          datasets: [{
            label: 'Autoreplied',
            backgroundColor: ['#67798c', '#d6dce2'],
            data: [this.stats.autoreplied, this.stats.sent - this.stats.autoreplied],
            borderWidth: [0, 0]
          }],
          labels: ['Autoreplied', 'Sent']
        }
      ]
    }
  },
  components: {
    Chart
  }
}
</script>
