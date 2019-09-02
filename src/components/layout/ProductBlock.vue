<template>
  <div class="products__block col-lg-4 col-md-6 col-sm-6 col-12 mb-4">
    <div class="product">
      <router-link
        tag="a"
        class="product__head"
        :to="{ name: 'product', params: { slug: product.slug } }"
      >
        <div class="product__title">
          {{ product.title }}
        </div>
      </router-link>
      <div class="product__body">
        <div class="product__details">
          <div class="price">
            <span>{{ getPrice }}</span>
            <div class="price__interval">
              / {{ product.interval }}
            </div>
          </div>
          <div class="date">
            <Icon name="date-icon" />
            <span>{{ getDate }}</span>
          </div>
        </div>
        <div class="product__description">
          <ul>
            <li
              v-for="(line, index) in getDescription"
              :key="index"
            >
              {{ line }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { productMixin } from '@/mixins'

  export default {
    mixins: [productMixin],
    props: {
      product: {
        type: Object,
        required: true
      }
    }
  }
</script>

<style lang="scss">
  .product {
    max-width: 290px;
    margin: 0 auto;
    border: 1px solid #f3f3f3;
    border-radius: 5px;
    transition: all 0.3s ease;

    &__head {
      position: relative;
      display: block;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 8em;
      overflow: hidden;
      cursor: pointer;
      background: url('/img/product-background.svg');
      background-size: cover;
      border-top-left-radius: 5px;
      border-top-right-radius: 5px;

      &::after {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 2;
        width: 100%;
        height: 100%;
        content: '';
        background-color: rgba(39, 53, 71, 0.7);
        opacity: 0;
        transition: all 0.3s ease;
      }

      &:hover {
        text-decoration: none;
      }
    }

    &__title {
      position: relative;
      z-index: 3;
      padding: 0 1em;
      font-family: 'Roboto', sans-serif;
      font-size: 1.4em;
      font-weight: 700;
      line-height: 1.2;
      color: white;
      text-align: center;
    }

    &__body {
      padding: 1em;
      background-color: #f7f7f7;
    }

    &__details {
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-family: 'Roboto', sans-serif;

      .price {
        display: flex;
        align-items: baseline;
        color: #3c3c3c;

        span {
          font-size: 1.3em;
          font-weight: 700;
        }

        &__interval {
          font-size: 0.8em;
        }
      }

      .date {
        display: flex;
        align-items: center;
        justify-content: flex-end;

        span {
          padding-top: 0.2em;
          padding-left: 0.35em;
          font-size: 0.8em;
          color: #878787;
        }
      }
    }

    &__description {
      position: relative;
      padding-top: 1em;
      padding-bottom: 0.2em;
      margin-bottom: 0.5em;
      font-size: 0.8em;

      ul li {
        position: relative;
        display: none;
        padding-left: 1em;
        margin-bottom: 0.3em;

        &:nth-child(-n+3) {
          display: block;
        }

        &::before {
          position: absolute;
          top: 0;
          left: 0;
          content: '-';
        }
      }

      &::after {
        position: absolute;
        bottom: 0;
        left: 1em;
        content: '...';
      }
    }

    &:hover {
      box-shadow: 0 0 15px rgba(60, 60, 60, 0.3);

      .product {
        &__head {
          &::after {
            opacity: 1;
          }
        }
      }
    }
  }

  @media all and (max-width: 575px) {
    .products {
      .page {
        &__title {
          max-width: 290px;
          margin: 0.5em auto;
        }
      }
    }

    .product-page {
      &__title {
        &.private {
          &::before {
            top: -2.3em;
            font-size: 8px;
          }
        }
      }
    }
  }
</style>
