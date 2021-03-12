<template>
  <div class="wrapper">
    <img class="wrapper__icon" src="http://www.dell-lee.com/imgs/vue3/user.png" alt="" />
    <div class="wrapper__input username">
      <input v-model="username" type="text" placeholder="请输入手机号" />
    </div>
    <div class="wrapper__input password">
      <input v-model="password" type="password" placeholder="请输入密码" autocomplete="new-password" />
    </div>
    <div class="wrapper__login" @click="handleLogin">登录</div>
    <div class="wrapper__link">
      <span class="wrapper__link__register" @click="redirectToRegister">立即注册</span>
      <span class="wrapper__link__shu">|</span>
      <span class="wrapper__link__forget">忘记密码</span>
    </div>
  </div>
  <Toast v-show="toastShow" :message="toastMessage"></Toast>
</template>
<script>
import { reactive, toRefs } from "vue";
import { useRouter } from "vue-router";
import { post } from "../../utils/request";
import Toast, { useToastEffect } from "../../components/Toast";

const useLoginEffect = (showToast) => {
  const router = useRouter();
  const loginData = reactive({
    username: "",
    password: "",
  });
  const { username, password } = toRefs(loginData);
  const handleLogin = () => {
    post("/api/user/login", { username: username.value, password: password.value })
      .then((resp) => {
        if (resp?.errno === 0) {
          localStorage.isLogin = true;
          router.push({ name: "Home" });
        } else {
          showToast("登录失败");
        }
      })
      .catch(() => {
        showToast("请求失败");
      });
  };
  return {
    username,
    password,
    handleLogin,
  };
};
const useRegisterEffect = () => {
  const router = useRouter();
  const redirectToRegister = () => {
    router.push({ name: "Register" });
  };
  return { redirectToRegister };
};
export default {
  name: "Login",
  components: { Toast },
  setup() {
    const { toastShow, toastMessage, showToast } = useToastEffect();
    const { username, password, handleLogin } = useLoginEffect(showToast);
    const { redirectToRegister } = useRegisterEffect();

    return { toastShow, toastMessage, showToast, username, password, handleLogin, redirectToRegister };
  },
};
</script>
<style lang="scss" scoped>
.wrapper {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 0;
  right: 0;
  &__icon {
    width: 0.66rem;
    height: 0.66rem;
    display: block;
    margin: 0 auto 0.4rem;
  }
  &__input {
    margin: 0 0.4rem;
    height: 0.48rem;
    background: #f9f9f9;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 0.06rem;
    border-radius: 0.06rem;
    color: rgba(0, 0, 0, 0.5);
    input {
      outline: none;
      border: none;
      padding: 0 0 0 0.12rem;
      line-height: 0.48rem;
      width: 100%;
      font-size: 0.16rem;
      background: none;
      &::placeholder {
        color: rgba(0, 0, 0, 0.5);
      }
    }
    &.username {
      margin-bottom: 0.16rem;
    }
    &.password {
      margin-bottom: 0.32rem;
    }
  }
  &__login {
    margin: 0 0.4rem 0.16rem;
    background: #0091ff;
    box-shadow: 0 0.04rem 0.08rem 0 rgba(0, 145, 255, 0.32);
    border-radius: 0.04rem;
    border-radius: 0.04rem;
    font-size: 0.16rem;
    color: #ffffff;
    line-height: 0.48rem;
    text-align: center;
  }
  &__link {
    font-size: 0.14rem;
    color: rgba(0, 0, 0, 0.5);
    text-align: center;
    &__register {
    }
    &__shu {
      margin: 0 0.12rem;
    }
    &__forget {
    }
  }
}
</style>