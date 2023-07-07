<template>
  <div class="main">
    <h2 class="workWith" :class="{ workWith2: !isIndex }">
      {{ $t(`index.workWith`) }}
    </h2>
    <div class="costumersContainer" :class="{ full: !isIndex }">
      <div v-for="(img, index) in costumers" :key="index" class="costumerImageContainer">
        <nuxt-img :src="`/img/costumers/` + (img.image)" format="webp" loading="lazy" :alt="img.image.split('.')[0]" />
      </div>
    </div>

    <div v-if="isIndex" class="buttonContainer">
      <NuxtLink style="text-decoration: none" :to="{ path: localePath('/nosotros'), hash: '#costumers' }">
        <AtomButton-Link text="Ver todos" />
      </NuxtLink>
    </div>
  </div>
</template>

<script>
import { dataFullCostumers } from '@/assets/dataCostumer.js'
export default {
  props: {
    isIndex: {
      type: Boolean,
      default: false,
    },
  },
  data () {
    return {
      fullCostumers: dataFullCostumers,
    }
  },
  computed: {
    costumers () {
      if (this.isIndex) {
        return this.fullCostumers.costumers.slice(0, 6)
      }
      else {
        return this.fullCostumers.costumers
      }
    },
  },
}
</script>

<style lang="scss" >
.main {
  margin-bottom: 60px;

  .workWith {
    padding-bottom: 0;
    text-align: center;
    border: none;
  }

  .workWith2:first-of-type {
    font-size: 1.56rem;
    text-align: left;
    letter-spacing: .03em;
  }
}

.main h2 {
  padding-bottom: 20px;
  text-align: left;
  border-bottom: 1px solid var(--main-color-light);
}

.buttonContainer {
  display: flex;
  justify-content: center;
  margin-top: 40px;
}

.main.full .buttonContainer {
  display: none;
}

.costumersContainer {
  display: flex;
  flex-wrap: wrap;
  row-gap: 32px;
  column-gap: 24px;
  align-items: center;
  justify-content: center;
  margin-top: 40px;

  img {
    object-fit: contain;
  }

  .costumerImageContainer {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 100px;
    height: 70px;
    filter: saturate(0);
    opacity: 0.7;
    transition: filter 0.5s, opacity 0.5s;
    object-fit: contain;
  }

  .costumerImageContainer>div {
    width: 100%;
    height: 100%;
  }

  .costumerImageContainer:hover {
    filter: saturate(100%);
    opacity: 1;
    transition: filter 0.5s, opacity 0.5s;
  }

}

@media only screen and (width >= 900px) {
  .main {
    margin-bottom: 120px;

    .workWith {
      padding-bottom: 20px;
      text-align: left;
      border-bottom: 1px solid var(--main-color-light);
    }

    .workWith2:first-of-type {
      padding-bottom: 0;
      margin-bottom: 40px;
      font-size: 34px;
      border: none;
    }
  }

  .costumersContainer {
    column-gap: 120px;
    align-items: center;
    justify-content: space-evenly;
    width: 78%;
    max-width: 1200px;
    margin: 0 auto;
  }

  .main .costumersContainer.full {
    column-gap: 80px;
    justify-content: space-evenly;
    width: 100%;
    margin: 0;
  }

  .main .costumersContainer.full .costumerImageContainer {
    width: 100px;
    height: 50px;
  }

  .main .costumersContainer .costumerImageContainer {
    width: 200px;
    height: 110px;
  }
}
</style>
