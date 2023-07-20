<template>
  <div class="mainIndex">
    <div class="line" />
    <div class="text">
      <h2>{{ $t(`index.ourStudy`) }}</h2>
      <p>
        {{ $t(`index.ourStudyText`) }}
      </p>
    </div>
    <div class="buttonContainer">
      <NuxtLink style="text-decoration: none" :to="localePath('/nosotros')">
        <AtomButton-Link text="Conocer mas" to="/" />
      </NuxtLink>
    </div>
    <div class="imgContainer">
      <nuxt-img
        src="/img/index/portadaIntro.png"
        sizes="xs:90vw sm:80vw md:90vw lg:85vw xl:85vw xxl:90vw"
        format="webp"
        loading="lazy"
        alt="Livieres Guggiari - Portada"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style lang="scss">
.mainIndex {
  margin-bottom: 60px;

  .text {
    text-align: center;

    p {
      max-width: 685px;
      margin: 0 auto;
      font-style: italic;
    }
  }

  .imgContainer {
    img {
      height: 100%;
      margin-top: 40px;
      object-fit: cover;
    }
  }

  .imgContainer>div {
    height: 100%;
  }

  .line {
    width: 2px;
    height: 50px;
    margin: 24px auto 20px;
    background-color: var(--main-color);
  }

  // .mainIndex h2, .mainIndex p {  text-align: center;}
  // .mainIndex p {  font-style: italic;  max-width: 685px;  margin: 0 auto;}

  .buttonLink {
    display: block;
    margin: 0 auto;
  }

  .buttonContainer {
    display: flex;
    justify-content: center;
    margin-top: 40px;

  }

  @media only screen and (width >= 800px) {
    .mainIndex {
      margin-bottom: 120px;
    }

    .line {
      margin: 48px auto 24px;
    }

    .imgContainer {
      margin-top: 80px;
    }
  }
}</style>
