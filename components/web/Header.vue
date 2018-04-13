<template>
  <header class="header">
    <div class="outer">
    <div class="container">
      <div class="container-inner header-inner">
        <div class="header-title">
          <h1 class="logo-wrap">
            <a href="/" class="logo"></a>
          </h1>
          <h2 class="subtitle-wrap">
            <p class="subtitle">fish的博客</p>
            <p class="description">web前端，给你无限可能</p>
          </h2>
        </div>
        <div class="header-inner nav-container">
          <div class="nav-container-inner">
            <ul class="main-nav">
              <li class="main-nav-list-item"><a class="main-nav-list-link current" href="/">主页</a></li>
                <li class="main-nav-list-item">
                  <a class="main-nav-list-link" href="/categories/Web开发/">Web开发</a>
                </li>        
                <li class="main-nav-list-item">
                  <a class="main-nav-list-link" href="/categories/Node-js/">Node.js</a>
                </li>    
                <li class="main-nav-list-item">
                  <a class="main-nav-list-link" href="/categories/无线开发/">无线开发</a>
                </li>
                <li class="main-nav-list-item">
                  <a class="main-nav-list-link" href="/categories/工具-平台/">工具&amp;平台</a>
                </li>
                <li class="main-nav-list-item">
                  <a class="main-nav-list-link" href="/categories/团队生活/">团队生活</a>
                </li>
                <li class="main-nav-list-item">
                  <a class="main-nav-list-link" href="/about/">关于我们</a>
                </li>
            </ul>
            <nav class="sub-nav">
              <div class="search-form-wrap">
                <form action="//google.com/search" method="get" accept-charset="UTF-8" class="search-form">
                <input type="search" name="q" results="0" class="search-form-input" placeholder="搜索">
                <!-- <input type="hidden" name="sitesearch" value="http://taobaofed.org"> -->
                </form>
              </div>
            </nav>
          </div>
        </div>
      </div>
      </div>
    </div>
  </header>
</template>
<style lang="scss" scoped>
.header {
  background: #26272b;
  padding-bottom: 50px;
  position: relative;
  user-select: none;
  .outer {
    height: 100%;
    position: relative;
      .header-inner {
        position: relative;
      .header-title {
        padding: 30px 30px;
        &:before {
          content: "";
          display: table;
        }
        &:after {
          clear: both;
          content: "";
          display: table;
        }
        .logo-wrap {
          float: left;
          .logo {
            display: block;
            /* padding: 10px 0; */
            width: 120px;
            height: 120px;
            background-image: url(~assets/images/m_logo.jpg);
            background-repeat: no-repeat;
            background-size: 100% 100%;
            position: relative;
            border-radius: 120px;
          }
        }
        .subtitle-wrap {
          float: left;
          padding: 20px 0px 0px;
          margin-left: 20px;
          .subtitle {
            font-size: 22px;
            line-height: 50px;
            color: #fa862e;
            margin-top: 6px;
            text-shadow: 0 1px rgba(0, 0, 0, 0.2);
          }
          .description {
            font-size: 16px;
            line-height: 24px;
            color: #777;
            letter-spacing: 2px;
          }
        }
      }
      }
      .nav-container {
        padding: 0 15px;
        background: #33363b;
        z-index: 1;
        box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.05),
          0 -1px 0 rgba(0, 0, 0, 0.2), inset 1px 0 0 rgba(0, 0, 0, 0.2),
          inset -1px 0 0 rgba(0, 0, 0, 0.2);
        &:after {
          clear: both;
          content: "";
          display: table;
        }
        .nav-container-inner {
          display: block;
          .main-nav {
            float: left;
            .main-nav-list-item {
              position: relative;
              float: left;
              .main-nav-list-link {
                line-height: 20px;
                font-size: 16px;
                float: left;
                color: #888;
                text-decoration: none;
                text-shadow: 0 1px rgba(0, 0, 0, 0.2);
                display: block;
                padding: 15px 14px;
                transition: 0.2s ease-in;
                &.current {
                  color: #ccc;
                }
              }
            }
          }
          .sub-nav {
            float: right;
            .search-form-wrap {
              .search-form {
                padding: 14px 15px 16px;
                height: 50px;
                overflow: hidden;
                -webkit-box-sizing: border-box;
                -moz-box-sizing: border-box;
                box-sizing: border-box;
                &:before {
                  content: "\e605";
                  margin-right: 8px;
                  color: #555;
                  font: normal normal normal 16px/1 iconfont;
                  transform: rotate(180deg);
                }
                .search-form-input {
                  -webkit-appearance: textarea;
                  width: 100px;
                  border: none;
                  outline: none !important;
                  background: none !important;
                  line-height: 1.6em;
                  -webkit-transition: 0.2s ease-in;
                  -moz-transition: 0.2s ease-in;
                  -ms-transition: 0.2s ease-in;
                  transition: 0.2s ease-in;
                  font: 14px "lucida grande", "lucida sans unicode", lucida,
                    "Helvetica Neue", helvetica, "Hiragino Sans GB",
                    "Microsoft YaHei", "WenQuanYi Micro Hei", sans-serif;
                  color: rgba(255, 255, 255, 0.7);
                  &:focus{
                    width:200px;
                  }
                }
              }
            }
          }
        }
    }
  }
}
</style>
