<template>
  <div class="mainContainer">
    <h2>{{ $t(`index.members`) }}</h2>
    <div class="asocCont">
      <div class="asoc">
        <nuxt-img
          src="/img/logos-asociaciones/ccpf.png"
          format="webp"
          loading="lazy"
          alt="Camara de Comercio Paraguayo - Francesa"
        />
      </div>
      <div class="asoc custom1">
        <nuxt-img
          src="/img/logos-asociaciones/cdap.png"
          format="webp"
          loading="lazy"
          alt="Colegio de Abogados del Paraguay"
        />
      </div>
      <div class="asoc custom2">
        <nuxt-img
          src="/img/logos-asociaciones/iaba.png"
          format="webp"
          loading="lazy"
          alt="Inter American Bar Asociation"
        />
      </div>
      <div class="asoc">
        <nuxt-img
          src="/img/logos-asociaciones/ahk.png"
          format="webp"
          loading="lazy"
          alt="AHK"
        />
      </div>
      <div class="asoc">
        <nuxt-img
          src="/img/logos-asociaciones/pyam.png"
          format="webp"
          loading="lazy"
          alt="Camara de Comercio Paraguayo Americana"
        />
      </div>
      <div style="maxWidth:100px , width:60%" class="asoc">
        <nuxt-img
          src="/img/logos-asociaciones/ccpa.png"
          format="webp"
          loading="lazy"
          alt="Camara de Comercio Paraguayo Argentina"
        />
      </div>
      <div class="asoc">
        <nuxt-img
          src="/img/logos-asociaciones/eurolatamex.jpg"
          format="webp"
          loading="lazy"
          alt="EUROLATAMLEX"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss">
.mainContainer {
  margin-bottom: 100px;

  h2:first-child {
    text-align: center;
  }

  .asocCont {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    row-gap: 40px;
    margin-bottom: 40px;
    row-gap: 40px;
    column-gap: 40px;
  }

  /* Para logos de cdap y iaba se uso inlyne styling */
  .asoc {
    height: 85px;
    width: 100%;
    max-width: 120px;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      object-fit: contain;
    }
  }

  .asoc>div {
    width: 100%;
    height: 100%;
  }

  .asoc.custom1 {
    max-width: 65px;
    width: 36%;
  }

  .asoc.custom2 {
    max-width: 65px;
    width: 40%;
  }

  .mainContainer h2 {
    text-align: center;
  }

  @media only screen and (min-width: 700px) {
    & {
      margin-bottom: 160px;
      h2:first-child {
        text-align: left;
        border-bottom: 1px solid var(--main-color-light);
        padding-bottom: 20px;
      }
    }

    .asocCont {
      row-gap: 80px;
      column-gap: 140px;
      margin-bottom: 80px;
      max-width: 1200px;
      margin-left: auto;
      margin-right: auto;
    }

    .asoc {
      height: 85px;
      max-width: 230px;
    }
  }
}
</style>
