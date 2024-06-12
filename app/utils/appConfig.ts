export const menu = [
  {
    title: "Trang chủ",
    path: "/",
  },
  {
    title: "Tạo yêu cầu mới",
    path: "/create-requirement",
  },
  {
    title: "Kiểm tra tiến độ",
    path: "/",
  },
  {
    title: "Đăng nhập",
    path: "/",
  },
] as const;

export const appConfig = {
  tokenName: "TH_access_token",
  url: "https://test.tranghuy.com/api",
} as const;
