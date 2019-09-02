<template>
  <div class="page">
    <div class="row">
      <div class="col-12">
        <h2 class="page__title">
          Dashboard
        </h2>
      </div>
      <div
        v-if="campaigns.length"
        class="col-12"
      >
        <table class="table table--subscriptions col-12">
          <thead>
            <tr class="table__head">
              <th scope="col" />
              <th scope="col" />
              <th scope="col">
                PROSPECTS
              </th>
              <th scope="col">
                DELIVERED
              </th>
              <th scope="col">
                OPENED
              </th>
              <th scope="col">
                REPLIED
              </th>
              <th
                scope="col"
                class="text-center"
              >
                INTEREST
              </th>
            </tr>
          </thead>
          <tbody>
            <CampaignBlock
              v-for="(campaign, index) in campaigns"
              :key="index"
              :campaign="campaign"
            />
          </tbody>
        </table>
      </div>
      <div
        v-else
        class="col-12"
      >
        <div class="page__message d-flex align-items-center flex-column my-3">
          <Icon name="time-icon" />
          <p>Please wait while your manager adds statistics to your Dashboard.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import CampaignBlock from '@/components/layout/Campaign/CampaignBlock'

  export default {
    components: {
      CampaignBlock
    },
    computed: mapGetters({
      campaigns: 'getCampaigns'
    }),
    created () {
      this.$store.dispatch('GET_CAMPAIGNS')
    }
  }
</script>

<style lang="scss">
  .table {
    &__head {
      th {
        padding: 1em 0.5em;
        font-size: 0.8em;
        font-weight: 600;
        border-top: none;
      }
    }

    &__row {
      border-top: 2px solid #f3f3f3;

      td {
        height: 100%;
        padding: 1em 0.5em;
      }
    }

    &__status {
      width: 5em;
      padding: 0 0.5em;

      svg {
        display: block;
        margin: 0 auto;
      }

      span {
        display: block;
        margin-top: 0.6em;
        font-size: 0.6em;
        text-align: center;
        text-transform: uppercase;
      }
    }

    &__details {
      padding: 0 1em;
      overflow: hidden;

      a {
        display: block;
        max-width: 25vw;
        margin: 0 0 0.2em;
        overflow: hidden;
        font-size: 1em;
        font-weight: 500;
        color: #212529;
        text-overflow: ellipsis;
        white-space: nowrap;
        cursor: pointer;

        &:hover {
          color: inherit;
        }
      }

      p {
        margin: 0;
        font-size: 0.9em;
        color: #5e5e5e;
      }

      span {
        display: block;
        font-size: 0.8em;
        color: #b7b7b7;
      }
    }

    &__stat {
      text-align: center;

      svg {
        display: block;
        margin: 0 auto;

        &.svg-icon--opened-icon {
          position: relative;
          top: -0.25em;
        }
      }

      span {
        display: block;
        font-size: 0.9em;
        text-align: center;
      }
    }

    &__actions {
      button {
        display: block;
        margin: 0 0.1em;
        font-size: 1em;

        span {
          display: none;
          color: #6b7073;
        }

        &:hover {
          span {
            color: white;
          }
        }
      }
    }

    &__interest {
      .cell {
        &__item {
          display: inline-block;
          margin: 0 0.3em;

          svg {
            display: block;
          }

          span {
            display: block;
            font-size: 0.9em;
            text-align: center;
          }
        }
      }
    }

    &--subscriptions {
      .table {
        &__row {
          td {
            color: #5e5e5e;
            vertical-align: middle;
          }
        }
      }
    }

    .canceled {
      opacity: 0.5;
    }
  }

  @media all and (max-width: 992px) {
    .table {
      font-size: 10px;

      &__head {
        th {
          display: none;
        }
      }

      &__status {
        width: 3em;
      }

      &--subscriptions {
        font-size: 12px;
      }
    }
  }

  @media all and (max-width: 767px) {
    .table {
      font-size: 12px;

      &__details {
        max-width: 30vw;
      }
    }
  }

  @media all and (max-width: 480px) {
    .table {
      table-layout: fixed;
      border: 2px solid #f3f3f3;

      &__row {
        padding: 0.5em 0;

        td {
          display: flex;
          padding: 1em;
          border-top: 0;

          &::before {
            float: left;
            font-size: 0.9em;
            font-weight: bold;
            text-transform: uppercase;
            content: attr(data-label);
          }
        }

        &:nth-of-type(odd) {
          background-color: #f9f9f9;
        }
      }

      &__status {
        width: auto;

        span {
          font-size: 0.8em;
        }
      }

      &__details {
        max-width: initial;

        a,
        p,
        span {
          max-width: initial;
          text-align: right;
        }

        p,
        span {
          font-size: 1em;
        }
      }

      &__status,
      &__stat {
        svg {
          display: inline-block;
          margin: 0 !important;
        }

        span {
          display: inline-block;
          margin-left: 1em;
        }
      }

      &__actions {
        button {
          svg {
            display: none;
          }

          span {
            display: block;
          }
        }
      }

      .cell {
        max-width: calc(100% - 80px);
        margin: 0 0 0 auto;
      }

      .canceled {
        .table {
          &__actions {
            display: none;
          }
        }
      }
    }
  }
</style>
