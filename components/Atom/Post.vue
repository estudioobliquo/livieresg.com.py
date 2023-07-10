<template>
  <div class="blog-post">
    <p class="post-type">
      {{ post.type }}
    </p>
    <h2>{{ post.title }}</h2>
    <p class="post-date">
      {{ post.dateFormat }}
    </p>
    <p class="post-excerpt">
      {{ post.body }}
    </p>
    <div class="read-post">
      <p>Continuar leyendo</p>
      <SVGArrow />
    </div>
  </div>
</template>

<script setup lang="ts">
import SVGArrow from '@/assets/svg/global/arrow.svg'
defineProps({
  post: {
    type: Object,
    default: () => ({}),
  },
})
</script>

<style lang="scss">
.blog-post {
  padding: 23px 23px 40px;
  margin-bottom: 40px;
  background-color: var(--secondary-color);
  transition: background-color .2s;

  &:hover {
    background-color: var(--secondary-color-hover);
  }

  .post-type {
    margin-bottom: 8px;
    font-size: 12px;
    font-weight: 500;
    color: var(--text-color);
    text-transform: uppercase;
    letter-spacing: 1px;
    opacity: .7;
  }

  h2 {
    margin: 0 0 1.45rem;
    margin-bottom: 0.187em;
    font-size: 1.25rem;
    line-height: 1.3em;
    color: var(--text-color);
    text-decoration: none;
    letter-spacing: .05em;
  }

  .post-date {
    width: fit-content;
    padding-bottom: 5px;
    color: rgb(47 47 47 / 75%);
    text-decoration: none;
    border-bottom: 1px solid var(--main-color);
  }

  .post-excerpt {
    max-width: 1000px;
    color: var(--text-color);
  }

  .read-post {
    display: flex;
    align-items: center;

    p {
      margin-bottom: 0;
      font-size: 12px;
      color: var(--main-color);
      text-decoration: none;
      text-transform: uppercase;
      letter-spacing: .03em;
    }

    svg {
      margin-bottom: 1px;
      margin-left: 5px;

      path {
        fill: var(--main-color);
      }
    }
  }

  @media only screen and (width >=1000px) {
    display: flex;
    flex-direction: column;
    height: 100%;
    padding: 28px 40px 20px;

    .post-type {
      font-size: 15px;
    }

    h2 {
      font-size: 1.222rem;
    }

    .post-date {
      font-size: 18px;
    }

    .post-excerpt {
      font-size: 19px;
    }

    .read-post {
      align-self: flex-end;
      margin-top: auto;
      font-size: 15px;
    }
  }
}
</style>
