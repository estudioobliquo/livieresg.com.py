<template>
    <div class="mainContainer"
           >
      <h2>{{$t(`index.members`)}}</h2>
      <div class="asocCont">
        <div class="asoc">
          <img src="../../assets/img/logos-asociaciones/ccpf.png" alt="">
        </div>

        <div class="asoc custom1">
          <img src="../../assets/img/logos-asociaciones/cdap.png" alt="">
        </div>
        <div class="asoc custom2">
          <img src="../../assets/img/logos-asociaciones/iaba.png" alt="">
        </div>
        <div class="asoc">
          <img src="../../assets/img/logos-asociaciones/ahk.png" alt="">
        </div>
        <div class="asoc">
          <img src="../../assets/img/logos-asociaciones/pyam.png" alt="">
        </div>
        <div style="maxWidth:100px , width:60%" class="asoc">
          <img src="../../assets/img/logos-asociaciones/ccpa.png" alt="">
        </div>
        <div class="asoc">
          <img src="../../assets/img/logos-asociaciones/eurolatamex.jpg" alt="">
        </div>
      </div>
    </div>
  </template>
  
  <script>

  </script>
  
  <style lang="scss">
  
  .mainContainer {
  margin-bottom: 100px;
  
  
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
  
    img{
      object-fit: contain ;
    }
  }
  
  .asoc > div {
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
    .mainContainer {
      margin-bottom: 160px;
    }
    .mainContainer h2 {
      text-align: left;
      border-bottom: 1px solid var(--main-color-light);
      padding-bottom: 20px;
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
  
  }}
  
  </style>
  