<template>
  <div class="campaign-chart">
    <div class="campaign-chart__block">
      <Chart
        :chart-data="chart"
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
</template>

<script>
  import Chart from './Chart'
  export default {
    components: {
      Chart
    },
    props: {
      chart: {
        type: Object,
        default: () => ({})
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
    }
  }
</script>

<style lang="scss">
  .campaign-chart {
    position: relative;

    &__block {
      position: relative;
      max-width: 8em;
      margin: 0 auto;
    }

    &__value {
      position: absolute;
      top: 50%;
      right: 0;
      left: 0;
      margin: 0 auto;
      font-size: 2em;
      font-weight: 600;
      color: #8b95a0;
      text-align: center;
      transform: translate(0, -50%);
    }

    &__label {
      font-family: 'Roboto', sans-serif;
      font-size: 1em;
      color: #d6dce2;
      text-align: center;
      text-transform: uppercase;
    }
  }

  @media all and (max-width: 767px) {
    .campaign-chart {
      font-size: 12px;
    }
  }

  @media all and (max-width: 480px) {
    .campaign-chart {
      font-size: 10px;
    }
  }

</style>
