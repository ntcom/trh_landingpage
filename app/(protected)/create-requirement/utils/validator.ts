import * as yup from "yup";

export const yupMeet = yup.object().shape({
  content: yup.string().required("Vui lòng nhập Nội dung cuộc họp").default(""),
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
    .array()
    .min(1, "Vui lòng chọn Người tham gia")
    .required("Vui lòng chọn Người tham gia"),
  employee_id: yup.number().required("Vui lòng chọn Người chủ trì"),
  // category_id: yup.number().required("Vui lòng chọn Danh mục"),
  request_more_ids: yup
    .array()
    .min(1, "Vui lòng chọn Yêu cầu thêm")
    .required("Vui lòng chọn Yêu cầu thêm"),
  approver_ids: yup
    .array()
    .min(1, "Vui lòng chọn Người phê duyệt")
    .required("Vui lòng chọn Người phê duyệt"),
  meet_file: yup
    .array()
    .min(1, "Vui lòng chọn File đính kèm")
    .required("Vui lòng chọn File đính kèm"),
});

export const yupOrder = yup.object().shape({
  componentId: yup.string().required("Vui lòng chọn component").default(""),
});

export const yupSuportReport = yup.object().shape({
  name: yup.string().required("Vui lòng nhập Tên dịch vụ").default(""),
  description: yup
    .string()
    .required("Vui lòng nhập Mô tả nội dung yêu cầu")
    .default(""),
  // channel_source: yup.string().required("Vui lòng chọn Kênh").default(""),
  type_service_id: yup.number().required("Vui lòng chọn Loại dịch vụ"),
  service_child_id: yup.number().required("Vui lòng chọn Dịch vụ con"),
  service_detail_id: yup.number().required("Vui lòng chọn Dịch vụ chi tiết"),
  receiving_department_id: yup
    .number()
    .required("Vui lòng chọn Bộ phận tiếp nhận"),
  team_id: yup.number().required("Vui lòng chọn Đội ngũ hỗ trợ "),
  user_id: yup.number().required("Vui lòng chọn Người xử lý"),
  support_file: yup
    .array()
    .min(1, "Vui lòng chọn File đính kèm")
    .required("Vui lòng chọn File đính kèm"),
});

export const yupEmpty = yup.object().shape({});
