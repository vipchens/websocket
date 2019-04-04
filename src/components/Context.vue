<template>
  <ul>
    <li
      v-for="item in data"
      :key="item.id"
      :class="{ customer: item.type === 2, service: item.type === 1 }"
    >
      <div class="__avatar">
        <img
          :src="item.type === 1 ? serviceIcon : customerIcon"
          width="100%"
        >
      </div>
      <div class="details">
        <div class="create-time">
          {{ item.create_time }}
        </div>
        <div>
          {{ item.context }}
        </div>
      </div>
      <div class="clearfix" />
    </li>
  </ul>
</template>

<script>
  import Service from "@/resources/service.png";
  import Customer from "@/resources/customer.png";

  export default {
    props: {
      data: {
        type: Array,
        default () {
          return [];
        }
      }
    },
    computed: {
      serviceIcon () {
        return Service;
      },
      customerIcon () {
        return Customer;
      }
    },
  }
</script>

<style lang="less" scoped>
  ul {
    padding: 0;
    li {
      margin-bottom: 10px;
      list-style: none;
    }
  }
  .customer {
    text-align: right;
    .__avatar, .details {
      float: right;
    }
    .details {
      margin-right: 20px;
      &:after {
        position: absolute;
        content: "";
        width: 0px;
        height: 0px;
        border-left: 5px solid #eee;
        border-top: 5px solid transparent;
        border-bottom: 5px solid transparent;
        top: 0;
        top: 50%;
        margin-top: -15px;
        right: -5px;
      }
    }
  }
  .service {
    text-align: left;
    .__avatar, .details {
      float: left;
    }
    .details {
      margin-left: 20px;
      &:before {
        position: absolute;
        content: "";
        height: 0;
        width: 0;
        pointer-events: none;
        border: solid transparent;
        border-color: rgba(136, 183, 213, 0);
        border-right-color: #eeeeee;
        border-width: 5px;
        top: 50%;
        right: 100%;
        margin-top: -15px;
      }
    }
  }
  .details {
    position: relative;;
    background: #eee;
    padding: 8px;
    border-radius: 8px;
    font-size: 14px;
    .create-time {
      font-size: 12px;
      color: #999;
    }
  }
  .__avatar {
    display: inline-block;
    width: 40px;
    height: 40px;
  }
  .clearfix {
    clear: both;
  }
</style>
