<template>
  <div>
    <form>
      <el-container>
        <el-header>
          <div id="title">
            <h1>管理系统</h1>
          </div>
        </el-header>
        <el-main>
          <div>
            <span>账号</span>
            <input type="text" />
          </div>
          <div>
            <span>密码</span>
            <input type="passwo rd" />
          </div>
        </el-main>
        <div>
          <!-- 按钮 -->
          <!-- <button type="submit">登录</button> -->
          <el-button type="primary">登录</el-button>
        </div>
      </el-container>
    </form>
  </div>
</template>

<script>
export default {
  name: "LoginForm",
  created() {},
  data() {
    return {};
  },
  props: {},
  methods: {},
};
</script>

<style lang="scss" scoped></style>
