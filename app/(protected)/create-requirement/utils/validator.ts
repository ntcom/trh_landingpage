import * as yup from "yup";

export const yupMeet = yup.object().shape({
  name: yup.string().required("Vui lòng nhập Nội dung cuộc họp").default(""),
  location: yup.string().required("Vui lòng chọn Vị trí phòng họp").default(""),
  // category: yup.string().required("Vui lòng nhập Danh mục").default(""),
  date_start: yup
    .string()
    .required("Vui lòng nhập Thời Thời gian bắt đầu")
    .default(""),
  date_end: yup
    .string()
    .required("Vui lòng nhập Thời gian kết thúc")
    .default(""),
  participants_ids: yup
    .string()
    .required("Vui lòng nhập Người tham gia")
    .default(""),
  employee_id: yup.string().required("Vui lòng nhập Người chủ trì").default(""),
  request_more_ids: yup
    .string()
    .required("Vui lòng nhập Yêu cầu thêm")
    .default(""),
  // approver_ids: yup
  //   .string()
  //   .required("Vui lòng nhập Người phê duyệt")
  //   .default(""),
});

export const yupOrder = yup.object().shape({
  componentId: yup.string().required("Vui lòng chọn component").default(""),
});

export const yupSuportReport = yup.object().shape({
  name: yup.string().required("Vui lòng nhập tên dịch vụ").default(""),
  // channel_source: yup.string().required("Vui lòng chọn Kênh").default(""),
  type_service_id: yup
    .string()
    .required("Vui lòng chọn Loại dịch vụ")
    .default(""),
  service_child_id: yup
    .string()
    .required("Vui lòng chọn Dịch vụ con")
    .default(""),
  service_detail_id: yup
    .string()
    .required("Vui lòng chọn Dịch vụ chi tiết")
    .default(""),
  receiving_department_id: yup
    .string()
    .required("Vui lòng chọn Bộ phận tiếp nhận")
    .default(""),
  team_id: yup.string().required("Vui lòng chọn Đội ngũ hỗ trợ ").default(""),
  user_id: yup.string().required("Vui lòng chọn Người xử lý").default(""),
});

export const yupEmpty = yup.object().shape({});
