<template>
  <div class="products-view">

    <div class="page-position">
      您的位置: <a href="">首页</a> -> <a href="">产品展示</a>
    </div>

    <div class="products-group">

      <div class="products-case">
        按产品系列查看:
        <select v-model="type">
          <option v-for="(item,index) in typelist" :value="item.value" :key="index">{{item.label}}</option>
         </select>
      </div>

      <div class="products-list">

        <div class="products-item" v-for="n in 13" :key="n">

          <div class="products-img">
            <img src="~/assets/images/product1.png" alt="">
          </div>

          <a class="products-title" href="">
            BOPP包装胶带（BO-01）
          </a>

        </div>

      </div>

    </div>
  </div>
</template>
<script>
export default {
  name: 'products',
  data() {
    return {
      type: 0,
      typelist: [
        {
          label: '所有类别',
          value: 0
        },
        {
          label: '电子部品胶带系列',
          value: 1
        },
        {
          label: 'BOPP胶带系列',
          value: 2
        },
        {
          label: '高温胶带系列',
          value: 3
        },
        {
          label: '美纹纸胶带系列',
          value: 4
        },
        {
          label: '双面胶带系列',
          value: 5
        },
        {
          label: '保护膜系列',
          value: 6
        },
        {
          label: '纸箱',
          value: 7
        },
        {
          label: '吸塑系列',
          value: 8
        }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
.products-view {
  width: 680px;
  margin-left: 36px;
  .page-position {
    background-color: #f1f1f1;
    border: 1px solid #ddd;
    color: #333;
    padding: 15px;
    a {
      text-decoration: none;
      font-size: 16px;
      color: #0262b8;
    }
  }
  .products-group {
    margin-top: 10px;
    .products-case {
      line-height: 30px;
    }
    .products-list {
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      flex-direction: row;
      flex-wrap: wrap;
      .products-item {
        margin: 10px 0;
        width: 50%;
        text-align: center;
        .products-img {
          width: 300px;
          height: 225px;
          img{
            width: 100%;
            height: 100%;
          }
        }
        .products-title {
          color: #555;
          text-decoration: none;
          &:hover{
            color: #FFB6C1;
          }
        }
      }
    }
  }
}
</style>
