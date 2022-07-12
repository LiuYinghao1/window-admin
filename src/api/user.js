import request from "@/utils/request";

/**
 * 获取验证码接口
 * @returns
 */
const getCaptcha = () => {
  return request({
    url: "/captcha",
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
      "/login?username=" +
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

export default {
  getCaptcha,
  login,
};