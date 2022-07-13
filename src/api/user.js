import request from "@/utils/request";

/**
 * 获取验证码接口
 * @returns
 */
const getCaptcha = () => {
  return request({
    url: "/sys/captcha",
    method: "GET",
  });
};

/**
 * 登录接口
 * @param {*} data
 * @returns
 */
const login = (data) => {
  return request({
    url:
      "/sys/login?username=" +
      data.username +
      "&password=" +
      data.password +
      "&code=" +
      data.code +
      "&token=" +
      data.token,
    method: "POST",
    data,
  });
};

/**
 * 获取用户管理列表数据
 * @returns
 */
const getUserInfo = (data) => {
  return request({
    url: "/sys/user/list",
    method: "GET",
    data,
  });
};

/**
 * 退出登录接口
 * @returns 
 */
const loginout=()=>{
  return request({
    url:'/sys/logout',
    method:"POST"
  })
}

export default {
  getCaptcha,
  login,
  getUserInfo,
  loginout
};
