<template>
  <ul class="contact-container">
    <li>
      <a href="">
        <div class="icon">
          <Icon type="github" />
        </div>
        <span>DuYi-Edu</span>
      </a>
    </li>
    <li>
      <a href="mailto:23423424234@qq.com">
        <div class="icon">
          <Icon type="mail" />
        </div>
        <span>23423424234@qq.com</span>
      </a>
    </li>
    <li>
      <a>
        <div class="icon">
          <Icon type="qq" />
        </div>
        <span>390280781</span>
      </a>
      <div class="pop">
        <img src="https://cdn.pixabay.com/photo/2022/08/17/15/46/labrador-7392840_1280.jpg">
      </div>
    </li>
    <li>
      <a>
        <div class="icon weixin">
          <Icon type="weixin" />
        </div>
        <span>dsfggasas</span>
      </a>
      <div class="pop">
        <img
          src="http://www.duyiedu.com/source/img/%E5%85%AC%E4%BC%97%E5%8F%B7%E4%BA%8C%E7%BB%B4%E7%A0%81.png"
          alt=""
        />
      </div>
    </li>
  </ul>
</template>

<script>
import Icon from "@/components/Icon/index.vue";
export default {
  components: {
    Icon,
  },
};
</script>

<style scoped lang="less">
@import "~@/styles/var.less";
.contact-container {
  list-style: none;
  padding: 20px;
  color: @gray;
  position: relative;
  @itemHeight: 30px;

  li {
    height: @itemHeight;
    line-height: 20px;
    margin: 14px 0;
    position: relative;
    &:hover {
      .pop {
        transform: scaleY(1);
      }
    }
  }
  a {
    cursor: pointer;
    display: flex;
    align-items: center;
    font-size: 14px;
  }
  .icon {
    font-size: 25px;
    width: 36px;
    &.weixin {
      font-size: 32px;
      text-indent: -3px;
    }
  }
  .pop {
    left: 0;
    bottom: @itemHeight + 5px;
    position: absolute;
    padding: 10px 15px;
    background: #fff;
    border-radius: 5px;
    transform: scaleY(0);
    transform-origin: center bottom;
    transition: 0.5s;
    img {
      width: 100px;
      height: 100px;
    }
    &::after {
      content: "";
      width: 8px;
      height: 8px;
      background: #fff;
      left: 50%;
      position: absolute;
      bottom: -4px;
      transform: translate(-50%) rotate(45deg);
    }
  }
}
</style>